import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obrigada pela sua doação — Anjos d'Ajuda",
  description: "Sua doação foi recebida. Obrigada por apoiar a Anjos d'Ajuda.",
};

export default function SucessoPage() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-[#F3E8FF] flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#7E22CE]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
          Doação confirmada
        </p>
        <h1 className="text-4xl font-black text-[#1A103C] mb-4">
          Obrigada pelo seu apoio
        </h1>
        <p className="text-lg text-[#7C6B8E] leading-relaxed mb-10">
          Sua doação vai diretamente para castração, alimentação e resgate de
          animais em Arraial d&apos;Ajuda. Cada real faz diferença — e o seu já
          está fazendo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/adote"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#7E22CE] text-white hover:bg-[#6B21A8] transition-colors"
          >
            Ver animais para adoção
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold border-2 border-[#E9D5FF] text-[#7C6B8E] hover:border-[#7E22CE] hover:text-[#7E22CE] transition-colors"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
