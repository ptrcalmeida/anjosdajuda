import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Quem Somos — Anjos d'Ajuda",
  description:
    "A Anjos d'Ajuda é uma ONG sem fins lucrativos fundada em 2013 em Arraial d'Ajuda, Bahia. Mais de 13 anos castrando, resgatando e encontrando lares para cães e gatos abandonados no Sul da Bahia.",
};

const stats = [
  { number: "13", label: "Anos de atuação" },
  { number: "10.000+", label: "Animais castrados" },
  { number: "700+", label: "Adotados" },
  { number: "30+", label: "Voluntários" },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero image */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-[#1A103C]">
        <Image
          src="/story/mutirao-voluntarios.jpg"
          alt="Voluntários da Anjos d'Ajuda em mutirão de castração com Peregrinos Vet"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A103C]/30 via-[#1A103C]/60 to-[#1A103C]/95" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-14 max-w-6xl mx-auto z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-4">
            Arraial d&apos;Ajuda, Bahia · Desde 2013
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-xl"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
            13 anos protegendo animais em Arraial d&apos;Ajuda
          </h1>
        </div>
      </section>

      {/* Lead — quem somos */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-4">
            Nossa missão
          </p>
          <p className="text-xl md:text-2xl text-[#1A103C] font-semibold leading-relaxed mb-6">
            A maioria das ONGs de proteção animal resgata os sintomas.
            A Anjos d&apos;Ajuda ataca a causa.
          </p>
          <p className="text-lg text-[#7C6B8E] leading-relaxed mb-6">
            Fundada em 2013 em Arraial d&apos;Ajuda, Bahia, nossa prioridade
            sempre foi castração e educação — as únicas ferramentas que
            reduzem o abandono de forma permanente. Resgatar alivia o sofrimento
            imediato, mas uma fêmea não castrada pode gerar até 67 novos animais
            em seis anos. É esse ciclo que quebramos.
          </p>
          <p className="text-lg text-[#7C6B8E] leading-relaxed">
            Em mais de 13 anos, atendemos mais de 10.000 animais — 100% por meio
            de doações e trabalho voluntário, sem nenhum apoio do poder público.
            Cada criança que educamos sobre guarda responsável muda o comportamento
            de uma família inteira. Cada mutirão de castração evita centenas de
            abandonos futuros.
          </p>
        </div>
      </section>

      {/* Full-bleed editorial photo */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden bg-[#1A103C]">
        <Image
          src="/story/sobre-hero-grupo.jpg"
          alt="Voluntários da Anjos d'Ajuda em mutirão de castração em Arraial d'Ajuda"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A103C]/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-4 right-4 max-w-6xl mx-auto z-10">
          <p className="text-white/80 text-sm font-semibold italic">
            Pessoas comuns que escolheram não olhar para o outro lado — o coração da Anjos d&apos;Ajuda.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#FAF8FF] py-16 px-4 border-y border-[#E9D5FF]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-6">
            Quem fundou
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <div className="w-28 h-28 rounded-full shrink-0 overflow-hidden border-4 border-[#E9D5FF]">
              <Image
                src="/story/founder.jpg"
                alt="Jeannette Eggengoor, fundadora da Anjos d'Ajuda"
                width={112}
                height={112}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#1A103C] mb-1">
                Jeannette Eggengoor
              </h3>
              <p className="text-sm text-[#7E22CE] font-semibold mb-3">
                Fundadora e diretora · Arraial d&apos;Ajuda, Bahia
              </p>
              <p className="text-[#7C6B8E] leading-relaxed">
                A Anjos d&apos;Ajuda nasceu em 2013 da convicção de que o
                abandono animal é um problema solucionável — e que a solução
                está nas mãos da própria comunidade. Em mais de uma década,
                essa visão se traduziu em mais de 10.000 animais atendidos,
                inteiramente por meio de doações e voluntariado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14 px-4 border-b border-[#E9D5FF]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-5xl md:text-6xl font-black text-[#1A103C] leading-none mb-2">
                {s.number}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7C6B8E]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* O que fazemos */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-4">
            O que fazemos
          </p>
          <h2 className="text-3xl font-black text-[#1A103C] mb-10">
            Três frentes. Um objetivo.
          </h2>
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Castração e esterilização",
                body: "Realizamos mutirões regulares com veterinários voluntários para castrar cães e gatos de rua e de famílias carentes. É a intervenção mais eficaz e duradoura no controle do abandono animal em Arraial d'Ajuda e região.",
              },
              {
                title: "Resgate e adoção responsável",
                body: "Em situações extremas — por ausência de suporte público — resgatamos animais em sofrimento grave, cobrimos tratamentos veterinários e buscamos adotantes responsáveis em todo o Brasil.",
              },
              {
                title: "Educação e conscientização",
                body: "Trabalhamos com escolas e comunidades para formar guardiões responsáveis. Uma criança que aprende a respeitar animais cresce sem abandonar — mudando o comportamento antes que o problema aconteça.",
              },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-6 items-start">
                <span className="text-4xl font-black text-[#E9D5FF] leading-none shrink-0 w-8">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-black text-[#1A103C] text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#7C6B8E] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-[#FAF8FF] py-16 px-4 border-y border-[#E9D5FF]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-4">
            Transparência
          </p>
          <h2 className="text-3xl font-black text-[#1A103C] mb-3">
            Como usamos as doações
          </h2>
          <p className="text-[#7C6B8E] leading-relaxed mb-10 max-w-xl">
            Funcionamos sem apoio público. Cada real doado vai diretamente para
            o trabalho em campo — sem sede própria, sem salários administrativos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { pct: "70%", title: "Castração e esterilização", desc: "Mutirões regulares, insumos cirúrgicos e apoio a veterinários voluntários." },
              { pct: "20%", title: "Alimentação", desc: "Ração para os animais sob nossa responsabilidade — nossa necessidade mais urgente e recorrente." },
              { pct: "10%", title: "Resgate e tratamento", desc: "Emergências veterinárias em casos extremos, quando não há outra saída." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-[#E9D5FF] rounded-xl p-6">
                <p className="text-4xl font-black text-[#7E22CE] leading-none mb-2">{item.pct}</p>
                <h3 className="font-bold text-[#1A103C] mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-[#7C6B8E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#7C6B8E]">
            CNPJ: 20.699.396/0001-14 · Associação sem fins lucrativos registrada em Arraial d&apos;Ajuda, Bahia.
          </p>
        </div>
      </section>

      {/* O que nos torna únicos */}
      <section className="bg-[#1A103C] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C084FC] mb-4">
            O que nos torna únicos
          </p>
          <h2 className="text-3xl font-black text-white mb-10">
            Cinco razões pelas quais o que fazemos é diferente.
          </h2>
          <div className="flex flex-col gap-8">
            {[
              {
                n: "01",
                title: "Causa, não sintoma",
                body: "Enquanto a maioria resgata animais já abandonados, nosso foco é evitar que o abandono aconteça. Castração e educação são intervenções permanentes — não remédio para emergência.",
              },
              {
                n: "02",
                title: "Uma cidade. Um problema real de resolver.",
                body: "Arraial d'Ajuda tem menos de 20 mil habitantes. Isso nos permite medir, agir e ver resultados reais no controle populacional — algo impossível em metrópoles onde o problema é infinito.",
              },
              {
                n: "03",
                title: "Zero dependência do poder público",
                body: "Nunca recebemos repasse governamental. Existimos porque a comunidade acredita na causa — não porque um orçamento público foi aprovado. Isso nos dá independência para agir onde e quando for necessário.",
              },
              {
                n: "04",
                title: "13 anos de presença contínua",
                body: "Em um setor marcado por alto turnover e projetos que surgem e somem, a Anjos d'Ajuda está no mesmo lugar, com a mesma missão, desde 2013. Não somos um evento — somos uma instituição.",
              },
              {
                n: "05",
                title: "Educação como infraestrutura",
                body: "Trabalhamos com escolas para mudar comportamento antes do abandono acontecer. Uma criança que aprende a respeitar animais cresce sem abandonar — e ensina os pais. É o único investimento que se paga sozinho.",
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-6 items-start">
                <span className="text-3xl font-black text-[#7E22CE] leading-none shrink-0 w-10 pt-0.5">
                  {item.n}
                </span>
                <div>
                  <h3 className="font-black text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA dark */}
      <section className="bg-[#1A103C] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Faça parte desta história
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-xl mx-auto">
            A Anjos d&apos;Ajuda existe porque pessoas acreditam que é possível
            fazer diferença. Doe, adote ou voluntarie-se — cada gesto conta.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/doe"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#FF6B4A] text-white hover:bg-[#E55530] transition-colors"
            >
              Fazer uma doação
            </Link>
            <Link
              href="/adote"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold border-2 border-[#C084FC] text-[#C084FC] hover:bg-[#C084FC] hover:text-[#1A103C] transition-colors"
            >
              Ver animais para adoção
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
