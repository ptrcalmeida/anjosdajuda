import Link from "next/link";

const IMPACT = [
  {
    amount: "R$25",
    label: "Vacinação",
    description: "Vacinas essenciais para 2 animais contra doenças mortais.",
  },
  {
    amount: "R$50",
    label: "Esterilização",
    description: "1 animal esterilizado. Previne ninhadas e o abandono.",
  },
  {
    amount: "R$100",
    label: "Cuidados Mensais",
    description: "Alimentação, remédios e acompanhamento por 1 mês.",
  },
  {
    amount: "R$250",
    label: "Emergência",
    description: "Cobre uma cirurgia de emergência ou tratamento grave.",
  },
];

export default function DonationImpact() {
  return (
    <section className="bg-[#FAF8FF] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Transparência
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A103C]">
            Seu apoio salva vidas
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {IMPACT.map((item) => (
            <div key={item.amount}>
              <p className="text-4xl md:text-5xl font-black text-[#7E22CE] leading-none mb-1">
                {item.amount}
              </p>
              <p className="text-sm font-bold text-[#1A103C] mb-2">{item.label}</p>
              <p className="text-sm text-[#7C6B8E] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/doe"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-bold bg-[#FF6B4A] text-white hover:bg-[#E55530] transition-colors"
          >
            Fazer uma Doação
          </Link>
        </div>
      </div>
    </section>
  );
}
