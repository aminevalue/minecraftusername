export type UsernameLookupStatus =
  | "taken"
  | "available"
  | "invalid"
  | "rate_limited"
  | "error";

export interface UsernameLookupResult {
  status: UsernameLookupStatus;
  username: string;
  uuid?: string;
  exactName?: string;
  skinUrl?: string;
}

const USERNAME_FORMAT = /^[A-Za-z0-9_]{3,16}$/;

// Best-effort per-instance cache. Serverless instances are ephemeral, so this
// only dedupes bursts of repeat lookups within the same warm instance — it is
// not a source of truth and is never used to fabricate a result.
const CACHE_TTL_MS = 60_000;
const cache = new Map<string, { result: UsernameLookupResult; expires: number }>();

export function isValidUsernameFormat(username: string): boolean {
  return USERNAME_FORMAT.test(username);
}

export async function lookupUsername(rawUsername: string): Promise<UsernameLookupResult> {
  const username = rawUsername.trim();

  if (!isValidUsernameFormat(username)) {
    return { status: "invalid", username };
  }

  const cacheKey = username.toLowerCase();
  const cached = cache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return cached.result;
  }

  let result: UsernameLookupResult;

  try {
    const res = await fetch(
      `https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(username)}`,
      {
        headers: { Accept: "application/json" },
        cache: "no-store",
      }
    );

    if (res.status === 200) {
      const data = (await res.json()) as { id?: string; name?: string };
      result = {
        status: "taken",
        username,
        uuid: data.id,
        exactName: data.name,
      };
    } else if (res.status === 404) {
      result = { status: "available", username };
    } else if (res.status === 429) {
      result = { status: "rate_limited", username };
    } else {
      result = { status: "error", username };
    }
  } catch {
    result = { status: "error", username };
  }

  if (result.status === "taken" || result.status === "available") {
    cache.set(cacheKey, { result, expires: Date.now() + CACHE_TTL_MS });
  }

  return result;
}

interface MojangProfileProperty {
  name: string;
  value: string;
}

interface MojangProfileResponse {
  properties?: MojangProfileProperty[];
}

interface SkinTexturePayload {
  textures?: {
    SKIN?: { url?: string };
  };
}

export type UuidLookupStatus = "found" | "not_found" | "invalid" | "rate_limited" | "error";

export interface UuidLookupResult {
  status: UuidLookupStatus;
  uuid: string;
  username?: string;
}

const UUID_FORMAT = /^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/i;

export function isValidUuidFormat(uuid: string): boolean {
  return UUID_FORMAT.test(uuid.trim());
}

/**
 * Reverse lookup: given a UUID, find the Java Edition account currently
 * holding it. Uses the same official Mojang session server as the skin
 * lookup below. Verified live: 200 = found (with name), 204 = well-formed
 * UUID with no matching account, 400 = malformed UUID, 429 = rate limited.
 */
export async function lookupByUuid(rawUuid: string): Promise<UuidLookupResult> {
  const uuid = rawUuid.trim();

  if (!isValidUuidFormat(uuid)) {
    return { status: "invalid", uuid };
  }

  try {
    const res = await fetch(
      `https://sessionserver.mojang.com/session/minecraft/profile/${encodeURIComponent(uuid)}`,
      { headers: { Accept: "application/json" }, cache: "no-store" }
    );

    if (res.status === 200) {
      const data = (await res.json()) as { id?: string; name?: string };
      return { status: "found", uuid, username: data.name };
    }
    if (res.status === 204) {
      return { status: "not_found", uuid };
    }
    if (res.status === 400) {
      return { status: "invalid", uuid };
    }
    if (res.status === 429) {
      return { status: "rate_limited", uuid };
    }
    return { status: "error", uuid };
  } catch {
    return { status: "error", uuid };
  }
}

/**
 * Best-effort lookup of a player's current skin texture URL, straight from
 * Mojang's own session server (the same official source as the username
 * lookup above — no third-party skin-render service involved). Returns
 * undefined on any failure; callers must never fail the underlying username
 * check because this is unavailable.
 */
export async function fetchSkinUrl(uuid: string): Promise<string | undefined> {
  try {
    const res = await fetch(
      `https://sessionserver.mojang.com/session/minecraft/profile/${encodeURIComponent(uuid)}`,
      { headers: { Accept: "application/json" }, cache: "no-store" }
    );
    if (res.status !== 200) return undefined;

    const data = (await res.json()) as MojangProfileResponse;
    const texturesProperty = data.properties?.find((p) => p.name === "textures");
    if (!texturesProperty) return undefined;

    const decoded = Buffer.from(texturesProperty.value, "base64").toString("utf-8");
    const payload = JSON.parse(decoded) as SkinTexturePayload;
    const url = payload.textures?.SKIN?.url;
    // Mojang serves these over plain http:// — upgrade to https to avoid
    // mixed-content blocking on our https:// pages (textures.minecraft.net
    // supports TLS, just doesn't default to it in the API response).
    return url?.replace(/^http:\/\//, "https://");
  } catch {
    return undefined;
  }
}
