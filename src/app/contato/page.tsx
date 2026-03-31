import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — Anjos d'Ajuda",
  description: "Entre em contato com Anjos da Ajuda em Arraial d'Ajuda, Bahia.",
};

export default function ContatoPage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-[#1A103C] mb-6">
          Contato
        </h1>
        <p className="text-lg text-[#7C6B8E]">Em breve — formulário de contato e voluntariado.</p>
      </div>
    </section>
  );
}
