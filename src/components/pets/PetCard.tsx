import Image from "next/image";
import Link from "next/link";

export interface Pet {
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

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <div className="bg-white border border-[#E9D5FF] rounded-xl overflow-hidden flex flex-col">
      <div className="relative aspect-square bg-[#F3E8FF]">
        {pet.photo ? (
          <Image
            src={pet.photo}
            alt={`Foto de ${pet.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-black text-[#7E22CE]/10 select-none">
              {pet.name[0]}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="text-lg font-bold text-[#1A103C]">{pet.name}</h3>
          <span className="text-xs text-[#7C6B8E] shrink-0 ml-2">
            {pet.age !== null
              ? pet.age === 1
                ? "1 ano"
                : `${pet.age} anos`
              : "Idade desconhecida"}
          </span>
        </div>
        <p className="text-xs font-medium text-[#7E22CE] mb-3">
          {pet.species} · {pet.gender}
        </p>
        <span className="inline-flex items-center gap-1 self-start text-[10px] font-bold uppercase tracking-wide text-[#7E22CE] bg-[#F3E8FF] border border-[#E9D5FF] rounded-full px-2.5 py-1 mb-3">
          ✓ Castrado · Vacinado
        </span>
        <p className="text-sm text-[#7C6B8E] leading-relaxed line-clamp-3 flex-1 mb-5">
          {pet.description}
        </p>
        <Link
          href={`/contato?adotar=${pet.id}`}
          className="inline-flex items-center justify-center w-full rounded-lg px-4 py-2.5 text-sm font-semibold border-2 border-[#7E22CE] text-[#7E22CE] hover:bg-[#F3E8FF] transition-colors"
        >
          Quero Adotar
        </Link>
      </div>
    </div>
  );
}
