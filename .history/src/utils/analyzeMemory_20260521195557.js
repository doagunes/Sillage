import { familyLayers } from "../data/familyLayers";
import { scentWords } from "../data/scentWords";

export function analyzeMemory(text) {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);

  const result = {
    top: [],
    heart: [],
    base: [],
  };

  words.forEach((word) => {
    const match = scentWords[word];

    if (!match) return;

    const family = match.family.toLowerCase();
    const layer = familyLayers[family];

    if (!layer) return;

    result[layer].push(...match.notes);
  });

  return {
    top: [...new Set(result.top)],
    heart: [...new Set(result.heart)],
    base: [...new Set(result.base)],
  };
}