import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obrigada pela sua doação — Anjos d'Ajuda",
  description: "Sua doação foi recebida. Obrigada por apoiar a Anjos d'Ajuda.",
};

export default function SucessoPage() {
  return (
    <>
      <section className="bg-white py-24 px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Check */}
          <div className="w-16 h-16 rounded-full bg-[#F3E8FF] flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#7E22CE]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Doação confirmada
          </p>
          <h1 className="text-4xl font-black text-[#1A103C] mb-5 leading-tight">
            Você acaba de mudar<br />uma vida em Arraial.
          </h1>
          <p className="text-lg text-[#7C6B8E] leading-relaxed mb-4">
            Sua doação vai direto para castração, alimentação e — quando não há
            outra saída — resgate de animais em Arraial d&apos;Ajuda. Sem
            intermediários, sem burocracia.
          </p>
          <p className="text-lg text-[#7C6B8E] leading-relaxed mb-10">
            Um recibo chegará no seu e-mail em breve. Se tiver qualquer dúvida,
            fale com a gente pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/adote"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#FF6B4A] text-white hover:bg-[#E55530] transition-colors"
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

      {/* Share prompt */}
      <section className="bg-[#1A103C] py-16 px-4">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-4">
            Ajude ainda mais
          </p>
          <h2 className="text-2xl font-black text-white mb-4">
            Conta para alguém.
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-sm mx-auto">
            A maior barreira para novos doadores é não conhecer a causa.
            Uma mensagem sua vale mais do que qualquer anúncio.
          </p>
          <a
            href="https://wa.me/?text=Acabei%20de%20apoiar%20a%20Anjos%20d'Ajuda%2C%20uma%20ONG%20que%20cuida%20de%20animais%20abandonados%20em%20Arraial%20d'Ajuda%20(BA)%20desde%202013.%20Se%20voc%C3%AA%20puder%2C%20doe%20tamb%C3%A9m%3A%20https%3A%2F%2Fanjosdajuda.org%2Fdoe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#25D366] text-white hover:bg-[#1da851] transition-colors"
          >
            Compartilhar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
