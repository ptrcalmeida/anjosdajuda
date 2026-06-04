import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo — Cara, resgatado das ruas de Arraial d'Ajuda */}
      <Image
        src="/pets/cara.jpg"
        alt="Cara, um dos animais resgatados pela Anjos d'Ajuda"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C084FC] mb-6">
          Arraial d&apos;Ajuda, Bahia · Desde 2013
        </p>

        <h1
          className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
        >
          Castrar. Educar.<br />
          <span className="text-[#C084FC]">Proteger.</span>
          <span className="sr-only"> — ONG de proteção animal em Arraial d&apos;Ajuda, Bahia</span>
        </h1>

        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
        >
          Há 13 anos fazemos o trabalho que o poder público deveria fazer —
          sem receber um centavo para isso. Cada mutirão de castração, cada
          animal resgatado, cada criança educada depende de você.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link
            href="/doe"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-bold bg-[#FF6B4A] text-white hover:bg-[#E55530] transition-colors"
          >
            Doe Agora
          </Link>
          <Link
            href="/adote"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-[#1A103C] transition-colors"
          >
            Adote um Pet
          </Link>
        </div>
        <Link
          href="/adote"
          className="text-sm text-white/60 hover:text-white transition-colors underline underline-offset-4"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
        >
          Ou descubra quem está esperando →
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-8 bg-white animate-pulse" />
      </div>
    </section>
  );
}
