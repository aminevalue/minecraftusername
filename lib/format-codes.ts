export interface MinecraftColor {
  code: string;
  name: string;
  hex: string;
}

export const MINECRAFT_COLORS: MinecraftColor[] = [
  { code: "0", name: "Black", hex: "#000000" },
  { code: "1", name: "Dark Blue", hex: "#0000AA" },
  { code: "2", name: "Dark Green", hex: "#00AA00" },
  { code: "3", name: "Dark Aqua", hex: "#00AAAA" },
  { code: "4", name: "Dark Red", hex: "#AA0000" },
  { code: "5", name: "Dark Purple", hex: "#AA00AA" },
  { code: "6", name: "Gold", hex: "#FFAA00" },
  { code: "7", name: "Gray", hex: "#AAAAAA" },
  { code: "8", name: "Dark Gray", hex: "#555555" },
  { code: "9", name: "Blue", hex: "#5555FF" },
  { code: "a", name: "Green", hex: "#55FF55" },
  { code: "b", name: "Aqua", hex: "#55FFFF" },
  { code: "c", name: "Red", hex: "#FF5555" },
  { code: "d", name: "Light Purple", hex: "#FF55FF" },
  { code: "e", name: "Yellow", hex: "#FFFF55" },
  { code: "f", name: "White", hex: "#FFFFFF" },
];

export interface MinecraftFormat {
  code: string;
  name: string;
  description: string;
}

export const MINECRAFT_FORMATS: MinecraftFormat[] = [
  { code: "l", name: "Bold", description: "Thickens the text." },
  { code: "o", name: "Italic", description: "Slants the text." },
  { code: "n", name: "Underline", description: "Draws a line under the text." },
  { code: "m", name: "Strikethrough", description: "Draws a line through the text." },
  { code: "k", name: "Obfuscated", description: "Randomly cycles the characters while displayed." },
  { code: "r", name: "Reset", description: "Clears all color and formatting after this point." },
];

export function toAmpersandCode(colorCode: string, formatCodes: string[], text: string): string {
  const prefix = [colorCode, ...formatCodes].map((c) => `&${c}`).join("");
  return `${prefix}${text}`;
}

export function toSectionCode(colorCode: string, formatCodes: string[], text: string): string {
  const prefix = [colorCode, ...formatCodes].map((c) => `§${c}`).join("");
  return `${prefix}${text}`;
}
