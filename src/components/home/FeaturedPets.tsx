import Link from "next/link";
import Image from "next/image";
import petsData from "@/data/pets.json";

interface Pet {
  id: string;
  name: string;
  species: string;
  gender: string;
  age: number | null;
  description: string;
  photo: string | null;
  status: string;
  featured: boolean;
}

const featured = (petsData as Pet[]).filter((p) => p.featured).slice(0, 3);

function ageLabel(age: number | null): string {
  if (age === null) return "Idade desconhecida";
  if (age < 1) return "Filhote";
  if (age === 1) return "1 ano";
  return `${age} anos`;
}

export default function FeaturedPets() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Adoção Responsável
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A103C]">
            Procurando um lar
          </h2>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory md:snap-none">
          {featured.map((pet) => (
            <div
              key={pet.id}
              className="shrink-0 w-72 md:w-auto bg-white border border-[#E9D5FF] rounded-xl overflow-hidden snap-start"
            >
              {/* Photo */}
              <div className="relative aspect-square bg-[#F3E8FF]">
                {pet.photo ? (
                  <Image
                    src={pet.photo}
                    alt={`Foto de ${pet.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-black text-[#7E22CE]/10 select-none">
                      {pet.name[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-lg font-bold text-[#1A103C]">{pet.name}</h3>
                  <span className="text-xs text-[#7C6B8E]">{ageLabel(pet.age)}</span>
                </div>
                <p className="text-xs font-medium text-[#7E22CE] mb-3">
                  {pet.species} · {pet.gender}
                </p>
                <p className="text-sm text-[#7C6B8E] leading-relaxed mb-5 line-clamp-2">
                  {pet.description}
                </p>
                <Link
                  href="/adote"
                  className="inline-flex items-center justify-center w-full rounded-lg px-4 py-2.5 text-sm font-semibold border-2 border-[#7E22CE] text-[#7E22CE] hover:bg-[#F3E8FF] transition-colors"
                >
                  Quero Adotar
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/adote"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7E22CE] hover:underline"
          >
            Ver todos os animais disponíveis →
          </Link>
        </div>
      </div>
    </section>
  );
}
