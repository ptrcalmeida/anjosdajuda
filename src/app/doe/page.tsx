import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CopyButton } from "@/components/ui/CopyButton";
import { DonationWidget } from "@/components/ui/DonationWidget";

export const metadata: Metadata = {
  title: "Faça uma Doação — Anjos d'Ajuda",
  description:
    "Sua doação financia castração, alimentação e resgate de emergência em Arraial d'Ajuda. Cartão nacional e internacional, PIX e doação recorrente.",
};

export default function DoePage() {
  return (
    <>
      {/* Header */}
      <SectionWrapper innerClassName="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
          Apoie a missão
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-[#1A103C] mb-5">
          Doe para a Anjos d&apos;Ajuda
        </h1>
        <p className="text-lg text-[#7C6B8E] leading-relaxed">
          Funcionamos 100% por meio de doações e trabalho voluntário. Não
          recebemos nenhum apoio do poder público. Cada real que chega financia
          diretamente castração, alimentação e — quando não há alternativa —
          resgate e tratamento de animais em situação extrema.
        </p>
      </SectionWrapper>

      {/* Para onde vai sua doação */}
      <section className="bg-[#F3E8FF] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#1A103C] mb-8">
            Para onde vai sua doação
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Castração",
                description:
                  "Nosso foco principal. Mutirões regulares com veterinários voluntários para esterilizar cães e gatos de rua e de famílias carentes.",
                highlight: "R$190 = 1 castração",
              },
              {
                title: "Alimentação",
                description:
                  "Todo mês buscamos doações para alimentar os animais sob nossa responsabilidade. Não temos doador fixo de ração — cada mês é um esforço novo.",
                highlight: "Necessidade urgente e mensal",
              },
              {
                title: "Resgate & Tratamento",
                description:
                  "Em situações extremas e por falta de suporte público, resgatamos e cobrimos custos veterinários de animais em sofrimento grave.",
                highlight: "Quando não há outra saída",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-[#E9D5FF]"
              >
                <h3 className="font-bold text-[#1A103C] mb-2">{item.title}</h3>
                <p className="text-sm text-[#7C6B8E] leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="text-xs font-bold text-[#7E22CE] uppercase tracking-wide">
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation widget */}
      <SectionWrapper innerClassName="max-w-lg">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Doe agora
          </p>
          <h2 className="text-3xl font-black text-[#1A103C] mb-3">
            Escolha como quer ajudar
          </h2>
          <p className="text-[#7C6B8E]">
            Doação única ou mensal recorrente — cartão nacional e
            internacional, PIX.
          </p>
        </div>
        <DonationWidget />
      </SectionWrapper>

      {/* PIX */}
      <section className="bg-[#F3E8FF] py-16 px-4">
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

          {/* Transferência internacional */}
          <div className="bg-white border border-[#E9D5FF] rounded-2xl p-8 mb-6">
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

          {/* Patrocínio de ração */}
          <div className="bg-[#1A103C] rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-3">
              Necessidade urgente
            </p>
            <h3 className="text-xl font-black text-white mb-3">
              Patrocínio de ração
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Não temos um doador fixo de ração. Todo mês é um esforço enorme para
              alimentar os animais sob nossa responsabilidade. Se você é uma
              empresa, petshop ou distribuidor, ou simplesmente quer garantir que
              nenhum dos nossos animais passe fome — entre em contato.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5573999214880?text=Olá%2C%20gostaria%20de%20patrocinar%20ração%20para%20a%20Anjos%20d'Ajuda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold bg-[#FF6B4A] text-white hover:bg-[#E55530] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:anjosdajuda@gmail.com?subject=Patrocínio%20de%20ração"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold border-2 border-[#C084FC] text-[#C084FC] hover:bg-[#C084FC] hover:text-[#1A103C] transition-colors"
              >
                anjosdajuda@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
