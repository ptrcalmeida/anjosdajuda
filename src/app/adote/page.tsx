import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PetGrid } from "@/components/pets/PetGrid";
import petsData from "@/data/pets.json";

export const metadata: Metadata = {
  title: "Adote um Cão ou Gato — Anjos d'Ajuda, Arraial d'Ajuda (BA)",
  description:
    "Adote um cão ou gato resgatado em Arraial d'Ajuda, Bahia. Todos os animais são castrados e vacinados. Adoção responsável para todo o Brasil.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como adotar um animal da Anjos d'Ajuda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Navegue pela galeria, encontre o animal que tocou seu coração e clique em 'Quero Adotar' para falar com a gente pelo WhatsApp ou e-mail."
      }
    },
    {
      "@type": "Question",
      "name": "Os animais são castrados e vacinados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Todos os animais disponíveis para adoção são castrados e vacinados antes de irem para o novo lar."
      }
    },
    {
      "@type": "Question",
      "name": "A adoção é para todo o Brasil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Realizamos adoções responsáveis para todo o Brasil, com assinatura de termo de adoção e acompanhamento pós-adoção."
      }
    },
    {
      "@type": "Question",
      "name": "Existe algum custo para adotar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A adoção em si é gratuita. Pedimos apenas compromisso com o bem-estar do animal e a assinatura do termo de adoção responsável."
      }
    }
  ]
};

const steps = [
  { n: "1", title: "Escolha um animal", body: "Navegue pela galeria e encontre aquele que tocou seu coração." },
  { n: "2", title: "Entre em contato", body: "Clique em 'Quero Adotar' e fale com a gente pelo WhatsApp ou e-mail." },
  { n: "3", title: "Conversa e avaliação", body: "Bate-papo rápido para garantir que o animal vai para o lar certo." },
  { n: "4", title: "Adoção responsável", body: "Assinatura do termo de adoção e acompanhamento pós-adoção." },
];

export default function AdotePage() {
  const available = petsData.filter((p) => p.status === "available");
  const adopted = petsData.filter((p) => p.status === "adopted");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SectionWrapper>
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Adoção Responsável
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A103C] mb-4">
            Adote um cão ou gato em Arraial d&apos;Ajuda
          </h1>
          <p className="text-lg text-[#7C6B8E] max-w-xl mb-4">
            Todos os nossos animais vieram das ruas de Arraial d&apos;Ajuda. São
            castrados, vacinados e cheios de amor pra dar. Adoção responsável
            para todo o Brasil.
          </p>
          <p className="text-sm font-semibold text-[#7E22CE] mb-1">
            {available.length} animais aguardando um lar
          </p>
          <p className="text-sm text-[#7C6B8E]">
            Cada um deles está em lar temporário — a cargo de voluntários que arcam com os custos do próprio bolso.
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

      {/* Adopted */}
      <section className="bg-[#1A103C] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero stat */}
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-4">
              13 anos de adoção responsável
            </p>
            <p className="text-8xl md:text-9xl font-black text-white leading-none mb-3">
              700<span className="text-[#C084FC]">+</span>
            </p>
            <p className="text-xl font-bold text-white/70 mb-4">
              animais adotados desde 2013
            </p>
            <p className="text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
              Cada adoção é o resultado de voluntários, doadores e famílias que
              acreditaram. Abaixo, os animais acompanhados digitalmente a partir
              de 2026 — uma fração da história, mas a mais recente.
            </p>
          </div>

          {/* Recent tracked adoptions */}
          {adopted.length > 0 && (
            <>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-6">
                Adotados recentemente — acompanhados desde 2026
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {adopted.map((pet) => (
                  <div key={pet.id} className="relative group">
                    <div className="aspect-square rounded-xl overflow-hidden bg-[#2D1A4A]">
                      {pet.photo ? (
                        <img
                          src={pet.photo}
                          alt={pet.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-4xl font-black text-white/10">{pet.name[0]}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[#1A103C]/50 flex items-end rounded-xl">
                        <div className="p-3 w-full">
                          <p className="text-white font-bold text-sm leading-tight">{pet.name}</p>
                          <p className="text-[#C084FC] text-xs font-semibold">Adotado ✓</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
