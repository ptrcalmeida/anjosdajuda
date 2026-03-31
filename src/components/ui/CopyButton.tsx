"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <span className="font-mono text-[#7E22CE] font-bold break-all">{text}</span>
      <button
        onClick={handleCopy}
        className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg border-2 border-[#7E22CE] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white transition-colors cursor-pointer"
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
    </div>
  );
}
