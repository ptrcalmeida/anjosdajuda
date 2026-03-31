import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PetGrid } from "@/components/pets/PetGrid";
import petsData from "@/data/pets.json";

export const metadata: Metadata = {
  title: "Adote um Animal — Anjos d'Ajuda",
  description:
    "Conheça nossos animais disponíveis para adoção em Arraial d'Ajuda, Bahia.",
};

export default function AdotePage() {
  const available = petsData.filter((p) => p.status === "available");

  return (
    <SectionWrapper>
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
          Adoção Responsável
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A103C] mb-4">
          Encontre seu companheiro
        </h1>
        <p className="text-lg text-[#7C6B8E] max-w-xl">
          Todos os nossos animais vieram das ruas de Arraial d&apos;Ajuda. São
          dóceis, castrados e cheios de história — e de amor pra dar.
        </p>
      </div>

      <PetGrid pets={available} />
    </SectionWrapper>
  );
}
