export default function Testimonial() {
  return (
    <section className="bg-[#FAF8FF] py-20 px-4 border-y border-[#E9D5FF]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7E22CE] mb-8">
          Quem conhece, apoia
        </p>
        <blockquote>
          <p className="text-xl md:text-2xl text-[#1A103C] font-semibold leading-relaxed mb-8">
            &ldquo;Anjos d&apos;Ajuda é uma organização séria, que existe e persiste
            graças à força incansável de Jeannette Eggengoor e de voluntários que
            não desistem da luta pelos animais — mesmo diante da negligência e do
            descaso que ainda marcam nosso país. Arraial se torna mais humana por
            causa do trabalho da Anjos d&apos;Ajuda.&rdquo;
          </p>
          <footer>
            <p className="text-sm font-bold text-[#1A103C]">Patricia E. de Almeida</p>
            <p className="text-xs text-[#7C6B8E] mt-1">Moradora de Arraial d&apos;Ajuda</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
