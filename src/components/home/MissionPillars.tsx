import Image from "next/image";

const pillars = [
  {
    photo: "/story/castracao.jpg",
    title: "Castração & Esterilização",
    body: "Esterilizar é a forma mais eficaz e sustentável de reduzir o sofrimento animal. Realizamos mutirões regulares com veterinários voluntários para castrar cães e gatos de famílias carentes e animais de rua — atacando o problema na raiz.",
  },
  {
    photo: "/story/educacao.jpg",
    title: "Educação",
    body: "Uma comunidade que respeita os animais é uma comunidade que não abandona. Levamos a causa animal às escolas e famílias de Arraial d'Ajuda — porque a mudança começa antes do abandono acontecer.",
  },
  {
    photo: "/story/protetores.jpg",
    title: "Voluntários e Protetores",
    body: "Moradores que transportam animais, acolhem temporariamente e participam dos mutirões. São eles que tornam possível agir onde o poder público não chega — uma rede humana que multiplica nosso alcance.",
  },
];

export default function MissionPillars() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            O que fazemos
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A103C] mb-4">
            Três frentes. Um objetivo.
          </h2>
          <p className="text-[#7C6B8E] leading-relaxed">
            Resgatar alivia o sofrimento imediato. Mas só castração e educação
            eliminam o problema na origem — e são as únicas ferramentas que
            ainda funcionam depois que as leis e multas falham.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src={p.photo}
                  alt={p.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A103C]/50 to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-[#1A103C] mb-3">{p.title}</h3>
              <p className="text-[#7C6B8E] leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
