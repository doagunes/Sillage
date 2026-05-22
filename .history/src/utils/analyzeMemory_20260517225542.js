import { scentWords } from "../data/words";
import { familyLayers } from "../data/familyLayers";

export function analyzeMemory(text) {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);

  const result = {
    top: [],
    heart: [],
    base: [],
    matchedWords: [],
  };

  words.forEach((word) => {
    const match = scentWords[word];

    if (match) {
      const layer = familyLayers[match.family];

      result[layer].push(...match.notes);
      result.matchedWords.push({
        word,
        family: match.family,
        layer,
      });
    }
  });

  result.top = [...new Set(result.top)];
  result.heart = [...new Set(result.heart)];
  result.base = [...new Set(result.base)];

  return result;
}