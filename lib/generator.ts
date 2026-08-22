export type GeneratorTheme =
  | "fantasy"
  | "nature"
  | "tech"
  | "mythology"
  | "animals"
  | "food"
  | "space"
  | "dark";

export type GeneratorStyle =
  | "cool"
  | "funny"
  | "og"
  | "aesthetic"
  | "tryhard"
  | "pvp";

const THEME_WORDS: Record<GeneratorTheme, string[]> = {
  fantasy: [
    "Wizard", "Dragon", "Knight", "Rogue", "Wyvern", "Phoenix", "Griffin", "Sorcerer",
    "Paladin", "Ranger", "Elf", "Goblin", "Titan", "Wraith", "Oracle", "Warden",
    "Runes", "Sigil", "Ember", "Frost", "Thorn", "Blade", "Talon", "Fable",
  ],
  nature: [
    "Willow", "Cedar", "Storm", "River", "Moss", "Birch", "Ridge", "Canyon",
    "Meadow", "Timber", "Boulder", "Thicket", "Bramble", "Fern", "Cliffside", "Driftwood",
    "Tundra", "Prairie", "Marsh", "Grove", "Reef", "Frostbite", "Wildfire", "Highland",
  ],
  tech: [
    "Circuit", "Vector", "Byte", "Cipher", "Cortex", "Nova", "Pixel", "Turbo",
    "Signal", "Kernel", "Matrix", "Static", "Volt", "Proxy", "Binary", "Nexus",
    "Glitch", "Overclock", "Synth", "Terminal", "Uplink", "Chrome", "Neon", "Quantum",
  ],
  mythology: [
    "Atlas", "Zeus", "Loki", "Odin", "Hades", "Freya", "Kronos", "Hydra",
    "Chimera", "Valkyrie", "Nyx", "Fenrir", "Icarus", "Medusa", "Orpheus", "Cerberus",
    "Ragnarok", "Olympus", "Asgard", "Styx", "Charon", "Minotaur", "Siren", "Phantom",
  ],
  animals: [
    "Wolf", "Falcon", "Panther", "Viper", "Otter", "Raven", "Lynx", "Badger",
    "Heron", "Cobra", "Mantis", "Owl", "Bison", "Hawk", "Jaguar", "Sparrow",
    "Fox", "Stag", "Orca", "Marten", "Kestrel", "Puma", "Crow", "Boar",
  ],
  food: [
    "Waffle", "Pretzel", "Biscuit", "Mango", "Peach", "Cocoa", "Maple", "Ginger",
    "Toast", "Noodle", "Pickle", "Berry", "Cinnamon", "Honey", "Pepper", "Wasabi",
    "Nacho", "Bagel", "Kiwi", "Muffin", "Taco", "Cider", "S'more", "Marsh",
  ],
  space: [
    "Comet", "Nebula", "Orbit", "Lunar", "Solstice", "Meteor", "Astro", "Cosmos",
    "Pulsar", "Eclipse", "Galaxy", "Gravity", "Nova", "Quasar", "Rocket", "Stardust",
    "Voidwalker", "Zenith", "Halo", "Satellite", "Photon", "Vortex", "Aurora", "Drift",
  ],
  dark: [
    "Shadow", "Reaper", "Widow", "Crypt", "Raven", "Grim", "Venom", "Wraith",
    "Onyx", "Vulture", "Nightfall", "Abyss", "Crimson", "Sable", "Hollow", "Dusk",
    "Fang", "Requiem", "Cinder", "Blight", "Specter", "Gloom", "Thorn", "Void",
  ],
};

const STYLE_MODIFIERS: Record<GeneratorStyle, { prefixes: string[]; suffixes: string[] }> = {
  cool: { prefixes: ["Prime", "Ace", "Rogue", "Blaze"], suffixes: ["X", "Prime", "Edge", "Core"] },
  funny: { prefixes: ["Sir", "Captain", "Mister", "Lil"], suffixes: ["Nugget", "Waffles", "Bonk", "Gremlin"] },
  og: { prefixes: ["The", "Real", "Original"], suffixes: ["OG", "Classic", "Legacy"] },
  aesthetic: { prefixes: ["Soft", "Moon", "Pastel", "Velvet"], suffixes: ["Bloom", "Haze", "Muse", "Glow"] },
  tryhard: { prefixes: ["xX", "Elite", "Apex", "God"], suffixes: ["Xx", "TTV", "YT", "Sweat"] },
  pvp: { prefixes: ["Toxic", "Clutch", "Sweaty", "Grim"], suffixes: ["Slayer", "Kill", "PvP", "Combo"] },
};

export interface GeneratorOptions {
  theme: GeneratorTheme;
  style: GeneratorStyle;
  useNumbers: boolean;
  shortNames: boolean;
  count?: number;
}

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumberSuffix(): string {
  const length = Math.random() > 0.5 ? 2 : 3;
  const max = length === 2 ? 99 : 999;
  const min = length === 2 ? 10 : 100;
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

function truncateToMinecraftLimit(name: string): string {
  return name.slice(0, 16);
}

export function generateUsernames(options: GeneratorOptions): string[] {
  const { theme, style, useNumbers, shortNames, count = 12 } = options;
  const words = THEME_WORDS[theme];
  const { prefixes, suffixes } = STYLE_MODIFIERS[style];

  const results = new Set<string>();
  let attempts = 0;

  while (results.size < count && attempts < count * 12) {
    attempts++;
    const word = randomFrom(words);
    const pattern = Math.floor(Math.random() * 5);
    let name: string;

    if (shortNames) {
      const shortWord = words
        .filter((w) => w.length <= 6)
        .concat(words)
        .sort((a, b) => a.length - b.length)[0];
      const base = (shortWord ?? word).slice(0, 6);
      name = useNumbers ? `${base}${randomNumberSuffix()}` : base;
    } else {
      switch (pattern) {
        case 0:
          name = `${randomFrom(prefixes)}${word}`;
          break;
        case 1:
          name = `${word}${randomFrom(suffixes)}`;
          break;
        case 2: {
          const second = randomFrom(words.filter((w) => w !== word));
          name = `${word}${second}`;
          break;
        }
        case 3:
          name = `${randomFrom(prefixes)}${word}${randomFrom(suffixes)}`;
          break;
        default:
          name = word;
      }
      if (useNumbers && Math.random() > 0.4) {
        name = `${name}${randomNumberSuffix()}`;
      }
    }

    name = truncateToMinecraftLimit(name.replace(/[^A-Za-z0-9_]/g, ""));
    if (name.length >= 3) {
      results.add(name);
    }
  }

  return Array.from(results);
}

export const THEME_LABELS: Record<GeneratorTheme, string> = {
  fantasy: "Fantasy",
  nature: "Nature",
  tech: "Tech / Sci-Fi",
  mythology: "Mythology",
  animals: "Animals",
  food: "Food",
  space: "Space",
  dark: "Dark / Edgy",
};

export const STYLE_LABELS: Record<GeneratorStyle, string> = {
  cool: "Cool",
  funny: "Funny",
  og: "OG",
  aesthetic: "Aesthetic",
  tryhard: "Tryhard",
  pvp: "PvP",
};
