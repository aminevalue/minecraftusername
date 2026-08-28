import type { GeneratorStyle, GeneratorTheme } from "@/lib/generator";

export interface NameGroup {
  label: string;
  names: string[];
}

export interface TipSection {
  heading: string;
  paragraphs: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface CategoryContent {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  groups: NameGroup[];
  tips: TipSection[];
  faqs: Faq[];
  generatorTheme: GeneratorTheme;
  generatorStyle: GeneratorStyle;
}

export const CATEGORIES: CategoryContent[] = [
  {
    slug: "minecraft-cool-usernames",
    navLabel: "Cool Minecraft Names",
    h1: "Cool Minecraft Usernames",
    metaTitle: "Cool Minecraft Usernames — 40+ Ideas That Sound Sharp",
    metaDescription:
      "Browse cool Minecraft username ideas grouped by vibe — sleek, edgy, and confident names that work on any server, plus tips for picking one that lasts.",
    intro: [
      "\"Cool\" is the broadest name category there is, which is exactly why it's the hardest to nail — a cool name usually does one of three things: it sounds sharp out loud, it's short enough to read at a glance in chat, or it hints at a personality without trying too hard.",
      "The lists below are grouped by the kind of cool they lean into, so you can pick a lane instead of scrolling through fifty unrelated words.",
    ],
    groups: [
      {
        label: "Sleek & minimal",
        names: ["Vex", "Kade", "Rune", "Zephyr", "Onyx", "Vane", "Halcyon", "Kestrel", "Marrow", "Slate"],
      },
      {
        label: "Confident & bold",
        names: ["Ironclad", "Vantage", "Warfront", "Highbeam", "Apexis", "Boldstrike", "Nightforge", "Steelclaw", "Frostbite", "Blackout"],
      },
      {
        label: "Nature-edged",
        names: ["Wolfshade", "Stormrunner", "Ashgrove", "Duskfall", "Emberlynx", "Cindermoor", "Ridgewalker", "Thornback", "Frostpine", "Driftwolf"],
      },
      {
        label: "One-word statements",
        names: ["Momentum", "Voidline", "Catalyst", "Fallout", "Ricochet", "Static", "Aftermath", "Crossfire", "Blacksite", "Overdrive"],
      },
    ],
    tips: [
      {
        heading: "What actually makes a name read as \"cool\"",
        paragraphs: [
          "Short vowel-heavy words tend to sound sharper when spoken or typed quickly — compare \"Vex\" to \"Verticality.\" If a name takes more than a second to read, it usually loses the effect.",
          "Avoid stacking more than one theme at once (fantasy + tech + numbers, for example). One clear idea, executed cleanly, reads as more deliberate than a name trying to cover every base.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should a cool username include numbers?",
        answer:
          "Only if the name is taken without them. Numbers can help you claim a name, but a clean word-only name usually reads better than the same word with digits tacked on.",
      },
      {
        question: "Are one-word names better than combined names?",
        answer:
          "Not always — it depends on length and clarity. A short, clean single word (Vex, Onyx) and a well-paired compound (Stormrunner) can both work; the key is that it reads smoothly, not that it's short for its own sake.",
      },
    ],
    generatorTheme: "fantasy",
    generatorStyle: "cool",
  },
  {
    slug: "minecraft-funny-usernames",
    navLabel: "Funny Minecraft Names",
    h1: "Funny Minecraft Usernames",
    metaTitle: "Funny Minecraft Usernames — Puns & Jokes That Land",
    metaDescription:
      "A curated list of funny Minecraft username ideas — puns, self-deprecating jokes, and absurd combos — organized so you can find your kind of funny fast.",
    intro: [
      "Funny usernames work best when the joke is legible in under two seconds — a pun someone has to sound out, or a reference only you get, usually falls flat in a server chat scrolling past at full speed.",
      "The categories below split \"funny\" into a few distinct comedic lanes: wordplay, self-deprecating, and pure absurdity.",
    ],
    groups: [
      {
        label: "Puns & wordplay",
        names: ["Cobblestoned", "Netherlands", "Creeper_Nap", "Enderminate", "PortalToWork", "GrassIsGreener", "BlockAndRoll", "SlimeAndPun", "DiggingDeepDebt", "MineOverMatter"],
      },
      {
        label: "Self-deprecating",
        names: ["Perpetually_Lost", "FallDamageFan", "DiedToAZombie", "AFKMostly", "BadAtPvP", "AccidentalArson", "CreeperMagnet", "LagSpikeVictim", "TooManyRespawns", "StillNoDiamonds"],
      },
      {
        label: "Absurd & random",
        names: ["Sir_Waffles_III", "Chicken_Overlord", "Ok_Boomerang", "Emotional_Cow", "Suspicious_Stew", "Goblin_CFO", "Cardboard_Ender", "Discount_Steve", "Sentient_Dirt", "Real_Herobrine"],
      },
    ],
    tips: [
      {
        heading: "Timing and readability matter more than cleverness",
        paragraphs: [
          "The funniest username in the world doesn't land if nobody can parse it fast. Favor real words strung together over obscure abbreviations.",
          "If you play on a server with a age-appropriate audience or strict staff, keep the joke clean — many servers filter usernames, and edgy jokes are the most common casualty.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do funny usernames get flagged by server filters more often?",
        answer:
          "Sometimes — servers with strict chat/name filters may block words that resemble profanity or slurs even in a joking context. If a name gets rejected, try rephrasing rather than assuming it's permanently blocked everywhere.",
      },
      {
        question: "Are longer, sentence-like usernames allowed?",
        answer:
          "Only up to 16 characters, and only letters, numbers, and underscores — no spaces. Use underscores to fake spacing, like Suspicious_Stew.",
      },
    ],
    generatorTheme: "food",
    generatorStyle: "funny",
  },
  {
    slug: "minecraft-short-usernames",
    navLabel: "Short Minecraft Names",
    h1: "Short Minecraft Usernames",
    metaTitle: "Short Minecraft Usernames — Quick, Clean Name Ideas",
    metaDescription:
      "Short Minecraft username ideas that are fast to type and easy to remember, organized by length, plus a note on how scarce short names really are.",
    intro: [
      "Short usernames trade personality for speed — they're quick to type in chat, easy for friends to remember, and they read as established even if the account is brand new.",
      "If you want names constrained to an exact length, our dedicated 3-letter and 4-letter checkers are a faster way to test specific combinations than scanning a list.",
    ],
    groups: [
      {
        label: "3–4 letters",
        names: ["Kip", "Zor", "Rax", "Vye", "Nox", "Lume", "Fenn", "Orin", "Skye", "Wren"],
      },
      {
        label: "5–6 letters",
        names: ["Blaze", "Rivet", "Crane", "Ashen", "Quill", "Talon", "Ember", "Marsh", "Slate", "Briar"],
      },
      {
        label: "Short + number",
        names: ["Fox07", "Ryn21", "Kip99", "Ash14", "Nyx03", "Vex88", "Lux22", "Orin7", "Zed19", "Skye5"],
      },
    ],
    tips: [
      {
        heading: "Short doesn't mean available",
        paragraphs: [
          "Short names are the single most competitive category on Minecraft — every combination under 5 characters has been getting claimed steadily since 2009. Treat every list here as inspiration to check, not a guarantee.",
          "If your first few picks are taken, try swapping a single letter or adding one digit rather than abandoning the name entirely.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why are almost all short names already taken?",
        answer:
          "The pool of possible combinations shrinks fast as length decreases — there are only 37 possible characters per slot, so 3–4 character names have far fewer combinations than longer ones, and they've had over a decade to get claimed.",
      },
      {
        question: "What's the fastest way to check several short names?",
        answer:
          "Use the Username Checker or the dedicated 3-Letter / 4-Letter tools — check one at a time, since there's no bulk-checking feature that respects Mojang's rate limits.",
      },
    ],
    generatorTheme: "nature",
    generatorStyle: "cool",
  },
  {
    slug: "minecraft-og-usernames",
    navLabel: "OG Minecraft Names",
    h1: "OG Minecraft Usernames",
    metaTitle: "OG Minecraft Usernames — Old-School Name Ideas",
    metaDescription:
      "OG-style Minecraft username ideas that capture the early-Minecraft, classic-server feel — plus what actually makes a name read as 'OG'.",
    intro: [
      "\"OG\" names borrow the feel of Minecraft's early years — plain, slightly blocky, often just a first name or simple noun without decoration. Think early YouTube Let's Plays and 2011-era server lists.",
      "These names lean on simplicity rather than cleverness, which is part of what reads as authentic rather than manufactured.",
    ],
    groups: [
      {
        label: "Classic single words",
        names: ["Miner_Joe", "CraftKing", "BlockHunter", "StoneAge_Steve", "PixelPioneer", "DirtyPickaxe", "OldSchoolCrafter", "RetroBuilder", "ClassicCrafter", "VanillaOnly"],
      },
      {
        label: "Plain name + number",
        names: ["Alex99", "Jake07", "Chris13", "Sam21", "Mike88", "Tyler04", "Jordan17", "Ryan22", "Cody11", "Dylan09"],
      },
      {
        label: "Early-Minecraft vibe",
        names: ["LavaBucket", "TNT_Wizard", "RedstoneRookie", "CreeperHunter07", "GriefProof", "SurvivalOnly", "HardcoreHank", "BedrockBaron", "NoobSlayer", "PickaxePete"],
      },
    ],
    tips: [
      {
        heading: "Simplicity is the point",
        paragraphs: [
          "Resist the urge to add extra flourishes — the OG aesthetic works because it looks like it wasn't trying to be cool, it just existed before \"trying\" was a factor.",
          "A plain first name plus a two-digit number (like a birth year suffix) is one of the most authentic OG patterns, since that's how millions of real accounts were actually named in Minecraft's first few years.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does an OG-style name make my account look older than it is?",
        answer:
          "It can influence perception in casual conversation, but it has no effect on your account's actual creation date, which servers and plugins can check independently if they want to verify age.",
      },
      {
        question: "Are real 2009–2012-era usernames still available?",
        answer:
          "Some are, since accounts get renamed or abandoned over time — check any specific name you have in mind with our Username Checker rather than assuming it's gone.",
      },
    ],
    generatorTheme: "tech",
    generatorStyle: "og",
  },
  {
    slug: "minecraft-unique-usernames",
    navLabel: "Unique Minecraft Names",
    h1: "Unique Minecraft Usernames",
    metaTitle: "Unique Minecraft Usernames — Stand-Out Name Ideas",
    metaDescription:
      "Distinctive Minecraft username ideas built to avoid the most common naming patterns, with practical tips for creating a name that's actually yours.",
    intro: [
      "\"Unique\" is less a style than a goal — the aim here is to dodge the naming patterns everyone else defaults to (first name + birth year, a single popular noun, an obvious pun) in favor of something that reads as deliberately yours.",
      "The lists below favor unusual word pairings and invented-feeling words over recognizable off-the-shelf combinations.",
    ],
    groups: [
      {
        label: "Invented-sounding words",
        names: ["Vellithra", "Korvane", "Ashmerel", "Drevoka", "Silvenar", "Quorith", "Belnara", "Tavrune", "Ilvenor", "Marquessa"],
      },
      {
        label: "Unexpected pairings",
        names: ["ButterKnifeFox", "MidnightAccountant", "QuietAvalanche", "PaperLanternWolf", "SlowMotionComet", "GrayscaleFinch", "PolitePirate", "PatientArsonist", "ForgottenPostcard", "LukewarmMeteor"],
      },
      {
        label: "Personal-feeling short forms",
        names: ["Vynn", "Thal", "Ezme", "Corvix", "Aelin", "Brael", "Ymrel", "Sorne", "Kaelo", "Thessy"],
      },
    ],
    tips: [
      {
        heading: "How to test if a name is actually unique",
        paragraphs: [
          "Search the exact name on YouTube, Discord, and a general web search before settling on it — a name can feel original to you and still belong to a well-known streamer or existing community member.",
          "Slightly misspelled or invented words (Vellithra, Korvane) are almost always genuinely unclaimed, since they don't exist outside your own naming choice.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an invented word better than a real word for uniqueness?",
        answer:
          "For pure uniqueness, yes — invented words have essentially no competition. The tradeoff is memorability, since real words are easier for friends to recall and spell correctly.",
      },
      {
        question: "How do I know if a name is already associated with someone famous?",
        answer:
          "Search it directly on YouTube and a general search engine before committing. Availability on Minecraft doesn't mean the name is free of association elsewhere.",
      },
    ],
    generatorTheme: "mythology",
    generatorStyle: "aesthetic",
  },
  {
    slug: "minecraft-usernames-for-boys",
    navLabel: "Minecraft Names for Boys",
    h1: "Minecraft Usernames for Boys",
    metaTitle: "Minecraft Usernames for Boys — Popular Name Ideas",
    metaDescription:
      "Minecraft username ideas in styles that boys commonly search for — action-driven, gaming-themed, and confident names, with tips for picking one.",
    intro: [
      "This list reflects the naming styles most commonly searched under this term — action words, combat themes, and gaming-culture references tend to dominate. None of these are exclusive to any gender; pick whatever actually fits.",
      "Names are grouped by tone so you can match the energy you want, from quietly confident to loudly competitive.",
    ],
    groups: [
      {
        label: "Action & combat",
        names: ["Ironstrike", "Shockblade", "Grimforce", "Warhammer99", "Bladefury", "Steelrunner", "Ragefire", "Combatzero", "Frostblade", "Nightstrike"],
      },
      {
        label: "Gaming culture",
        names: ["PixelHunter", "RespawnKing", "LagSlayer", "CriticalHitz", "NoScopeNick", "GG_Wizard", "SpeedrunSam", "ClutchFactor", "OneTapTyler", "BossFightBen"],
      },
      {
        label: "Quiet confidence",
        names: ["Rowan", "Fenwick", "Callum_Ash", "Bryson", "Marek", "Dashiell", "Osric", "Callan", "Everett_Vale", "Thoren"],
      },
    ],
    tips: [
      {
        heading: "Pick tone before theme",
        paragraphs: [
          "Deciding whether you want to sound loud and competitive or calm and understated will narrow this list faster than scrolling through every word — the combat and gaming-culture groups suit PvP and public servers, while the quiet-confidence group works well for building/survival worlds.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do these names work for adult players too?",
        answer:
          "Yes — the grouping reflects common search intent, not an age restriction. Anyone can use any name on this list.",
      },
      {
        question: "Can I combine names from different groups?",
        answer:
          "Yes, mixing a quiet-confidence first name with an action-word suffix (like Rowan_Bladefury shortened to fit 16 characters) is a common and effective pattern.",
      },
    ],
    generatorTheme: "fantasy",
    generatorStyle: "pvp",
  },
  {
    slug: "minecraft-usernames-for-girls",
    navLabel: "Minecraft Names for Girls",
    h1: "Minecraft Usernames for Girls",
    metaTitle: "Minecraft Usernames for Girls — Popular Name Ideas",
    metaDescription:
      "Minecraft username ideas in styles that girls commonly search for — soft, nature-inspired, and stylish names, with tips for making one your own.",
    intro: [
      "This list reflects the naming styles most commonly searched under this term — softer, nature-inspired, and stylized names tend to dominate. As with any list here, none of these are gender-exclusive; use whatever fits you.",
      "Groups below range from nature-soft to sharp and stylish, so you can match your own tone rather than default to the first option.",
    ],
    groups: [
      {
        label: "Nature & soft",
        names: ["Wildrose", "Moonlit_Fern", "Hazel_Brook", "Willowmere", "Meadowlark", "Junebloom", "Ivywren", "Snowpetal", "Sagebrush_Rue", "Dawnflower"],
      },
      {
        label: "Sleek & stylish",
        names: ["Velourine", "Noirelle", "Cassique", "Lumiel", "Sabrelle", "Verrine", "Aurelique", "Selvane", "Marquelle", "Ondrienne"],
      },
      {
        label: "Playful & bright",
        names: ["Sunny_Pixel", "Glitterbomb", "Confetti_Fox", "Sparkplug99", "Bubblegum_Ash", "Twinklecraft", "Pastel_Wren", "Candyrift", "Sherbet_Sky", "Prismstep"],
      },
    ],
    tips: [
      {
        heading: "Softness and strength aren't opposites here",
        paragraphs: [
          "A name like Wildrose or Moonlit_Fern can read as both gentle and memorable — you don't need to choose between a name that sounds nice and one that's easy for others to remember and use in chat.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these names taken more often than others?",
        answer:
          "Popular nature and soft-aesthetic words do get claimed quickly since many players search for the same styles — check a few variations rather than fixating on one exact word.",
      },
      {
        question: "Can I add a number to any of these if the base word is taken?",
        answer:
          "Yes, though a short number (2 digits) blends in more naturally than a long one. Try our generator with numbers enabled for more auto-generated variants.",
      },
    ],
    generatorTheme: "nature",
    generatorStyle: "aesthetic",
  },
  {
    slug: "minecraft-aesthetic-usernames",
    navLabel: "Aesthetic Minecraft Names",
    h1: "Aesthetic Minecraft Usernames",
    metaTitle: "Aesthetic Minecraft Usernames — Soft, Moody Name Ideas",
    metaDescription:
      "Aesthetic Minecraft username ideas built around mood and vibe — soft, moody, and dreamlike names, plus how to pair them with the color/style tool.",
    intro: [
      "Aesthetic names lean on mood over meaning — soft consonants, imagery-driven words, and a general sense of atmosphere rather than a literal description of anything.",
      "These pair especially well with our color/style tool, since aesthetic naming culture often extends to how the name is displayed in chat, not just the word itself.",
    ],
    groups: [
      {
        label: "Dreamy & soft",
        names: ["Moonhaze", "Softglow", "Velvetsky", "Duskbloom", "Etherlynn", "Palewisp", "Hushquiet", "Cloudmere", "Lullshade", "Mistvale"],
      },
      {
        label: "Muted color imagery",
        names: ["Sagegrey", "Dustyrose_", "Ashlavender", "Mutedteal", "Fadedplum", "Pearlgrey", "Softclay", "Bluslate", "Palejade", "Muteivory"],
      },
      {
        label: "Quiet nouns",
        names: ["Paperlight", "Windowseat", "Quietstorm", "Softstatic", "Lowtide", "Stillwater_Fox", "Hushline", "Slowfade", "Palewaves", "Muteglass"],
      },
    ],
    tips: [
      {
        heading: "Pair your name with a matching chat color",
        paragraphs: [
          "Once you've picked a name, use the Username Color & Style Checker to preview it in a matching soft color (light purple, aqua, or gray tend to fit this style) for chat, signs, and books — remember that only styles the display text, not the account name itself.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do aesthetic usernames need underscores or capitalization to look right?",
        answer:
          "Not necessarily — Minecraft usernames aren't case-sensitive for uniqueness, so capitalization is a personal display choice, not something that affects availability.",
      },
      {
        question: "Can I use accented characters for a more aesthetic look?",
        answer:
          "No — Minecraft usernames only support plain A–Z letters, 0–9 numbers, and underscores. Accented or special characters aren't supported in the actual account name.",
      },
    ],
    generatorTheme: "nature",
    generatorStyle: "aesthetic",
  },
  {
    slug: "minecraft-tryhard-usernames",
    navLabel: "Tryhard Minecraft Names",
    h1: "Tryhard Minecraft Usernames",
    metaTitle: "Tryhard Minecraft Usernames — Sweaty, Competitive Names",
    metaDescription:
      "Tryhard-style Minecraft username ideas for competitive and PvP servers, using classic sweaty naming conventions like xX_Name_Xx and clan-tag formatting.",
    intro: [
      "\"Tryhard\" naming has its own established conventions, largely inherited from competitive shooter culture — bracket decorations, all-caps energy, and suffixes that signal competitive intent.",
      "These names are meant to be a little over the top on purpose; that's the joke and the point at the same time.",
    ],
    groups: [
      {
        label: "Classic xX_Xx format",
        names: ["xX_Slayer_Xx", "xX_NoScope_Xx", "xX_Godmode_Xx", "xX_ClutchKing_Xx", "xX_Apex_Xx", "xX_Reaper_Xx", "xX_1v9_Xx", "xX_Zerofear_Xx", "xX_Sweatlord_Xx", "xX_Tilted_Xx"],
      },
      {
        label: "Streamer-style suffixes",
        names: ["ClutchGodTTV", "SweatKingYT", "NoLifeGamerTV", "TopFragTTV", "InsaneAimYT", "ProPlayerTTV", "RankOneYT", "TryhardTV", "GodTierYT", "ElitePlayTTV"],
      },
      {
        label: "Pure competitive energy",
        names: ["GG_Machine", "ZeroDeaths", "MaxSweat", "OnlyWins", "RankGrinder", "NoMercyPvP", "FullSend99", "TopOfLB", "ClutchOrKick", "SweatOrDie"],
      },
    ],
    tips: [
      {
        heading: "It's a costume, not a resume",
        paragraphs: [
          "Tryhard names work best when everyone's in on the bit — they're common on competitive PvP servers and Bedwars/Skywars-style game modes specifically because the exaggeration is part of the culture there, not a genuine claim of skill.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will a tryhard name make people expect me to be good at PvP?",
        answer:
          "Maybe a little, in a joking way — but most players recognize the style as a bit rather than a serious skill claim.",
      },
      {
        question: "Do brackets like xX and Xx count toward the 16-character limit?",
        answer:
          "Yes — every character counts, including the decorative brackets. That's why many tryhard names use short core words to leave room for the formatting.",
      },
    ],
    generatorTheme: "tech",
    generatorStyle: "tryhard",
  },
  {
    slug: "minecraft-pvp-usernames",
    navLabel: "Minecraft PvP Names",
    h1: "Minecraft PvP Usernames",
    metaTitle: "Minecraft PvP Usernames — Fast, Aggressive Name Ideas",
    metaDescription:
      "Minecraft PvP username ideas built to be short, easy to type, and aggressive-sounding for combat servers, with tips on why brevity matters in PvP.",
    intro: [
      "PvP-focused names have practical constraints that pure aesthetic names don't: they need to be short enough to type quickly if you ever need to reference your own name, and punchy enough to be memorable to an opponent mid-fight.",
      "The groups below balance short length with aggressive or sharp-sounding words.",
    ],
    groups: [
      {
        label: "Short & sharp",
        names: ["Fang", "Rip", "Vex", "Grit", "Snap", "Jab", "Rook", "Zest", "Krux", "Nix"],
      },
      {
        label: "Combat-themed",
        names: ["Bladewire", "Critline", "Sharpshot", "Deathswing", "Ironjab", "Riftstrike", "Killstreak", "Combofist", "Bloodrush", "Edgecut"],
      },
      {
        label: "Clean tryhard-adjacent",
        names: ["ClutchFox", "1v1Ready", "NoFear99", "TopFrag_", "ComboKing", "SharpAim", "QuickScope7", "FullCombo", "RankOne_", "Zerodeath"],
      },
    ],
    tips: [
      {
        heading: "Why short names matter more in PvP than in survival",
        paragraphs: [
          "In fast-paced combat servers, other players often type your name in chat to call out kills, trades, or warnings — a name that's quick to type gets referenced more accurately and more often than a long or hard-to-spell one.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a PvP-style name need to be under a certain length?",
        answer:
          "There's no rule requiring it, but shorter names (under 10 characters) are easier for other players to type quickly in combat chat, which is a practical rather than official advantage.",
      },
      {
        question: "Are these names competitive-server specific?",
        answer:
          "They're built with combat servers (Bedwars, Skywars, factions, UHC) in mind, but there's nothing stopping you from using one anywhere.",
      },
    ],
    generatorTheme: "dark",
    generatorStyle: "pvp",
  },
  {
    slug: "minecraft-youtuber-usernames",
    navLabel: "Minecraft YouTuber Names",
    h1: "Minecraft YouTuber Usernames",
    metaTitle: "Minecraft YouTuber Usernames — Brandable Name Ideas",
    metaDescription:
      "Brandable Minecraft username ideas for content creators — searchable, memorable names built for a channel, plus practical branding tips.",
    intro: [
      "A username you'll use as a content brand has different priorities than a personal name: it needs to be searchable without colliding with existing channels, easy to say out loud in a video, and consistent enough to use as your handle across platforms.",
      "The groups below favor clarity and searchability over cleverness, since an audience needs to find and remember the name cold.",
    ],
    groups: [
      {
        label: "Clear & brandable",
        names: ["BlockBrightSide", "CraftCompass", "PickaxePlays", "OreOverload", "BuildBeacon", "RedstoneReel", "CraftCurrent", "BlockBriefing", "MineMarker", "CraftCommentary"],
      },
      {
        label: "Personality-forward",
        names: ["LoudPickaxe", "CalmCreeper", "ChattyChunk", "BoldBuilder", "SteadyCrafter", "SharpShovel", "FriendlyFarmer", "QuietQuarry", "BrightBiome", "KeenKiln"],
      },
      {
        label: "Short & sayable",
        names: ["Orebound", "Blockwise", "Craftlin", "Pixelquest", "Buildrift", "Minelume", "Craftvale", "Orefall", "Blockshire", "Pickstream"],
      },
    ],
    tips: [
      {
        heading: "Check availability everywhere, not just Minecraft",
        paragraphs: [
          "Before committing to a channel name, search it on YouTube, Twitch, and as a general web/domain search — a name can be open in Minecraft but already used as a channel handle elsewhere, which causes confusion for your audience.",
          "Favor names that are easy to spell from hearing them once; complex or unusually-spelled names make it harder for new viewers to find you again.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should my Minecraft username match my channel name exactly?",
        answer:
          "It's not required, but consistency helps with recognition — viewers who see your in-game name in a video are more likely to remember and find your channel if the names match or are clearly related.",
      },
      {
        question: "Is a shorter or longer name better for a content creator?",
        answer:
          "Shorter, sayable names generally perform better for word-of-mouth recall, but the more important factor is that the name is unique enough to search for without competing against unrelated results.",
      },
    ],
    generatorTheme: "tech",
    generatorStyle: "cool",
  },
  {
    slug: "minecraft-clan-names",
    navLabel: "Minecraft Clan Names",
    h1: "Minecraft Clan Names",
    metaTitle: "Minecraft Clan Names — Ideas for Teams & Factions",
    metaDescription:
      "Minecraft clan and team name ideas for factions servers, PvP teams, and friend groups, organized by tone, with tips on tags and consistency.",
    intro: [
      "A clan name has to work for a group, not just one person — it needs to sound right as a tag in chat, hold up across multiple members' usernames, and usually needs a short abbreviation for factions or team-tag plugins.",
      "These are grouped by tone so your group can agree on a direction before individual members pick tagged usernames.",
    ],
    groups: [
      {
        label: "Faction / war-themed",
        names: ["IronPact", "Blacksail", "Duskguard", "Warforge", "Nightwatch", "Redline", "Grimhold", "Frostmarch", "Stonebreak", "Ashlegion"],
      },
      {
        label: "Short taggable names",
        names: ["Vex", "Rook", "Fang", "Onyx", "Krux", "Zenith", "Havok", "Nyxa", "Ruin", "Void"],
      },
      {
        label: "Friendly / casual groups",
        names: ["MossyCrew", "BlockBuddies", "TheCobblestones", "PixelPack", "CraftedCollective", "TheBuilders_", "OreAndFriends", "TeamRedstone", "DirtRoadCrew", "TheOverworlders"],
      },
    ],
    tips: [
      {
        heading: "Plan the tag before the name",
        paragraphs: [
          "Most factions and team plugins prefix a short tag (2–4 letters) before each member's username, like [IPC] for IronPact. Pick a name that abbreviates cleanly, since an awkward tag shows up in every member's chat line.",
          "Agree on a naming convention for the group (e.g., everyone's username ends in the same suffix) before people start claiming individual names — it's much harder to standardize after the fact.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the clan name itself need to be a Minecraft username?",
        answer:
          "No — a clan/faction name is usually just a label used in a plugin, Discord server, or informally in chat. Individual members still each need their own valid Minecraft account username.",
      },
      {
        question: "How short should a clan tag be?",
        answer:
          "Most factions-style plugins work best with 2–4 character tags, since longer tags eat into the visible space before each player's name in chat.",
      },
    ],
    generatorTheme: "dark",
    generatorStyle: "pvp",
  },
];

export function getCategoryBySlug(slug: string): CategoryContent | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
