"use client";

declare function gtag_report_conversion(url?: string): boolean;

export function AdoptButton({ petId, petName }: { petId: string; petName: string }) {
  const message = `Olá! Quero adotar ${petName} da Anjos d'Ajuda 🐾 https://anjosdajuda.org/adote`;
  const href = `https://wa.me/5573999214880?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof gtag_report_conversion !== "undefined") {
          gtag_report_conversion(href);
        }
      }}
      className="inline-flex items-center justify-center w-full rounded-lg px-4 py-2.5 text-sm font-semibold border-2 border-[#7E22CE] text-[#7E22CE] hover:bg-[#F3E8FF] transition-colors"
    >
      Quero Adotar
    </a>
  );
}
