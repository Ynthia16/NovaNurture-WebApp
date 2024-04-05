export function generateFantasyNames() {
  // List of syllables for fantasy names
  const syllables = [
    "val",
    "mar",
    "thor",
    "gand",
    "el",
    "mor",
    "ar",
    "eth",
    "dra",
    "gal",
    "nar",
    "fir",
    "syl",
    "am",
    "cer",
    "mir",
    "wyn",
    "ran",
    "cor",
    "il",
    "ad",
    "or",
    "er",
    "al",
    "vor",
    "ul",
    "thil",
    "ith",
    "zal",
    "pha"
  ];

  const generateName = () => {
    let name = "";
    const syllableCount = Math.floor(Math.random() * 2) + 2;
    for (let i = 0; i < syllableCount; i++) {
      const randomIndex = Math.floor(Math.random() * syllables.length);
      name += syllables[randomIndex];
    }
    return name;
  };

  const name1 = generateName();
  const name2 = generateName();

  return [name1, name2];
}


