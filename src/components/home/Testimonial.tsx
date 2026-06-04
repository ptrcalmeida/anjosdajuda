const testimonials = [
  {
    quote:
      "Anjos d'Ajuda é uma organização séria, que existe e persiste graças à força incansável de Jeannette Eggengoor e de voluntários que não desistem da luta pelos animais — mesmo diante da negligência e do descaso que ainda marcam nosso país. Arraial se torna mais humana por causa do trabalho da Anjos d'Ajuda.",
    name: "Patricia E. de Almeida",
    role: "Voluntária · Médica Veterinária",
  },
  {
    quote:
      "Anjos d'Ajuda é uma força grandiosa. Centenas de animais em Arraial d'Ajuda que não teriam chance — resgatados, castrados, cuidados, amados — são a prova viva de que este trabalho importa. Em uma região onde o poder público se ausenta, esta ONG se mantém presente. Que continue.",
    name: "Anônimo",
    role: "Voluntário",
  },
  {
    quote:
      "O trabalho da Anjos d'Ajuda vai muito além da castração animal. É um meio de auxílio a animais em necessidade e, acima de tudo, uma ferramenta de educação sobre o nosso papel social. Educação transforma. Cura nossas falhas humanitárias. É exatamente isso que acontece em Arraial d'Ajuda — e é por isso que apoio.",
    name: "Anônimo",
    role: "Apoiador",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-[#FAF8FF] py-20 px-4 border-y border-[#E9D5FF]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-10 text-center">
          Quem conhece, apoia
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-white border border-[#E9D5FF] rounded-xl p-8 flex flex-col"
            >
              <p className="text-[#1A103C] font-medium leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <p className="text-sm font-bold text-[#1A103C]">{t.name}</p>
                <p className="text-xs text-[#7C6B8E] mt-0.5">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
