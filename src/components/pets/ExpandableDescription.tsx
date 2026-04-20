"use client";

import { useState } from "react";

export function ExpandableDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex-1 mb-5">
      <p className={`text-sm text-[#7C6B8E] leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
        {text}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-1 text-xs font-semibold text-[#7E22CE] hover:underline"
      >
        {expanded ? "Ler menos ↑" : "Ler mais ↓"}
      </button>
    </div>
  );
}
