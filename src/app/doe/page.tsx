import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CopyButton } from "@/components/ui/CopyButton";

export const metadata: Metadata = {
  title: "Faça uma Doação — Anjos d'Ajuda",
  description:
    "Sua doação financia castração, alimentação e resgate de emergência em Arraial d'Ajuda. PIX, transferência nacional e internacional.",
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
                highlight: "R$50 = 1 animal castrado",
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

      {/* Doação recorrente — destaque */}
      <section id="recorrente" className="bg-[#1A103C] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-3">
            A forma mais impactante de ajudar
          </p>
          <h2 className="text-3xl font-black text-white mb-5">
            Doação mensal recorrente
          </h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Nossa maior dificuldade é a imprevisibilidade. Todo mês corremos
            atrás de dinheiro para ração, vacinas e emergências. Uma doação
            recorrente — mesmo de R$20 ou R$30 — transforma instabilidade em
            planejamento. Com recorrência, conseguimos fazer mais e gastar menos.
          </p>
          <div className="bg-[#2D1A4A] rounded-2xl p-8 text-left max-w-md mx-auto">
            <p className="text-white font-semibold mb-4">
              Para configurar uma doação mensal:
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5573999214880?text=Olá%2C%20gostaria%20de%20fazer%20uma%20doação%20mensal%20para%20a%20Anjos%20d'Ajuda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-[#FF6B4A] text-white hover:bg-[#E55530] transition-colors"
              >
                Falar pelo WhatsApp
              </a>
              <a
                href="mailto:anjosdajuda@gmail.com?subject=Doação%20mensal%20recorrente"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold border-2 border-[#C084FC] text-[#C084FC] hover:bg-[#C084FC] hover:text-[#1A103C] transition-colors"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PIX */}
      <SectionWrapper innerClassName="max-w-3xl">
        <h2 className="text-2xl font-black text-[#1A103C] mb-8">
          Faça uma doação agora
        </h2>

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
            nenhum dos nossos animais passe fome — entre em contato. Qualquer
            quantidade ajuda.
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
      </SectionWrapper>
    </>
  );
}
