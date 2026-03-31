import Image from "next/image";
import Link from "next/link";

const story = {
  photo: "/pets/nala.jpg",
  name: "Nala",
  label: "Quando não há outra saída",
  title: "O resgate não é nossa missão. É nossa responsabilidade.",
  body: "A Anjos d'Ajuda não é uma ONG de resgate — somos de castração e educação. Mas quando o poder público falha e o sofrimento está na nossa frente, não desviamos o olhar. Nala foi atropelada, perdeu um membro dianteiro, e ninguém ia ajudá-la. Resgatamos, reabilitamos e encontramos lar temporário. Ela aguarda adoção.",
};

export default function RescueHighlight() {
  return (
    <section className="bg-[#1A103C] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-3">
            Resgate em situações extremas
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Quando o Estado não chega, nós chegamos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          {/* Foto */}
          <div className="relative aspect-square md:aspect-auto min-h-72">
            <Image
              src={story.photo}
              alt={`Foto de ${story.name}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Texto */}
          <div className="bg-[#2D1A4A] flex flex-col justify-center p-10 md:p-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C084FC] mb-4">
              {story.label}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-snug">
              {story.title}
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              {story.body}
            </p>
            <Link
              href="/adote"
              className="self-start inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold border-2 border-[#C084FC] text-[#C084FC] hover:bg-[#C084FC] hover:text-[#1A103C] transition-colors"
            >
              Ver todos os animais →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
