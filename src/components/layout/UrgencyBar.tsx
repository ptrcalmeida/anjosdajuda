"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "urgency_bar_dismissed_2026_04";

export function UrgencyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="bg-[#FF6B4A] text-white px-4 py-2.5 flex items-center justify-between gap-4">
      <p className="text-sm font-semibold leading-tight">
        <span className="font-black">⚡ Abril —</span>{" "}
        precisamos de R$5.700 para o próximo mutirão de castração.
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <Link
          href="/doe"
          className="text-sm font-black underline underline-offset-2 hover:no-underline whitespace-nowrap"
        >
          Doe Agora →
        </Link>
        <button
          onClick={dismiss}
          aria-label="Fechar"
          className="text-white/70 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
