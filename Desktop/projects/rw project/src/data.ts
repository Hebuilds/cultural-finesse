/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventItem, MerchItem, StoryExperience, CharacterCard, CommunityPhoto } from "./types";

export const EVENTS_DATA: EventItem[] = [
  {
    id: "syl-2026",
    num: "01",
    date: "Saturday · 30 May 2026",
    dayName: "30 MAY",
    tag: "Immersive Experience & Watch Party",
    title: "SAY YOUR LINE",
    description: "One ticket. Two worlds. A live communal story where every guest plays a dynamic character — followed by a full club takeover. When your designated moment comes, you say your line. Together, everyone writes the script in real time.",
    time: "5:00 PM till Late",
    venue: "Agura Creative Hub → Centric Hotel",
    priceAmount: 5000,
    priceCurrency: "RWF",
    isFeatured: true,
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/festival-evening_ae8qki.jpg",
    extraDetails: [
      "Live UCL Final Screening with high-fidelity projections",
      "Dynamic soundsets by DJ Wayv, DJ Brvnklyng, and DJ Panda",
      "Complimentary limited-run Welcome Zine & character dossier",
      "Exclusive SAY YOUR LINE merch drop preview"
    ]
  },
  {
    id: "brunch-2026",
    num: "02",
    date: "Sunday · 28 June 2026",
    dayName: "28 JUN",
    tag: "Curated Culinary Lounge",
    title: "THE SUNDAY BRUNCH",
    description: "Good food. Good people. Good energy. A highly curated afternoon of fine East African/international bites, custom gold-flaked signature cocktails, and elevated electronic lounge vibes. Network with Kigali's creative class in an intimate private garden.",
    time: "1:00 PM to 7:00 PM",
    venue: "The Secret Oasis, Kimihurura",
    priceAmount: 15000,
    priceCurrency: "RWF",
    isFeatured: false,
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890990/festival-night_hlxgv5.jpg",
    extraDetails: [
      "By Invitation & RSVP confirmation only",
      "Catering by Kigali's vanguard culinary chefs",
      "Live acoustic performance & analog selector sets"
    ]
  },
  {
    id: "confy-2026",
    num: "03",
    date: "Thursday · 31 July 2026",
    dayName: "31 JUL",
    tag: "Avant-Garde Live Festival",
    title: "CONFY CLOUDO FEST",
    description: "Concurring the frontiers of sound. Immersive live audio and fashion show highlighting KidFromKigali, Logan Joe, and Shemi. Supported by top producers and direct catwalk designs that you can order immediately on-site.",
    time: "6:00 PM to Midnight",
    venue: "Mundi Center, Kigali",
    priceAmount: 10000,
    priceCurrency: "RWF",
    isFeatured: false,
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/festival-_night_nl2nii.jpg",
    extraDetails: [
      "3 mainstage headline live hybrid performances",
      "Interactive 3D runway projection mapping",
      "Immediate custom order fitting stations available"
    ]
  },
  {
    id: "creative-2026",
    num: "04",
    date: "Coming Soon · August 2026",
    dayName: "AUG 2026",
    tag: "Creative Collective Mixer",
    title: "RW COLLECTIVE CYIPER",
    description: "Photographers, designers, DJs, models, writers, and creative entrepreneurs all hosted within a single room. Pitch conceptual ideas, pair up for collaborative fashion editorials, or secure mentorship with industry leaders of Kigali.",
    time: "4:00 PM to 9:00 PM",
    venue: "Agura Creative Hub, Kigali",
    priceAmount: 0,
    priceCurrency: "FREE",
    isFeatured: false,
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890990/black_and_yellow_banner_vqgvse.jpg",
    extraDetails: [
      "Open portfolio exhibition for local photographers",
      "Live synthesizer jam sessions and moodboarding",
      "Free coffee & cocktail bar hosted by RW Project coordinators"
    ]
  }
];

export const MERCH_DATA: MerchItem[] = [
  {
    id: "classic-tee",
    name: "RW CLASSIC TEE",
    meaning: "The Original Statement",
    priceRwf: 12000,
    currency: "RWF",
    tagline: "More than a brand. An identity worn with pride across Kigali.",
    detailedStory: "Our first flagship cut. Styled in a heavy-weight 260GSM organic cotton boxy streetwear fit, featuring a screen-printed gold minimalist front signature and local coordinate maps of Rwanda woven inside the inner hem.",
    visualWord: "RW",
    availableSizes: ["S", "M", "L", "XL"],
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/white-tishirt_egjmbd.jpg"
  },
  {
    id: "umwali-tee",
    name: "UMWALI TEE",
    meaning: "Grace & Identity",
    priceRwf: 15000,
    currency: "RWF",
    tagline: "A celebration of grace, identity, and contemporary Rwandan culture.",
    detailedStory: "A tribute to historical elegance infused with modern utility. Features high-contrast gold typography reading 'Umwali' in an artfully distressed calligraphic display, balanced on deep carbon charcoal fabric representing modern resilience.",
    visualWord: "UMWALI",
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/Vintage_Rwanda_T-shirt_I_Love_Rwanda_Map_Shirt_T-Shirt_smjgsv.jpg"
  },
  {
    id: "exclusive-drop",
    name: "SAY YOUR LINE SPECIAL EDITION",
    meaning: "The Cast Jersey",
    priceRwf: 20000,
    currency: "RWF",
    tagline: "Limited edition custom drop commemorating the 'Say Your Line' UCL event.",
    detailedStory: "Each tee carries a unique serial code corresponding to a real live script line from our May 30th immersive play. Heavy textured black loopback terry fabric with gold metallic embroidery detailing. Only 50 pieces manufactured.",
    visualWord: "CAST O1",
    availableSizes: ["M", "L", "XL"],
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/Black_t-shirt_design_e9efbl.jpg"
  },
  {
    id: "heritage-cap",
    name: "RW ARCHETYPE CAP",
    meaning: "Identity Woven",
    priceRwf: 8000,
    currency: "RWF",
    tagline: "Structured custom peak caps carrying the gold crest of Kigali's youth vanguard.",
    detailedStory: "High-crown structured vintage styling. Features a golden embroidery seal depicting local Rwandan geometric weave symbols (Imigongo) merged with the modern RW lettering, backed with a durable antique brass enclosure.",
    visualWord: "CREST",
    availableSizes: ["ONE SIZE"],
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/white-tishirt_egjmbd.jpg"
  }
];

export const EXPERIENCES_DATA: StoryExperience[] = [
  {
    id: "xp-1",
    num: "01",
    emoji: "🎭",
    name: "SAY YOUR LINE",
    description: "Immersive live cinema. You arrive, receive your secret dossier, align with your faction, and deliver your actual line in proper context. The ultimate game of physical roleplay.",
    longText: "A bold experiment where the lines dividing performer and observer melt entirely. You are handed a character card at the gates of Agura Hub. Inside contains your faction details, an exact custom phrase, and three behavioral goals. During the live set, physical triggers on screen and signal lights indicate when you must utter your phrase. Together, 150 people orchestrate an organic verbal masterpiece."
  },
  {
    id: "xp-2",
    num: "02",
    emoji: "🥂",
    name: "SUNDAY BRUNCH",
    description: "Curated afternoon of gourmet bites, exclusive gold-leaf signature cocktails, and elevated electronic lounge music. Designed for organic visual discovery.",
    longText: "A refined cultural decompression space. We gather to share more than food — we exchange visions. Tucked away inside stunning mid-century private architectural locations in Kigali, we combine localized afro-fusion recipes, custom culinary performance, and soft, warm minimal-techno and amapiano soundscapes."
  },
  {
    id: "xp-3",
    num: "03",
    emoji: "🎵",
    name: "LIVE PERFORMANCE takings",
    description: "From secret intimate acoustic sets in galleries to full-scale music culture festivals. We represent the next generation of Rwandan sound.",
    longText: "Sound is our collective pulse. RW Project partners with local and international visual artists, lighting engineers, and sound designers to build responsive performance spaces. When a performer takes the stage under our golden lasers, it is not a basic gig; it is a multisensory movement."
  },
  {
    id: "xp-4",
    num: "04",
    emoji: "⚽",
    name: "THEMED WATCH PARTIES",
    description: "UEFA Champions League finals and sport milestones turned into premium cultural events. Sports meet high fashion.",
    longText: "We take the tribal ecstasy of sports and wrap it inside luxury streetwear culture. Standard bar screens are replaced by beautiful 10-meter projectors. Before off-kick, guests attend live interactive script-scenes, purchase event-exclusive drops, and mingle under golden smoke-clouds, which then shifts into a high-octane afterparty."
  },
  {
    id: "xp-5",
    num: "05",
    emoji: "🤝",
    name: "COLLECTIVE MIXERS",
    description: "A room full of Kigali's photographers, fashion designers, visual artists, DJs, and writers. No gatekeeping. Just collaboration.",
    longText: "The fuel of our movement is pure connection. Our mixers are designed to break the standard social rules of corporate networking. Through collaborative canvas workshops, local craft showcases, and physical mood-boarding stations, we foster genuine creative alliances that go on to produce Kigali's finest streetwear lines."
  }
];

export const CHARACTER_TEMPLATES: CharacterCard[] = [
  {
    id: "char-1",
    name: "The Midnight Curator",
    vibe: "Sound Archivist · Enigmatic",
    startingLine: "The vintage vinyl on deck holds the answers you seek, but only under golden lighting.",
    secretObjective: "Request the resident DJ to play a specific ambient afrotrack, then stand next to the subwoofers for three minutes.",
    allianceVibe: "Acoustic Alliance"
  },
  {
    id: "char-2",
    name: "The Kigali Chronicler",
    vibe: "visualist · 35mm Visionary",
    startingLine: "I only capture glances when the subject is looking entirely at the future.",
    secretObjective: "Ask two complete strangers to stand back-to-back and capture a portrait of them using your camera phone.",
    allianceVibe: "The Celluloid Society"
  },
  {
    id: "char-3",
    name: "The Avant-Garde Weaver",
    vibe: "Streetwear Devotee · Bold",
    startingLine: "We do not wear fabric; we carry our lineage woven inside our modern silhouettes.",
    secretObjective: "Find someone wearing an official RW Project apparel piece, identify the embroidery material, and compliment their poise.",
    allianceVibe: "Kigali Vanguard"
  },
  {
    id: "char-4",
    name: "The Silent Patron",
    vibe: "Architect · Observant",
    startingLine: "The strength of a building resides in its pillars, and the strength of Kigali resides in her secrets.",
    secretObjective: "Introduce a local photographer to a visual print artist who are currently in different sections of the room.",
    allianceVibe: "The Golden Syndicate"
  },
  {
    id: "char-5",
    name: "The Rhythm Wanderer",
    vibe: "Amapiano Seeker · Free Spirit",
    startingLine: "When the bassline drops, language is unnecessary. Listen to the dust shifting.",
    secretObjective: "Deliver a small, handwritten quote fold to the DJ booth, then coordinate a synchronized dance loop with three friends.",
    allianceVibe: "The Beat Circle"
  },
  {
    id: "char-6",
    name: "The Dialect Sovereign",
    vibe: "Polyglot writer · Poet",
    startingLine: "Language is a garment — sometimes I dress in English, drape in French, and walk inside Kinyarwanda.",
    secretObjective: "Speak specifically with a mix of three languages to invite someone to stand under the warm gold spotlights in the lounge center.",
    allianceVibe: "The Lyric Order"
  }
];

export const COMMUNITY_PHOTOS: CommunityPhoto[] = [
  {
    id: "com-1",
    lbl: "SAY YOUR LINE",
    storySegment: "The Immersive Cast",
    photographer: "Yves K.",
    gradient: "linear-gradient(135deg, #1c1507 0%, #0a0a0a 60%, #151105 100%)",
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/festival-evening_ae8qki.jpg"
  },
  {
    id: "com-2",
    lbl: "SUNDAY BRUNCH",
    storySegment: "The Golden Hour Decompression",
    photographer: "Kigali Collective",
    gradient: "linear-gradient(45deg, #0a0a0a 0%, #1c1810 100%)",
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890990/festival-night_hlxgv5.jpg"
  },
  {
    id: "com-3",
    lbl: "THE COMMUNITY",
    storySegment: "Unified Creative Force",
    photographer: "Agura Media",
    gradient: "linear-gradient(225deg, #080808 0%, #18150c 100%)",
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/festival-_night_nl2nii.jpg"
  },
  {
    id: "com-4",
    lbl: "LIVE FESTIVAL",
    storySegment: "Under the Golden Laser",
    photographer: "Logan J.",
    gradient: "linear-gradient(135deg, #15120a 0%, #080808 100%)",
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/Vintage_Rwanda_T-shirt_I_Love_Rwanda_Map_Shirt_T-Shirt_smjgsv.jpg"
  },
  {
    id: "com-5",
    lbl: "STREETWEAR DROP",
    storySegment: "Authentic Identity Worn",
    photographer: "Kigali Fashion Inst.",
    gradient: "linear-gradient(45deg, #1f1807 0%, #0a0a0a 100%)",
    image: "https://res.cloudinary.com/dmqwlcjec/image/upload/v1781890991/Black_t-shirt_design_e9efbl.jpg"
  }
];
