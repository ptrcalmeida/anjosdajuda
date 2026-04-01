import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voluntarie-se — Anjos d'Ajuda",
  description:
    "Junte-se aos voluntários da Anjos d'Ajuda em Arraial d'Ajuda. Ajude nos mutirões de castração, lar temporário, educação nas escolas e muito mais.",
};

const roles = [
  {
    title: "Mutirões de castração",
    description:
      "Ajude na organização e logística dos mutirões. Não precisa ser veterinário — precisamos de pessoas para recepção, transporte e cuidados pós-operatórios.",
  },
  {
    title: "Lar temporário",
    description:
      "Acolha temporariamente um animal em tratamento ou aguardando adoção. É a diferença entre um animal na rua e um animal com chance de futuro.",
  },
  {
    title: "Transporte",
    description:
      "Leve animais ao veterinário, aos mutirões ou para encontros de adoção. Cada carona pode salvar uma vida.",
  },
  {
    title: "Educação nas escolas",
    description:
      "Participe das ações educativas com crianças e adolescentes. Compartilhe conhecimento sobre guarda responsável e proteção animal.",
  },
  {
    title: "Comunicação e redes sociais",
    description:
      "Ajude a divulgar animais para adoção, campanhas de doação e mutirões. Design, fotografia, vídeo, texto — tudo conta.",
  },
  {
    title: "Doação de ração",
    description:
      "Não temos doador fixo de ração. Se você é empresa, petshop ou distribuidor — ou simplesmente quer garantir que nossos animais não passem fome — entre em contato.",
  },
];

export default function VoluntariePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white py-20 px-4 border-b border-[#E9D5FF]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Faça parte
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A103C] mb-5">
            Voluntarie-se
          </h1>
          <p className="text-lg text-[#7C6B8E] leading-relaxed max-w-xl">
            A Anjos d&apos;Ajuda existe porque pessoas escolhem agir. Se você
            mora em Arraial d&apos;Ajuda ou arredores — ou simplesmente quer
            ajudar à distância — há uma forma de contribuir.
          </p>
        </div>
      </section>

      {/* Group photo */}
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden bg-[#1A103C]">
        <Image
          src="/story/voluntarios-grupo.jpg"
          alt="Voluntários da Anjos d'Ajuda trabalhando juntos em Arraial d'Ajuda"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A103C]/30 to-[#1A103C]/85" />
        <div className="absolute inset-0 flex flex-col justify-end px-4 pb-10 max-w-3xl mx-auto z-10">
          <p className="text-white font-black text-xl md:text-2xl leading-snug max-w-lg"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            30 voluntários. Uma missão.<br />
            <span className="text-[#C084FC]">Arraial d&apos;Ajuda.</span>
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-[#FAF8FF] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#1A103C] mb-8">
            Como você pode ajudar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {roles.map((r) => (
              <div
                key={r.title}
                className="bg-white border border-[#E9D5FF] rounded-xl p-6"
              >
                <h3 className="font-bold text-[#1A103C] mb-2">{r.title}</h3>
                <p className="text-sm text-[#7C6B8E] leading-relaxed">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A103C] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Entre em contato pelo WhatsApp ou e-mail. Conte um pouco sobre você
            e como quer ajudar — respondemos a todos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5573999214880?text=Olá%2C%20gostaria%20de%20me%20voluntariar%20na%20Anjos%20d'Ajuda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#FF6B4A] text-white hover:bg-[#E55530] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:anjosdajuda@gmail.com?subject=Quero%20me%20voluntariar"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold border-2 border-[#C084FC] text-[#C084FC] hover:bg-[#C084FC] hover:text-[#1A103C] transition-colors"
            >
              anjosdajuda@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
