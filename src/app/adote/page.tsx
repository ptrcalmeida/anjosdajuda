import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PetGrid } from "@/components/pets/PetGrid";
import petsData from "@/data/pets.json";

export const metadata: Metadata = {
  title: "Adote um Cão ou Gato — Anjos d'Ajuda, Arraial d'Ajuda (BA)",
  description:
    "Adote um cão ou gato resgatado em Arraial d'Ajuda, Bahia. Todos os animais são castrados e vacinados. Adoção responsável para todo o Brasil.",
};

const steps = [
  { n: "1", title: "Escolha um animal", body: "Navegue pela galeria e encontre aquele que tocou seu coração." },
  { n: "2", title: "Entre em contato", body: "Clique em 'Quero Adotar' e fale com a gente pelo WhatsApp ou e-mail." },
  { n: "3", title: "Conversa e avaliação", body: "Bate-papo rápido para garantir que o animal vai para o lar certo." },
  { n: "4", title: "Adoção responsável", body: "Assinatura do termo de adoção e acompanhamento pós-adoção." },
];

export default function AdotePage() {
  const available = petsData.filter((p) => p.status === "available");

  return (
    <>
      <SectionWrapper>
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Adoção Responsável
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A103C] mb-4">
            Encontre seu companheiro
          </h1>
          <p className="text-lg text-[#7C6B8E] max-w-xl mb-4">
            Todos os nossos animais vieram das ruas de Arraial d&apos;Ajuda. São
            castrados, vacinados e cheios de amor pra dar.
          </p>
          <p className="text-sm font-semibold text-[#7E22CE]">
            {available.length} animais aguardando um lar
          </p>
        </div>
      </SectionWrapper>

      {/* Adoption process */}
      <section className="bg-[#FAF8FF] py-12 px-4 border-y border-[#E9D5FF]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-6 text-center">
            Como adotar
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col items-start">
                <span className="text-4xl font-black text-[#E9D5FF] leading-none mb-3">{s.n}</span>
                <h3 className="font-black text-[#1A103C] text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-[#7C6B8E] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet grid */}
      <SectionWrapper>
        <PetGrid pets={available} />
      </SectionWrapper>
    </>
  );
}
