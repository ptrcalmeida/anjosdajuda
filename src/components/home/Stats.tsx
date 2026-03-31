const STATS = [
  { number: "10.000+", label: "Animais Atendidos" },
  { number: "700+", label: "Adotados" },
  { number: "30+", label: "Voluntários" },
  { number: "13", label: "Anos de Dedicação" },
];

export default function Stats() {
  return (
    <section className="bg-[#1A103C] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl md:text-6xl font-black text-white leading-none mb-2">
                {stat.number}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
