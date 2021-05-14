/** @type { Array <ModelData> } */
const dragons = [
    {
        id: "210147_01",
        name: "Gala Reborn Agni",
        title: "Greedy Encroaching Flame",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210152_01",
        name: "Rose Queen",
        title: "Solitary Rose",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210117_01",
        name: "AC-011 Garland",
        title: "Revolutionary Warrior",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210016_01",
        name: "Agni",
        title: "Rapacious Firelord",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210115_01",
        name: "Andromeda",
        title: "Liberated Aid",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210103_01",
        name: "Apollo",
        title: "Burning Sun",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210030_01",
        name: "Arctos",
        title: "Fiery Coach",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210116_01",
        name: "Ariel",
        title: "Lion of the Goddess",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210138_01",
        name: "Arsène",
        title: "Pillager of Twilight",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210126_01",
        name: "Azazel",
        title: "Winged Rebel",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210083_01",
        name: "Barbatos",
        title: "Bridled Beast",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210024_01",
        name: "Cerberus",
        title: "Underworld Gatekeeper",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "200010_01",
        name: "Chthonius",
        title: "Devoted Dragon",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210056_01",
        name: "Corsaint Phoenix",
        title: "Holy Regenerant",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210049_01",
        name: "Cupid",
        title: "Love's Messenger",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210110_01",
        name: "Daikokuten",
        title: "Exalted Mouse",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210076_01",
        name: "Dragonyule Jeanne",
        title: "Defender of Dragonyule",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210122_01",
        name: "Dreadking Rathalos",
        title: "Dreadking",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210114_01",
        name: "Ebisu",
        title: "Sunbathing Feline",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210112_01",
        name: "Epimetheus",
        title: "Forsaken Brother",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210055_01",
        name: "Erasmus",
        title: "Azure Beacon",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210123_01",
        name: "Fatalis",
        title: "The Black Dragon",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210084_01",
        name: "Freyja",
        title: "Harvest Goddess",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210145_01",
        name: "Gabriel",
        title: "Blessed Angel",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210120_01",
        name: "Gaibhne & Creidhne",
        title: "Delightful Dreamer",
        rarity: "5",
        element: "Water",
    },
    {
        id: "200017_01",
        name: "Gala Cat Sìth",
        title: "Capricious Feline",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "200009_01",
        name: "Gala Mars",
        title: "Forbidden Flamebringer",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210144_01",
        name: "Gala Reborn Jeanne",
        title: "Sacred Standard Bearer",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210134_01",
        name: "Gala Reborn Poseidon",
        title: "Courageous Seafarer",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210143_01",
        name: "Gala Reborn Zephyr",
        title: "Guardian of the Plains",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "200018_01",
        name: "Gala Thor",
        title: "The Fulminator",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210036_01",
        name: "Garuda",
        title: "Prideful Gale",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210048_01",
        name: "Gilgamesh",
        title: "Supreme Ruler",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210135_01",
        name: "Giovanni",
        title: "Ark of Music",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210091_01",
        name: "Gold Fafnir",
        title: "Gold Gentleman",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210136_01",
        name: "Gozu Tenno",
        title: "Hard-Faced Softy",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210097_01",
        name: "Halloween Maritimus",
        title: "The People's Magician",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210105_01",
        name: "Hastur",
        title: "The Whisperer in Darkness",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210039_01",
        name: "High Brunhilda",
        title: "Crimson Companion",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210148_01",
        name: "High Chthonius",
        title: "Eternal Dreamer",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210041_01",
        name: "High Jupiter",
        title: "Radiant Hedonist",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210040_01",
        name: "High Mercury",
        title: "Compassionate Soul",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210038_01",
        name: "High Midgardsormr",
        title: "Conductor of Storms",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210042_01",
        name: "High Zodiark",
        title: "Lord of Shadow",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210124_01",
        name: "Horus",
        title: "Flame-Winged Ruler",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210020_01",
        name: "Jeanne d'Arc",
        title: "Standard Bearer",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210107_01",
        name: "Kagutsuchi",
        title: "Incandescent General",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210109_01",
        name: "Kamuy",
        title: "Guardian Wolf",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210082_01",
        name: "Konohana Sakuya",
        title: "Blossoming Beauty",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210017_01",
        name: "Leviathan",
        title: "Ruler of the Seas",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210043_01",
        name: "Liger",
        title: "King of the Big Top",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210080_01",
        name: "Long Long",
        title: "Kung-Fu Master",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210142_01",
        name: "Lumière Pandora",
        title: "Box-of-Hope Bearer",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210077_01",
        name: "Marishiten",
        title: "Dawning Dragon",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210072_01",
        name: "Maritimus",
        title: "Beloved Mascot",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210137_01",
        name: "Menoetius",
        title: "Raging Wind",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210131_01",
        name: "Midgardsormr Zero",
        title: "Primal Stormbearer",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210133_01",
        name: "Mini Hildy",
        title: "First & Last",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210146_01",
        name: "Mini Mercs",
        title: "Mama To All",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210111_01",
        name: "Mini Mids",
        title: "Tiny Typhoon",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210127_01",
        name: "Mini Zodi",
        title: "Little Slice of Awkward",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210019_01",
        name: "Nidhogg",
        title: "Death's Reveler",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210053_01",
        name: "Nimis",
        title: "Gluttonous Gourmand",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210046_01",
        name: "Nyarlathotep",
        title: "Crawling Chaos",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210095_01",
        name: "Parallel Zodiark",
        title: "Aberrant Shadow",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210026_01",
        name: "Pazuzu",
        title: "Calamitous Typhoon",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210057_01",
        name: "Pele",
        title: "Faithful Vassal",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210079_01",
        name: "Peng Lai",
        title: "Earthen Emancipator",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210045_01",
        name: "Phantom",
        title: "Gruesome Specter",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210094_01",
        name: "Pop-Star Siren",
        title: "Seaside Songstress",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210025_01",
        name: "Poseidon",
        title: "Ocean Voyager",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210052_01",
        name: "Prometheus",
        title: "Reclusive Flame",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210132_01",
        name: "Ramiel",
        title: "Angelic Herald",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210121_01",
        name: "Rathalos",
        title: "King of the Skies",
        rarity: "5",
        element: "Flame",
    },
    {
        id: "210087_01",
        name: "Shinobi",
        title: "Ancestral Ninja",
        rarity: "5",
        element: "Shadow",
    },
    {
        id: "210078_01",
        name: "Shishimai",
        title: "Fortune Bringer",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210081_01",
        name: "Simurgh",
        title: "Caring Mother",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210054_01",
        name: "Siren",
        title: "Spellbinding Singer",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210130_01",
        name: "Styx",
        title: "Mischievous Guardian",
        rarity: "5",
        element: "Water",
    },
    {
        id: "210125_01",
        name: "Summer Konohana Sakuya",
        title: "Beachside Flower",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210010_01",
        name: "Sylvia",
        title: "Guardian of the Wood",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210051_01",
        name: "Takemikazuchi",
        title: "Unrivaled Wrestler",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210085_01",
        name: "Tie Shan Gongzhu",
        title: "Ravishing Rakshesha",
        rarity: "5",
        element: "Light",
    },
    {
        id: "210098_01",
        name: "Vayu",
        title: "Violent Gale",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210074_01",
        name: "Yulong",
        title: "Celestial Steed",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210018_01",
        name: "Zephyr",
        title: "Adulated Protector",
        rarity: "5",
        element: "Wind",
    },
    {
        id: "210089_01",
        name: "Bronze Fafnir",
        title: "Bronze Buddy",
        rarity: "4",
        element: "Shadow",
    },
    {
        id: "210002_01",
        name: "Brunhilda",
        title: "Crimson Sweetheart",
        rarity: "4",
        element: "Flame",
    },
    {
        id: "210075_01",
        name: "Halloween Silke",
        title: "Festive Prankster",
        rarity: "4",
        element: "Light",
    },
    {
        id: "210007_01",
        name: "Ifrit",
        title: "Ferocious Fighter",
        rarity: "4",
        element: "Flame",
    },
    {
        id: "210014_01",
        name: "Juggernaut",
        title: "Violent Brute",
        rarity: "4",
        element: "Shadow",
    },
    {
        id: "210004_01",
        name: "Jupiter",
        title: "Capricious Scamp",
        rarity: "4",
        element: "Light",
    },
    {
        id: "210013_01",
        name: "Lindworm",
        title: "Seeker of Beauty",
        rarity: "4",
        element: "Light",
    },
    {
        id: "210003_01",
        name: "Mercury",
        title: "Aquatic Guardian",
        rarity: "4",
        element: "Water",
    },
    {
        id: "210001_01",
        name: "Midgardsormr",
        title: "Stormbound Ally",
        rarity: "4",
        element: "Wind",
    },
    {
        id: "210006_01",
        name: "Phoenix",
        title: "Bewitching Immortal",
        rarity: "4",
        element: "Flame",
    },
    {
        id: "210008_01",
        name: "Poliʻahu",
        title: "Placid Guide",
        rarity: "4",
        element: "Water",
    },
    {
        id: "210050_01",
        name: "Roc",
        title: "Grand Mercenary",
        rarity: "4",
        element: "Wind",
    },
    {
        id: "210015_01",
        name: "Silke",
        title: "Friend Eternal",
        rarity: "4",
        element: "Shadow",
    },
    {
        id: "210090_01",
        name: "Silver Fafnir",
        title: "Silver Sidekick",
        rarity: "4",
        element: "Shadow",
    },
    {
        id: "210011_01",
        name: "Stribog",
        title: "Ancient Knight",
        rarity: "4",
        element: "Wind",
    },
    {
        id: "210012_01",
        name: "Unicorn",
        title: "Arbiter of Purity",
        rarity: "4",
        element: "Light",
    },
    {
        id: "210058_01",
        name: "Vodyanoy",
        title: "Ephemeral One",
        rarity: "4",
        element: "Water",
    },
    {
        id: "210005_01",
        name: "Zodiark",
        title: "Accursed Vessel",
        rarity: "4",
        element: "Shadow",
    },
    {
        id: "210069_01",
        name: "Astral Imp",
        title: "",
        rarity: "3",
        element: "Light",
    },
    {
        id: "210022_01",
        name: "Cinder Drake",
        title: "",
        rarity: "3",
        element: "Flame",
    },
    {
        id: "210059_01",
        name: "Fubuki",
        title: "",
        rarity: "3",
        element: "Water",
    },
    {
        id: "210066_01",
        name: "Gloom Drake",
        title: "",
        rarity: "3",
        element: "Shadow",
    },
    {
        id: "210064_01",
        name: "Gust Drake",
        title: "",
        rarity: "3",
        element: "Wind",
    },
    {
        id: "210062_01",
        name: "Hikage",
        title: "",
        rarity: "3",
        element: "Shadow",
    },
    {
        id: "210061_01",
        name: "Hinata",
        title: "",
        rarity: "3",
        element: "Light",
    },
    {
        id: "210021_01",
        name: "Homura",
        title: "",
        rarity: "3",
        element: "Flame",
    },
    {
        id: "210023_01",
        name: "Kindling Imp",
        title: "",
        rarity: "3",
        element: "Flame",
    },
    {
        id: "210065_01",
        name: "Moon Drake",
        title: "",
        rarity: "3",
        element: "Light",
    },
    {
        id: "210070_01",
        name: "Pallid Imp",
        title: "",
        rarity: "3",
        element: "Shadow",
    },
    {
        id: "210063_01",
        name: "Snow Drake",
        title: "",
        rarity: "3",
        element: "Water",
    },
    {
        id: "210060_01",
        name: "Tsumuji",
        title: "",
        rarity: "3",
        element: "Wind",
    },
    {
        id: "210067_01",
        name: "Wellspring Imp",
        title: "",
        rarity: "3",
        element: "Water",
    },
    {
        id: "210068_01",
        name: "Zephyr Imp",
        title: "",
        rarity: "3",
        element: "Wind",
    },
];
export default dragons;
