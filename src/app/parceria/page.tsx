import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Parceria de Ração — ONG Anjos d'Ajuda, Arraial d'Ajuda BA",
  description:
    "Doe ração para a Anjos d'Ajuda — ONG de proteção animal em Arraial d'Ajuda, Bahia. Parceria com fabricantes, distribuidores e pet shops. CNPJ 20.699.396/0001-14. Precisamos de 400 kg/mês.",
};

const partnershipSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Anjos d'Ajuda",
  "url": "https://anjosdajuda.org",
  "taxID": "20.699.396/0001-14",
  "description": "ONG em Arraial d'Ajuda que aceita doações de ração de fabricantes, distribuidores e pet shops para alimentar animais resgatados.",
  "seeks": {
    "@type": "Demand",
    "name": "Doação de ração para cães e gatos",
    "description": "400 kg de ração por mês para animais resgatados em Arraial d'Ajuda, Bahia. Parceria com marcas, distribuidores e pet shops do setor pet.",
    "availableAtOrFrom": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Arraial d'Ajuda",
        "addressRegion": "BA",
        "addressCountry": "BR"
      }
    }
  }
};

const benefits = [
  {
    title: "Visibilidade nas redes sociais",
    body: "Sua marca mencionada nos perfis da ONG — Instagram, Facebook e YouTube — a cada doação recebida. Alcance direto com tutores e amantes de animais no Sul da Bahia.",
  },
  {
    title: "Reconhecimento no site",
    body: "Logo e link do parceiro publicados em anjosdajuda.org, com tráfego orgânico crescente e público qualificado do mercado pet.",
  },
  {
    title: "Presença nos mutirões",
    body: "Sua marca nos mutirões de castração em Arraial d'Ajuda — eventos presenciais com forte engajamento comunitário e cobertura nas redes.",
  },
  {
    title: "Nota fiscal e CNPJ",
    body: "Emitimos documentação para toda doação. Doações a associações registradas podem ser abatidas no IR — consulte seu contador.",
  },
];

export default function ParceriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipSchema) }}
      />

      {/* Hero */}
      <SectionWrapper className="bg-[#1A103C]" innerClassName="max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-4">
          Parceria corporativa · Arraial d&apos;Ajuda, Bahia
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5 text-wrap-balance">
          Parceria de doação de ração para ONG de proteção animal
        </h1>
        <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
          A Anjos d&apos;Ajuda cuida de cães e gatos resgatados em Arraial d&apos;Ajuda desde 2013.
          Precisamos de <strong className="text-white">400 kg de ração por mês</strong> e não temos
          nenhum doador fixo de alimento. Se a sua empresa trabalha com alimentação pet, esta é a
          parceria que faz diferença real.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/5573999214880?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20ser%20parceiro%20de%20doa%C3%A7%C3%A3o%20de%20ra%C3%A7%C3%A3o%20para%20a%20Anjos%20d%27Ajuda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-[#25D366] text-white hover:bg-[#1da851] transition-colors"
          >
            Falar pelo WhatsApp
          </a>
          <a
            href="mailto:anjosdajuda@gmail.com?subject=Parceria%20doa%C3%A7%C3%A3o%20de%20ra%C3%A7%C3%A3o%20%E2%80%94%20[nome%20da%20empresa]"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Enviar proposta por e-mail
          </a>
        </div>
      </SectionWrapper>

      {/* Need + numbers */}
      <SectionWrapper innerClassName="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { n: "400 kg", label: "de ração necessária por mês", sub: "Cães e gatos de médio e grande porte." },
            { n: "13 anos", label: "de operação contínua", sub: "Sem interrupções. Sem apoio público." },
            { n: "R$ 0", label: "de doador fixo de ração", sub: "Cada mês é um esforço novo. Você pode mudar isso." },
          ].map((s) => (
            <div key={s.n} className="bg-[#FAF8FF] border border-[#E9D5FF] rounded-xl p-8">
              <p className="text-4xl font-black text-[#1A103C] leading-none mb-2">{s.n}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-2">{s.label}</p>
              <p className="text-sm text-[#7C6B8E]">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Who we serve */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
              Quem somos
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[#1A103C] mb-4 text-wrap-balance">
              Uma ONG real, com 13 anos de histórico verificável em Arraial d&apos;Ajuda
            </h2>
            <div className="space-y-3 text-[#7C6B8E] leading-relaxed">
              <p>
                Fundada em 2013, a Anjos d&apos;Ajuda é uma associação sem fins lucrativos registrada
                (CNPJ <strong className="text-[#1A103C]">20.699.396/0001-14</strong>), membro da Rede FEBRACA,
                com atuação contínua em castração, resgate e adoção de animais no Sul da Bahia.
              </p>
              <p>
                Mais de 700 animais adotados. Mutirões de castração regulares. Presença ativa nas
                redes sociais com público engajado de tutores e protetores da região.
              </p>
              <p>
                Atendemos parcerias com <strong className="text-[#1A103C]">fabricantes, distribuidores e pet shops</strong> —
                qualquer volume de doação tem impacto direto e imediato nos animais sob nossos cuidados.
              </p>
            </div>
          </div>

          {/* What we need */}
          <div className="bg-[#1A103C] rounded-2xl p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-4">
              O que precisamos
            </p>
            <ul className="space-y-4 text-white/80 text-sm leading-relaxed">
              {[
                "Ração seca para cães adultos e filhotes (médio e grande porte)",
                "Ração seca para gatos adultos e filhotes",
                "Ração úmida para animais em recuperação",
                "Petiscos e suplementos — bem-vindos para reabilitação",
                "Doações pontuais ou fixas mensais — ambas fazem diferença",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-[#C084FC] font-bold mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/40">
              Logística flexível — retiramos em Arraial d&apos;Ajuda ou combinamos entrega na região.
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            O que sua empresa recebe
          </p>
          <h2 className="text-2xl font-black text-[#1A103C] mb-8 text-wrap-balance">
            Visibilidade genuína junto a quem se importa com animais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="border border-[#E9D5FF] rounded-xl p-6">
                <p className="font-bold text-[#1A103C] mb-2">{b.title}</p>
                <p className="text-sm text-[#7C6B8E] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA footer */}
      <SectionWrapper className="bg-[#F3E8FF]" innerClassName="max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
          Próximo passo
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-[#1A103C] mb-4">
          Tem interesse? Fale com a gente diretamente.
        </h2>
        <p className="text-[#7C6B8E] mb-6">
          Respondemos em até 24h. Sem burocracia — uma conversa rápida define tudo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="https://wa.me/5573999214880?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20ser%20parceiro%20de%20doa%C3%A7%C3%A3o%20de%20ra%C3%A7%C3%A3o%20para%20a%20Anjos%20d%27Ajuda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-[#25D366] text-white hover:bg-[#1da851] transition-colors"
          >
            WhatsApp — (73) 99921-4880
          </a>
          <a
            href="mailto:anjosdajuda@gmail.com?subject=Parceria%20ra%C3%A7%C3%A3o"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold border-2 border-[#7E22CE] text-[#7E22CE] hover:bg-white transition-colors"
          >
            anjosdajuda@gmail.com
          </a>
        </div>
        <p className="text-xs text-[#7C6B8E]">
          CNPJ: 20.699.396/0001-14 · Associação sem fins lucrativos · Afiliada à Rede FEBRACA
        </p>
      </SectionWrapper>
    </>
  );
}
