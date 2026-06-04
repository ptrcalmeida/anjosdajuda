const STATS = [
  { number: "10.000+", label: "Animais Castrados", context: "Cada um evitou até 67 novos abandonos" },
  { number: "700+", label: "Adotados", context: "Famílias em todo o Brasil" },
  { number: "30+", label: "Voluntários", context: "Sem salário. Por convicção." },
  { number: "13", label: "Anos de Dedicação", context: "Sem parar. Sem apoio público." },
];

export default function Stats() {
  return (
    <section className="bg-[#FAF8FF] py-20 px-4 border-b border-[#E9D5FF]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl md:text-6xl font-black text-[#1A103C] leading-none mb-2">
                {stat.number}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7C6B8E] mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-[#7E22CE] font-medium leading-snug">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
