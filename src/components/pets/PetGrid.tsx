"use client";

import { useState } from "react";
import { PetCard, type Pet } from "./PetCard";

type SpeciesFilter = "Todos" | "Cão" | "Gato";
type GenderFilter = "Qualquer" | "Macho" | "Fêmea";

export function PetGrid({ pets }: { pets: Pet[] }) {
  const [species, setSpecies] = useState<SpeciesFilter>("Todos");
  const [gender, setGender] = useState<GenderFilter>("Qualquer");

  const filtered = pets.filter((p) => {
    if (species !== "Todos" && p.species !== species) return false;
    if (gender !== "Qualquer" && p.gender !== gender) return false;
    return true;
  });

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <div className="flex gap-2">
          {(["Todos", "Cão", "Gato"] as SpeciesFilter[]).map((s) => (
            <button
              key={s}
              onClick={() => setSpecies(s)}
              className={[
                "px-4 py-2 rounded-full text-sm font-semibold border-2 transition-colors cursor-pointer",
                species === s
                  ? "bg-[#7E22CE] border-[#7E22CE] text-white"
                  : "border-[#E9D5FF] text-[#7C6B8E] hover:border-[#7E22CE] hover:text-[#7E22CE]",
              ].join(" ")}
            >
              {s === "Todos" ? "Todos" : s === "Cão" ? "Cães" : "Gatos"}
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-[#E9D5FF] mx-1" />

        <div className="flex gap-2">
          {(["Qualquer", "Macho", "Fêmea"] as GenderFilter[]).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={[
                "px-4 py-2 rounded-full text-sm font-semibold border-2 transition-colors cursor-pointer",
                gender === g
                  ? "bg-[#7E22CE] border-[#7E22CE] text-white"
                  : "border-[#E9D5FF] text-[#7C6B8E] hover:border-[#7E22CE] hover:text-[#7E22CE]",
              ].join(" ")}
            >
              {g}
            </button>
          ))}
        </div>

        <span className="ml-auto text-sm text-[#7C6B8E]">
          {filtered.length}{" "}
          {filtered.length === 1 ? "animal" : "animais"}
        </span>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-[#7C6B8E]">
          <p className="text-lg font-semibold mb-2">Nenhum animal encontrado</p>
          <p className="text-sm">Tente outros filtros.</p>
        </div>
      )}
    </div>
  );
}
