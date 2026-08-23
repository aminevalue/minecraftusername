export const SITE_NAME = "Minecraft Username";
export const SITE_URL = "https://www.minecraftusername.com";
export const SITE_TAGLINE = "Free Minecraft username tools & name ideas";
export const SITE_DESCRIPTION =
  "Check Minecraft username availability, look up history, preview color styles, and generate name ideas — free tools built for players, not an official Mojang or Microsoft product.";

export type NavLink = {
  href: string;
  label: string;
  description: string;
};

export const TOOL_LINKS: NavLink[] = [
  {
    href: "/minecraft-username-checker",
    label: "Username Checker",
    description: "Check if a Minecraft username is taken or available.",
  },
  {
    href: "/minecraft-username-generator",
    label: "Username Generator",
    description: "Generate name ideas by theme, style, and length.",
  },
  {
    href: "/minecraft-username-history-checker",
    label: "History Checker",
    description: "Look up a username and learn what history data still exists.",
  },
  {
    href: "/minecraft-username-color-checker",
    label: "Color & Style Preview",
    description: "Preview Minecraft chat colors and text formatting.",
  },
  {
    href: "/minecraft-3-letter-usernames",
    label: "3-Letter Usernames",
    description: "Check ultra-short 3-letter names.",
  },
  {
    href: "/minecraft-4-letter-usernames",
    label: "4-Letter Usernames",
    description: "Check short 4-letter names.",
  },
];

export const IDEA_CATEGORY_LINKS: NavLink[] = [
  {
    href: "/minecraft-cool-usernames",
    label: "Cool Minecraft Names",
    description: "Sharp, confident names that sound good on any server.",
  },
  {
    href: "/minecraft-funny-usernames",
    label: "Funny Minecraft Names",
    description: "Jokes, puns, and names that make people laugh.",
  },
  {
    href: "/minecraft-short-usernames",
    label: "Short Minecraft Names",
    description: "Quick, clean, easy-to-type names.",
  },
  {
    href: "/minecraft-3-letter-usernames",
    label: "3 Letter Minecraft Names",
    description: "The rarest, shortest names in the game.",
  },
  {
    href: "/minecraft-4-letter-usernames",
    label: "4 Letter Minecraft Names",
    description: "Short names with a bit more room to work with.",
  },
  {
    href: "/minecraft-og-usernames",
    label: "OG Minecraft Names",
    description: "Names with that early-Minecraft, old-school feel.",
  },
  {
    href: "/minecraft-unique-usernames",
    label: "Unique Minecraft Names",
    description: "Distinctive names that don't blend into the crowd.",
  },
  {
    href: "/minecraft-usernames-for-boys",
    label: "Minecraft Names for Boys",
    description: "Popular naming styles boys tend to search for.",
  },
  {
    href: "/minecraft-usernames-for-girls",
    label: "Minecraft Names for Girls",
    description: "Popular naming styles girls tend to search for.",
  },
  {
    href: "/minecraft-aesthetic-usernames",
    label: "Aesthetic Minecraft Names",
    description: "Soft, stylized names built around a mood or vibe.",
  },
  {
    href: "/minecraft-tryhard-usernames",
    label: "Tryhard Minecraft Names",
    description: "Sweaty, competitive-sounding names.",
  },
  {
    href: "/minecraft-pvp-usernames",
    label: "Minecraft PvP Names",
    description: "Short, aggressive names built for combat servers.",
  },
  {
    href: "/minecraft-youtuber-usernames",
    label: "Minecraft YouTuber Names",
    description: "Brandable names for content creators.",
  },
  {
    href: "/minecraft-clan-names",
    label: "Minecraft Clan Names",
    description: "Names for teams, clans, and factions.",
  },
];

export const COLOR_CODE_LINKS: NavLink[] = [
  {
    href: "/minecraft-color-codes",
    label: "Minecraft Color Codes",
    description: "The full reference: all 16 colors, formatting codes, and where they work.",
  },
  {
    href: "/minecraft-chat-color-codes",
    label: "Minecraft Chat Color Codes",
    description: "Why typing color codes in vanilla chat doesn't work, and how servers really do it.",
  },
  {
    href: "/minecraft-hex-color-codes",
    label: "Minecraft Hex Color Codes",
    description: "Custom RGB colors beyond the basic 16, Java Edition only.",
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { href: "/about", label: "About", description: "Who runs this site and why." },
  { href: "/contact", label: "Contact", description: "How to reach us." },
  { href: "/privacy-policy", label: "Privacy Policy", description: "How data is handled." },
  { href: "/terms-of-service", label: "Terms of Service", description: "Rules for using the site." },
  { href: "/cookie-policy", label: "Cookie Policy", description: "How cookies and ads work." },
  { href: "/disclaimer", label: "Disclaimer", description: "Independence from Mojang/Microsoft." },
];

export const ALL_STATIC_ROUTES: string[] = Array.from(
  new Set([
    "/",
    "/minecraft-username-ideas",
    ...TOOL_LINKS.map((l) => l.href),
    ...IDEA_CATEGORY_LINKS.map((l) => l.href),
    ...COLOR_CODE_LINKS.map((l) => l.href),
    ...LEGAL_LINKS.map((l) => l.href),
  ])
);
