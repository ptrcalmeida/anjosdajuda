import { Scissors, ShieldCheck, GraduationCap, ArrowDown, Check } from "lucide-react";

const pillars = [
  {
    icon: Scissors,
    title: "Castração de Fêmeas",
    stat: "até 67 filhotes",
    statLabel: "evitados por fêmea em 6 anos",
    impacts: [
      "Menos animais abandonados nas ruas",
      "Menos acidentes de trânsito",
      "Menos zoonoses: raiva, leishmaniose, toxoplasmose",
      "Fauna silvestre protegida de matilhas",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Castração de Machos",
    stat: "90% menos",
    statLabel: "perambulação após castração",
    impacts: [
      "Menos brigas e ataques a pessoas",
      "Menos formação de matilhas agressivas",
      "Menos sacos de lixo rasgados nas ruas",
      "Menos acidentes — cão fica perto de casa",
    ],
  },
  {
    icon: GraduationCap,
    title: "Educação",
    stat: "1 guardião",
    statLabel: "formado para toda a vida",
    impacts: [
      "Menos abandono nas próximas gerações",
      "Mais adoção responsável",
      "Comunidade que cobra o poder público",
      "Cultura de proteção que se multiplica",
    ],
  },
];

export default function ImpactChain() {
  return (
    <section className="bg-[#FAF8FF] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Por que castração e educação funcionam
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A103C] mb-4">
            O efeito em cascata
          </h2>
          <p className="text-[#7C6B8E] leading-relaxed max-w-xl mx-auto">
            Cada animal castrado e cada criança educada gera impacto que vai
            muito além do indivíduo — e se multiplica por anos na comunidade.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="flex flex-col">

                {/* Stage 1 — Ação */}
                <div className="bg-[#1A103C] rounded-t-xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#7E22CE] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight">
                    {p.title}
                  </h3>
                </div>

                {/* Conector */}
                <div className="flex justify-center py-1 bg-white border-x border-[#E9D5FF]">
                  <ArrowDown className="w-4 h-4 text-[#9333EA]" />
                </div>

                {/* Stage 2 — Stat */}
                <div className="bg-white border-x border-[#E9D5FF] px-6 py-5">
                  <p className="text-4xl font-black text-[#7E22CE] leading-none mb-1">
                    {p.stat}
                  </p>
                  <p className="text-sm text-[#7C6B8E]">{p.statLabel}</p>
                </div>

                {/* Conector */}
                <div className="flex justify-center py-1 bg-[#F3E8FF] border-x border-[#E9D5FF]">
                  <ArrowDown className="w-4 h-4 text-[#9333EA]" />
                </div>

                {/* Stage 3 — Impactos */}
                <div className="bg-[#F3E8FF] border border-[#E9D5FF] rounded-b-xl px-6 py-5 flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#7E22CE] mb-3">
                    Impacto na comunidade
                  </p>
                  <ul className="flex flex-col gap-2">
                    {p.impacts.map((impact) => (
                      <li key={impact} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#7E22CE] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#2D1A4A] leading-snug">
                          {impact}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        {/* Convergência */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex gap-6 md:gap-[30%]">
            <ArrowDown className="w-5 h-5 text-[#9333EA]" />
            <ArrowDown className="w-5 h-5 text-[#9333EA]" />
            <ArrowDown className="w-5 h-5 text-[#9333EA]" />
          </div>
          <div className="w-full max-w-lg bg-[#7E22CE] text-white text-center font-black text-xl px-10 py-6 rounded-xl">
            Um Arraial mais humano,<br />
            <span className="font-normal text-base text-white/70">
              mais seguro, mais saudável.
            </span>
          </div>
        </div>

        {/* Nota de rodapé com fontes */}
        <p className="mt-8 text-center text-xs text-[#7C6B8E] max-w-2xl mx-auto">
          Dados: PMC (2022) — Behavioral Consequences of Male Dog Castration · CRMV-SP · OMS · Agência Brasil (2023) · Pubvet — Cães ferais e impactos ambientais
        </p>
      </div>
    </section>
  );
}
