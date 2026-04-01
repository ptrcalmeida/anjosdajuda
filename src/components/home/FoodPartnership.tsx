import Link from "next/link";

export default function FoodPartnership() {
  return (
    <section className="bg-white py-20 px-4 border-b border-[#E9D5FF]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-4">
              Parceria corporativa
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A103C] leading-tight mb-5">
              Sua marca alimenta<br />quem não tem voz.
            </h2>
            <p className="text-lg text-[#7C6B8E] leading-relaxed mb-4">
              Todo mês, voluntários da Anjos d&apos;Ajuda sustentam com recursos próprios
              os animais resgatados em situação de risco em Arraial d&apos;Ajuda. São cães
              e gatos que aguardam adoção — e precisam comer enquanto esperam.
            </p>
            <p className="text-lg text-[#7C6B8E] leading-relaxed mb-8">
              Precisamos de{" "}
              <strong className="text-[#1A103C]">400 kg de ração por mês</strong>.
              Não temos nenhum doador fixo de alimento. Se a sua empresa trabalha
              com alimentação pet, esta é a parceria que faz diferença real —
              com visibilidade genuína junto a uma ONG presente há 13 anos em
              Arraial d&apos;Ajuda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5573999214880?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20doar%20ra%C3%A7%C3%A3o%20para%20a%20Anjos%20d%27Ajuda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-[#25D366] text-white hover:bg-[#1da851] transition-colors"
              >
                Falar pelo WhatsApp
              </a>
              <a
                href="mailto:anjosdajuda@gmail.com?subject=Parceria%20doa%C3%A7%C3%A3o%20de%20ra%C3%A7%C3%A3o"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold border-2 border-[#7E22CE] text-[#7E22CE] hover:bg-[#F3E8FF] transition-colors"
              >
                Enviar email
              </a>
            </div>
            <p className="mt-5 text-xs text-[#7C6B8E]">
              CNPJ: 20.699.396/0001-14 · Associação sem fins lucrativos ·
              Doações a associações registradas podem ser dedutíveis — consulte seu contador.
            </p>
          </div>

          {/* Right: stat cards */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#FAF8FF] border border-[#E9D5FF] rounded-xl p-8">
              <p className="text-6xl font-black text-[#1A103C] leading-none mb-2">400 kg</p>
              <p className="text-sm font-semibold text-[#7C6B8E] uppercase tracking-widest">
                de ração necessária por mês
              </p>
            </div>
            <div className="bg-[#FAF8FF] border border-[#E9D5FF] rounded-xl p-8">
              <p className="text-6xl font-black text-[#7E22CE] leading-none mb-2">R$0</p>
              <p className="text-sm font-semibold text-[#7C6B8E] uppercase tracking-widest">
                de apoio do poder público
              </p>
            </div>
            <div className="bg-[#1A103C] rounded-xl p-8">
              <p className="text-white font-black text-lg mb-2">
                Sua marca reconhecida.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Parceiros doadores são reconhecidos nas nossas redes sociais,
                no site e nos mutirões de castração em Arraial d&apos;Ajuda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
