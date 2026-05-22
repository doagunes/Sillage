import { useState } from "react";
import { analyzeMemory } from "../utils/analyzeMemory";

function MemoryForm() {
  const [memory, setMemory] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const analysisResult = analyzeMemory(memory);
    setResult(analysisResult);
  };

  return (
    <div className="w-full max-w-3xl rounded-[32px] bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-3xl font-semibold text-[#2f2a26]">
        Create Your Memory Perfume
      </h2>

      <p className="mb-6 text-[#6f6258]">
        Write a memory and let the system transform your words into perfume notes.
      </p>

      <textarea
        value={memory}
        onChange={(e) => setMemory(e.target.value)}
        placeholder="Write your memory here..."
        className="min-h-[180px] w-full resize-none rounded-[24px] border border-[#ddd2c8] bg-[#f7f3ee] p-5 text-[#2f2a26] outline-none focus:border-[#b89b72]"
      />

      <button
        onClick={handleGenerate}
        className="mt-5 rounded-full bg-[#2f2a26] px-8 py-3 text-white transition hover:bg-[#4a4038]"
      >
        Generate Perfume
      </button>

      {result && (
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <NoteCard title="Top Notes" notes={result.top} />
          <NoteCard title="Heart Notes" notes={result.heart} />
          <NoteCard title="Base Notes" notes={result.base} />
        </div>
      )}

      {result && result.matchedWords.length > 0 && (
        <div className="mt-6 rounded-[20px] bg-[#f7f3ee] p-4">
          <h3 className="mb-2 font-semibold text-[#2f2a26]">
            Matched Words
          </h3>

          <div className="flex flex-wrap gap-2">
            {result.matchedWords.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-white px-3 py-1 text-sm text-[#6f6258]"
              >
                {item.word} → {item.family} / {item.layer}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NoteCard({ title, notes }) {
  return (
    <div className="rounded-[24px] bg-[#f7f3ee] p-5">
      <h3 className="mb-3 text-xl font-semibold text-[#2f2a26]">
        {title}
      </h3>

      {notes.length > 0 ? (
        <ul className="space-y-1 text-[#6f6258]">
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-[#9b8d82]">No notes found yet.</p>
      )}
    </div>
  );
}

export default MemoryForm;