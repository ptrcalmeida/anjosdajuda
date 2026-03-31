import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos — Anjos d'Ajuda",
  description:
    "Conheça a história dos Anjos da Ajuda, nossa missão, valores e impacto em Arraial d'Ajuda, Bahia.",
};

export default function SobrePage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-[#1A103C] mb-6">
          Quem Somos
        </h1>
        <p className="text-lg text-[#7C6B8E]">Em breve — conteúdo desta página está sendo preparado.</p>
      </div>
    </section>
  );
}
