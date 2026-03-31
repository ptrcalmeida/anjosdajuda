import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato — Anjos d'Ajuda",
  description:
    "Entre em contato com a Anjos d'Ajuda. Adoção, doação, voluntariado ou denúncia de maus-tratos — estamos no WhatsApp e por e-mail.",
};

const reasons = [
  {
    label: "Quero adotar um animal",
    href: "https://wa.me/5573999214880?text=Olá%2C%20gostaria%20de%20adotar%20um%20animal%20da%20Anjos%20d'Ajuda",
  },
  { label: "Quero fazer uma doação", href: "/doe" },
  {
    label: "Quero me voluntariar",
    href: "https://wa.me/5573999214880?text=Olá%2C%20gostaria%20de%20me%20voluntariar%20na%20Anjos%20d'Ajuda",
  },
  {
    label: "Quero denunciar maus-tratos",
    href: "https://wa.me/5573999214880?text=Olá%2C%20quero%20denunciar%20um%20caso%20de%20maus-tratos",
  },
  { label: "Outra dúvida", href: "mailto:anjosdajuda@gmail.com" },
];

export default function ContatoPage() {
  return (
    <>
      <section className="bg-white py-20 px-4 border-b border-[#E9D5FF]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-3">
            Fale conosco
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A103C] mb-5">
            Contato
          </h1>
          <p className="text-lg text-[#7C6B8E] leading-relaxed max-w-xl">
            Respondemos pelo WhatsApp e por e-mail. Escolha abaixo o que se
            encaixa melhor na sua situação.
          </p>
        </div>
      </section>

      <section className="bg-[#FAF8FF] py-16 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Quick links */}
          <div>
            <h2 className="text-xl font-black text-[#1A103C] mb-5">
              Como posso ajudar?
            </h2>
            <div className="flex flex-col gap-3">
              {reasons.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    r.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center justify-between bg-white border border-[#E9D5FF] rounded-xl px-5 py-4 text-sm font-semibold text-[#2D1A4A] hover:border-[#7E22CE] hover:text-[#7E22CE] transition-colors group"
                >
                  {r.label}
                  <span className="text-[#7C6B8E] group-hover:text-[#7E22CE] transition-colors">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-xl font-black text-[#1A103C] mb-5">
              Onde nos encontrar
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm text-[#7C6B8E]">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#7E22CE]" />
                <span>
                  Rua Mucugê, 333, Shopping d&apos;Ajuda
                  <br />
                  Arraial d&apos;Ajuda, Bahia · CEP 45816-000
                </span>
              </div>
              <a
                href="https://wa.me/5573999214880"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#7C6B8E] hover:text-[#7E22CE] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#7E22CE]" />
                +55 73 99921-4880 (WhatsApp)
              </a>
              <a
                href="mailto:anjosdajuda@gmail.com"
                className="flex items-center gap-3 text-sm text-[#7C6B8E] hover:text-[#7E22CE] transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#7E22CE]" />
                anjosdajuda@gmail.com
              </a>
              <p className="pt-2 text-xs text-[#7C6B8E]">
                CNPJ: 20.699.396/0001-14
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
