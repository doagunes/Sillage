import csvText from "./scent-dataset.csv?raw";
import { familyLayers } from "./familyLayers";

const familyAliases = {
  milk: "lactonic",
  musky: "musk",
  "clean musk": "musk",
  clean: "musk",
  candy: "sweet",
  gourmand: "sweet",
  coffee: "aromatic",
  aquatic: "marine",
  mineral: "ozonic",
  metallic: "ozonic",
  metalic: "ozonic",
  aldehydic: "ozonic",
  asphalt: "ozonic",
  incense: "woody",
  smoky: "woody",
  earthy: "woody",
  animalic: "leather",
  "warm spicy": "spicy",
  spices: "spicy",
  "fresh citrus": "citrus",
  paper: "powdery",
};

function normalizeText(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeFamily(family) {
  const key = normalizeText(family);
  return familyAliases[key] || key;
}

function parseNotes(notesText) {
  return notesText
    .split(",")
    .map((note) => note.trim())
    .filter(Boolean);
}

function buildScentWordsFromCsv() {
  const lines = csvText.split(/\r?\n/).filter(Boolean);
  const dataLines = lines.slice(1);
  const result = {};

  dataLines.forEach((line) => {
    const cells = line.split(";");

    for (let i = 0; i < cells.length; i += 4) {
      const word = cells[i]?.trim();
      const rawFamily = cells[i + 1]?.trim();
      const notesText = cells[i + 2]?.trim();

      if (!word || !rawFamily || !notesText) continue;

      const normalizedWord = normalizeText(word);
      const family = normalizeFamily(rawFamily);

      if (!familyLayers[family]) continue;

      const notes = parseNotes(notesText);

      if (!notes.length) continue;

      if (!result[normalizedWord]) {
        result[normalizedWord] = {
          family,
          notes,
        };
      } else {
        result[normalizedWord].notes = [
          ...new Set([...result[normalizedWord].notes, ...notes]),
        ];
      }
    }
  });

  return result;
}

export const scentWords = buildScentWordsFromCsv();