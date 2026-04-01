"use client";

import Link from "next/link";

declare function gtag_report_conversion(url?: string): boolean;

export function AdoptButton({ petId }: { petId: string }) {
  const href = `/contato?adotar=${petId}`;
  return (
    <Link
      href={href}
      onClick={() => {
        if (typeof gtag_report_conversion !== "undefined") {
          gtag_report_conversion(href);
        }
      }}
      className="inline-flex items-center justify-center w-full rounded-lg px-4 py-2.5 text-sm font-semibold border-2 border-[#7E22CE] text-[#7E22CE] hover:bg-[#F3E8FF] transition-colors"
    >
      Quero Adotar
    </Link>
  );
}
