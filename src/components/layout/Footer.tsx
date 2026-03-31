import Link from "next/link";
import { Heart, MapPin, Phone, Mail } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1A103C] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-black text-xl mb-3">
              <Heart className="w-5 h-5 text-[#FF6B4A] fill-[#FF6B4A]" />
              Anjos d&apos;Ajuda
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Salvando Vidas, Uma Pata de Cada Vez. Resgatamos, esterilizamos e encontramos lares para animais abandonados em Arraial d&apos;Ajuda, Bahia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/anjosdajuda_arraial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 hover:text-[#C084FC] transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/anjosdajudaba/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/50 hover:text-[#C084FC] transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@anjosdajuda7134"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/50 hover:text-[#C084FC] transition-colors"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Navegação</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/sobre", label: "Quem Somos" },
                { href: "/adote", label: "Adote um Pet" },
                { href: "/doe", label: "Faça uma Doação" },
                { href: "/voluntarie", label: "Voluntarie-se" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Contato</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#C084FC]" />
                <span>Rua Mucugê, 333. Shopping d&apos;Ajuda, Arraial d&apos;Ajuda, Bahia 45816-000</span>
              </div>
              <a href="tel:+5573999214880" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-[#C084FC]" />
                +55 73 99921-4880
              </a>
              <a href="mailto:anjosdajuda@gmail.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0 text-[#C084FC]" />
                anjosdajuda@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>CNPJ: 20.699.396/0001-14</p>
          <p>© {new Date().getFullYear()} Anjos d&apos;Ajuda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
