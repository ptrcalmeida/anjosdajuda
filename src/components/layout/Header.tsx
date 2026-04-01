"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/sobre", label: "Quem Somos" },
  { href: "/adote", label: "Adote" },
  { href: "/voluntarie", label: "Voluntarie-se" },
  { href: "mailto:anjosdajuda@gmail.com", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E9D5FF]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-sm font-black text-[#1A103C] tracking-tight hover:text-[#7E22CE] transition-colors">
          ONG Anjos d&apos;Ajuda
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#7C6B8E] hover:text-[#7E22CE] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/doe"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm bg-[#FF6B4A] text-white font-semibold hover:bg-[#E55530] transition-colors"
          >
            Doe Agora
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-[#2D1A4A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E9D5FF] bg-white px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#2D1A4A] hover:text-[#7E22CE]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/doe"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-[#FF6B4A] text-white font-semibold text-base hover:bg-[#E55530] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Doe Agora
          </Link>
        </div>
      )}
    </header>
  );
}
