"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function UrgencyBar() {
  const [visible, setVisible] = useState(false);
  const [month, setMonth] = useState("");
  const [storageKey, setStorageKey] = useState("");

  useEffect(() => {
    const now = new Date();
    const monthName = now.toLocaleString("pt-BR", { month: "long" });
    const key = `urgency_bar_dismissed_${now.getFullYear()}_${now.getMonth()}`;
    setMonth(monthName.charAt(0).toUpperCase() + monthName.slice(1));
    setStorageKey(key);
    if (!localStorage.getItem(key)) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem(storageKey, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="bg-[#FF6B4A] text-white px-4 py-2.5 flex items-center justify-between gap-4">
      <p className="text-sm font-semibold leading-tight">
        <span className="font-black">⚡ {month} —</span>{" "}
        cada doação garante que o próximo mutirão de castração aconteça.
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
