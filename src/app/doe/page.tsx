import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CopyButton } from "@/components/ui/CopyButton";
import { DonationWidget } from "@/components/ui/DonationWidget";

export const metadata: Metadata = {
  title: "Faça uma Doação — Anjos d'Ajuda",
  description:
    "Sua doação financia castração, alimentação e resgate de emergência em Arraial d'Ajuda. Cartão nacional e internacional, PIX e doação recorrente.",
};

const donateSchema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "name": "Doe para a Anjos d'Ajuda",
  "description": "Apoie a castração, resgate e adoção responsável de cães e gatos em Arraial d'Ajuda, Bahia.",
  "url": "https://anjosdajuda.org/doe",
  "recipient": {
    "@type": "NGO",
    "name": "Anjos d'Ajuda",
    "url": "https://anjosdajuda.org",
    "taxID": "20.699.396/0001-14"
  }
};

export default function DoePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateSchema) }}
      />
      {/* Emotional header + widget */}
      <SectionWrapper innerClassName="max-w-lg">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-4">
            Arraial d&apos;Ajuda · Desde 2013
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A103C] mb-5 leading-tight">
            Sem doações,<br />o nosso trabalho para.
          </h1>
          <p className="text-lg text-[#7C6B8E] leading-relaxed mb-3">
            Funcionamos 100% por meio de doações e trabalho voluntário.
            Não há outra fonte de renda — cada mutirão de castração, cada
            animal resgatado, cada vacina aplicada depende diretamente de
            pessoas como você.
          </p>
        </div>

        {/* Urgency strip */}
        <div className="bg-[#1A103C] rounded-xl px-6 py-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-0.5">
              Necessidade do mês — Abril 2026
            </p>
            <p className="text-white font-black leading-tight">
              Próximo mutirão precisa de R$5.700
            </p>
          </div>
          <p className="text-white/50 text-sm shrink-0">R$190 = 1 castração</p>
        </div>

        <DonationWidget />

        <p className="text-center text-xs text-[#7C6B8E] mt-5">
          Mais de 30 voluntários e doadores em todo o Brasil já apoiam a Anjos d&apos;Ajuda.
        </p>
      </SectionWrapper>

      {/* Impact — minimal, below widget */}
      <section className="bg-[#F3E8FF] py-14 px-4 border-y border-[#E9D5FF]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-6 text-center">
            Para onde vai sua doação
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: "Castração",
                highlight: "R$190 = 1 castração",
                description: "Mutirões regulares com veterinários voluntários. É a intervenção mais eficaz no controle do abandono.",
              },
              {
                title: "Alimentação",
                highlight: "Necessidade urgente todo mês",
                description: "Não temos doador fixo de ração. Cada mês é um esforço novo para alimentar os animais sob nossa responsabilidade.",
              },
              {
                title: "Resgate & Tratamento",
                highlight: "Quando não há outra saída",
                description: "Em situações extremas e por falta de suporte público, resgatamos e cobrimos custos veterinários emergenciais.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E9D5FF]">
                <h3 className="font-bold text-[#1A103C] mb-1">{item.title}</h3>
                <p className="text-xs font-bold text-[#7E22CE] uppercase tracking-wide mb-3">{item.highlight}</p>
                <p className="text-sm text-[#7C6B8E] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative payment methods */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#1A103C] mb-2">
            Prefere transferir diretamente?
          </h2>
          <p className="text-sm text-[#7C6B8E] mb-8">
            PIX e transferência internacional também são bem-vindos.
          </p>

          {/* PIX */}
          <div className="bg-white border border-[#E9D5FF] rounded-2xl p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center shrink-0">
                <span className="text-[#7E22CE] font-black text-sm">PIX</span>
              </div>
              <div>
                <h3 className="font-bold text-[#1A103C]">PIX — transferência instantânea</h3>
                <p className="text-sm text-[#7C6B8E]">Chave CNPJ</p>
              </div>
            </div>
            <div className="bg-[#F3E8FF] rounded-xl px-6 py-4 mb-3">
              <p className="text-xs text-[#7C6B8E] mb-1">Chave PIX (CNPJ)</p>
              <CopyButton text="20.699.396/0001-14" />
            </div>
            <p className="text-xs text-[#7C6B8E]">
              Confirme que o destinatário é <strong>Anjos da Ajuda</strong> antes de confirmar a transferência.
            </p>
          </div>

          {/* International */}
          <div className="bg-white border border-[#E9D5FF] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center shrink-0">
                <span className="text-[#7E22CE] font-black text-xs">INTL</span>
              </div>
              <div>
                <h3 className="font-bold text-[#1A103C]">Transferência internacional</h3>
                <p className="text-sm text-[#7C6B8E]">IBAN / SWIFT — Caixa Econômica Federal</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Banco", value: "Caixa Econômica Federal" },
                { label: "Conta", value: "03948 1292 000577512087-2" },
                { label: "IBAN", value: "BR57 0036 0305 0394 8577 5120 872C 1" },
                { label: "SWIFT / BIC", value: "CEFXBRSP" },
              ].map((row) => (
                <div key={row.label} className="bg-[#F3E8FF] rounded-xl px-6 py-4">
                  <p className="text-xs text-[#7C6B8E] mb-1">{row.label}</p>
                  <CopyButton text={row.value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
