import Image from "next/image";
import { AdoptButton } from "./AdoptButton";
import { ExpandableDescription } from "./ExpandableDescription";

export interface Pet {
  id: string;
  name: string;
  species: string;
  gender: string;
  age: number | null;
  age_label?: string;
  neutered?: boolean;
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
            {pet.age_label ?? (pet.age !== null
              ? pet.age === 1 ? "1 ano" : `${pet.age} anos`
              : "Idade desconhecida")}
          </span>
        </div>
        <p className="text-xs font-medium text-[#7E22CE] mb-3">
          {pet.species} · {pet.gender}
        </p>
        <span className="inline-flex items-center gap-1 self-start text-[10px] font-bold uppercase tracking-wide text-[#7E22CE] bg-[#F3E8FF] border border-[#E9D5FF] rounded-full px-2.5 py-1 mb-3">
          {pet.neutered === false ? "✓ Vacinado · Castração pendente" : "✓ Castrado · Vacinado"}
        </span>
        <ExpandableDescription text={pet.description} />
        <AdoptButton petId={pet.id} petName={pet.name} />
      </div>
    </div>
  );
}
