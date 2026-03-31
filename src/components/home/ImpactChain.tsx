const chains = [
  {
    action: "Castrar 1 fêmea",
    direct: "evita até 67 nascimentos em 6 anos",
    social: "menos animais sofrendo nas ruas",
  },
  {
    action: "Educar 1 criança",
    direct: "forma 1 guardião para toda a vida",
    social: "menos abandono nas próximas gerações",
  },
  {
    action: "Agir onde o Estado falha",
    direct: "1 animal resgatado em situação extrema",
    social: "1 caso que não virou tragédia",
  },
];

export default function ImpactChain() {
  return (
    <section className="bg-[#F3E8FF] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center max-w-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Por que isso funciona
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A103C] mb-4">
            O efeito em cascata
          </h2>
          <p className="text-[#7C6B8E] leading-relaxed">
            Castração e educação geram impacto que vai muito além do animal
            atendido — e se multiplica por anos.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {chains.map((c, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto_1fr_auto_1fr] items-center gap-3 md:gap-0"
            >
              {/* Ação */}
              <div className="flex items-center justify-center">
                <span className="inline-block bg-[#7E22CE] text-white text-sm font-bold px-5 py-3 rounded-xl whitespace-nowrap">
                  {c.action}
                </span>
              </div>

              {/* Seta */}
              <div className="hidden md:flex items-center justify-center px-3 text-[#9333EA] text-2xl font-black">
                →
              </div>
              <div className="flex md:hidden items-center justify-center text-[#9333EA] text-xl font-black">
                ↓
              </div>

              {/* Impacto direto */}
              <div className="flex items-center justify-center text-center">
                <span className="text-sm text-[#2D1A4A] font-medium">{c.direct}</span>
              </div>

              {/* Seta */}
              <div className="hidden md:flex items-center justify-center px-3 text-[#9333EA] text-2xl font-black">
                →
              </div>
              <div className="flex md:hidden items-center justify-center text-[#9333EA] text-xl font-black">
                ↓
              </div>

              {/* Impacto social */}
              <div className="flex items-center justify-center text-center">
                <span className="text-sm font-semibold text-[#7E22CE]">{c.social}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Base convergente */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1 text-[#9333EA] text-2xl font-black">
            <span>↓</span><span>↓</span><span>↓</span>
          </div>
          <div className="bg-[#7E22CE] text-white text-center font-bold text-lg px-10 py-5 rounded-2xl shadow-lg shadow-[#7E22CE]/20">
            Uma Arraial d&apos;Ajuda mais humana
          </div>
        </div>
      </div>
    </section>
  );
}
