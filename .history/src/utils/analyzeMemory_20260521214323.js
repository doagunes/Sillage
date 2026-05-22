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
    const normalizedKeyword = normalizeText(keyword).replace(/\s+/g, "\\s+");

    // Kelime sınırı kontrolü — "best friend" gibi çok kelimeli ifadeler de çalışır
    const regex = new RegExp(`(^|\\s)${normalizedKeyword}(?=\\s|$)`);

    if (regex.test(normalizedText)) {
      const layer = familyLayers[match.family];

      if (!layer) return;

      result[layer].push(...match.notes);
    }
  });

  return {
    top: [...new Set(result.top)],
    heart: [...new Set(result.heart)],
    base: [...new Set(result.base)],
  };
}