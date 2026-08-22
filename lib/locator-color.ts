// Reproduces Minecraft Java Edition's locator bar waypoint color computation
// bit-for-bit. Verified against real UUID -> color pairs from an independent
// reference implementation before shipping (see project notes) — not guessed.
//
// Algorithm: Java's UUID.hashCode() folds the 128-bit UUID down to a signed
// 32-bit int; the low 24 bits become raw RGB; the renderer then keeps hue and
// saturation but pins HSV brightness to 0.9 before drawing the marker.

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

export interface LocatorColorResult {
  raw: { rgb: RgbColor; hex: string };
  inGame: { rgb: RgbColor; hex: string };
}

const UUID_FORMAT =
  /^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i;

export function isValidUuidFormat(value: string): boolean {
  return UUID_FORMAT.test(value.trim());
}

// BigInt("...") calls are used instead of "123n" literal syntax so this
// compiles under the project's ES2017 TS target (literal suffix syntax
// requires ES2020+; the BigInt runtime type itself works fine either way).
const TWO = BigInt(2);
const SHIFT_64 = BigInt(64);
const SHIFT_63 = BigInt(63);
const SHIFT_32 = BigInt(32);
const MASK_64 = TWO ** SHIFT_64 - BigInt(1);
const MASK_32 = TWO ** SHIFT_32 - BigInt(1);
const SIGN_BIT_64 = TWO ** SHIFT_63;
const SIGN_BIT_32 = TWO ** BigInt(31);

function toSigned64(n: bigint): bigint {
  n &= MASK_64;
  return n >= SIGN_BIT_64 ? n - (MASK_64 + BigInt(1)) : n;
}

function toSigned32(n: bigint): bigint {
  n &= MASK_32;
  return n >= SIGN_BIT_32 ? n - (MASK_32 + BigInt(1)) : n;
}

/** Java's UUID.hashCode(): ((int)(hilo >> 32)) ^ (int) hilo, where hilo = mostSigBits ^ leastSigBits. */
export function uuidHashCode(uuid: string): number {
  const hex = uuid.replace(/-/g, "").toLowerCase();
  const mostSigBits = toSigned64(BigInt("0x" + hex.slice(0, 16)));
  const leastSigBits = toSigned64(BigInt("0x" + hex.slice(16, 32)));
  const hilo = toSigned64(mostSigBits ^ leastSigBits);
  const high32 = toSigned32(hilo >> SHIFT_32);
  const low32 = toSigned32(hilo & MASK_32);
  return Number(toSigned32(high32 ^ low32));
}

function rawRgbFromHash(hash: number): RgbColor {
  const unsigned = hash & 0xffffff;
  return {
    r: (unsigned >> 16) & 0xff,
    g: (unsigned >> 8) & 0xff,
    b: unsigned & 0xff,
  };
}

function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const s = max === 0 ? 0 : d / max;
  return [h, s, max];
}

function hsvToRgb(h: number, s: number, v: number): RgbColor {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r1 = 0;
  let g1 = 0;
  let b1 = 0;
  if (h < 60) [r1, g1, b1] = [c, x, 0];
  else if (h < 120) [r1, g1, b1] = [x, c, 0];
  else if (h < 180) [r1, g1, b1] = [0, c, x];
  else if (h < 240) [r1, g1, b1] = [0, x, c];
  else if (h < 300) [r1, g1, b1] = [x, 0, c];
  else [r1, g1, b1] = [c, 0, x];
  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
  };
}

function toHex({ r, g, b }: RgbColor): string {
  return (
    "#" +
    [r, g, b].map((v) => v.toString(16).padStart(2, "0").toUpperCase()).join("")
  );
}

/** Computes both the raw UUID-derived color and the actual in-game locator bar color (Java Edition only). */
export function computeLocatorColor(uuid: string): LocatorColorResult {
  const hash = uuidHashCode(uuid);
  const raw = rawRgbFromHash(hash);
  const [h, s] = rgbToHsv(raw.r, raw.g, raw.b);
  const inGame = hsvToRgb(h, s, 0.9);
  return {
    raw: { rgb: raw, hex: toHex(raw) },
    inGame: { rgb: inGame, hex: toHex(inGame) },
  };
}
