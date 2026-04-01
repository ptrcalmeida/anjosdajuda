"use client";

import { useState } from "react";

const PRESETS = [
  { amount: 50, label: "1 vacina antirrábica" },
  { amount: 190, label: "1 castração completa" },
  { amount: 380, label: "2 castrações" },
  { amount: 500, label: "1 semana de ração" },
];

export function DonationWidget() {
  const [selected, setSelected] = useState<number>(190);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const finalAmount = custom ? parseFloat(custom) : selected;

  async function handleDonate() {
    setError("");
    if (!finalAmount || finalAmount < 10) {
      setError("Valor mínimo: R$10");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount, recurring }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-[#E9D5FF] rounded-2xl p-8">
      {/* Tipo */}
      <div className="flex rounded-xl border border-[#E9D5FF] mb-6 overflow-hidden">
        <button
          onClick={() => setRecurring(false)}
          className={`flex-1 py-3 text-sm font-bold transition-colors ${
            !recurring ? "bg-[#7E22CE] text-white" : "bg-white text-[#7C6B8E] hover:bg-[#F3E8FF]"
          }`}
        >
          Uma vez
        </button>
        <button
          onClick={() => setRecurring(true)}
          className={`flex-1 py-3 text-sm font-bold transition-colors ${
            recurring ? "bg-[#7E22CE] text-white" : "bg-white text-[#7C6B8E] hover:bg-[#F3E8FF]"
          }`}
        >
          Todo mês
        </button>
      </div>

      {/* Presets */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {PRESETS.map((p) => (
          <button
            key={p.amount}
            onClick={() => { setSelected(p.amount); setCustom(""); }}
            className={`flex flex-col items-start px-4 py-3 rounded-xl border text-left transition-colors ${
              !custom && selected === p.amount
                ? "bg-[#F3E8FF] border-[#7E22CE]"
                : "bg-white border-[#E9D5FF] hover:border-[#7E22CE]"
            }`}
          >
            <span className={`text-lg font-black leading-none mb-0.5 ${
              !custom && selected === p.amount ? "text-[#7E22CE]" : "text-[#1A103C]"
            }`}>
              R${p.amount}
            </span>
            <span className="text-xs text-[#7C6B8E]">{p.label}</span>
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="relative mb-6">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#7C6B8E] font-medium">R$</span>
        <input
          type="number"
          min={10}
          placeholder="Outro valor"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="w-full border border-[#E9D5FF] rounded-xl pl-10 pr-4 py-3 text-sm text-[#2D1A4A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#7E22CE] transition-colors"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500 mb-4">{error}</p>
      )}

      {/* CTA */}
      <button
        onClick={handleDonate}
        disabled={loading}
        className="w-full py-4 rounded-xl font-black text-white bg-[#FF6B4A] hover:bg-[#E55530] disabled:opacity-60 transition-colors text-lg"
      >
        {loading
          ? "Aguarde..."
          : recurring
          ? `Doe R$${finalAmount || "..."}/mês`
          : `Doe R$${finalAmount || "..."} agora`}
      </button>

      {/* Payment methods note */}
      <p className="text-xs text-[#7C6B8E] text-center mt-4">
        {recurring
          ? "Cartão nacional e internacional · Cancele quando quiser"
          : "Cartão nacional e internacional · PIX"}
      </p>
    </div>
  );
}
