import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="py-28 px-4 text-center"
      style={{
        background: "linear-gradient(135deg, #6B21A8 0%, #1A103C 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC]/70 mb-4">
          Funcionamos 100% por doações
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
          Doe todo mês.<br />
          <span className="text-[#C084FC]">Mude para sempre.</span>
        </h2>
        <p className="text-lg text-white/60 mb-10 leading-relaxed">
          Nossa maior dificuldade é a imprevisibilidade. Uma doação recorrente
          — mesmo de R$20 — transforma instabilidade em planejamento e nos
          permite castrar mais, alimentar mais, resgatar mais.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/doe"
            className="inline-flex items-center justify-center rounded-lg px-10 py-4 text-lg font-bold bg-[#FF6B4A] text-white hover:bg-[#E55530] transition-colors"
          >
            Quero Doar
          </Link>
          <Link
            href="/doe#recorrente"
            className="inline-flex items-center justify-center rounded-lg px-10 py-4 text-lg font-bold border-2 border-[#C084FC] text-[#C084FC] hover:bg-[#C084FC] hover:text-[#1A103C] transition-colors"
          >
            Doação Mensal
          </Link>
        </div>
      </div>
    </section>
  );
}
