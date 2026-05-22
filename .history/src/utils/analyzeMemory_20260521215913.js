import { scentWords } from "../data/scentWords";

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function analyzeMemory(text) {
  const normalizedText = normalizeText(text);

  const result = {
    top: [],
    heart: [],
    base: [],
  };

  // Uzun keyword'leri önce eşleştir (örn. "best friend" > "friend")
  const sortedEntries = Object.entries(scentWords).sort(
    ([a], [b]) => b.length - a.length
  );

  sortedEntries.forEach(([keyword, match]) => {
    const normalizedKeyword = normalizeText(keyword);

    const regex = new RegExp(
      `(^|\\s)${escapeRegex(normalizedKeyword).replace(/\s+/g, "\\s+")}(?=\\s|$)`
    );

    if (regex.test(normalizedText)) {
      const layer = match.layer; // "top" | "heart" | "base"

      if (!layer || !result[layer]) return;

      result[layer].push(...match.notes);
    }
  });

  return {
    top: [...new Set(result.top)].slice(0, 2),
    heart: [...new Set(result.heart)].slice(0, 3),
    base: [...new Set(result.base)].slice(0, 4),
  };
}