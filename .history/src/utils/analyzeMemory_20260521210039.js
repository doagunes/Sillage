import { familyLayers } from "../data/familyLayers";
import { scentWords } from "../data/scentWords";

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function analyzeMemory(text) {
  const normalizedText = normalizeText(text);

  const result = {
    top: [],
    heart: [],
    base: [],
  };

  Object.entries(scentWords).forEach(([keyword, match]) => {
    const normalizedKeyword = normalizeText(keyword);

    const regex = new RegExp(`(^|\\s)${normalizedKeyword}(?=\\s|$)`);

    if (regex.test(normalizedText)) {
      const layer = familyLayers[match.family];

      if (!layer) return;

      result[layer].push(...match.notes);
    }
  });

  return {
    return {
      top: [...new Set(result.top)].slice(0, 2),
      heart: [...new Set(result.heart)].slice(0, 2),
      base: [...new Set(result.base)].slice(0, 2),
    };
  };
}