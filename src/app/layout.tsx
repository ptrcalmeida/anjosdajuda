import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anjos d'Ajuda — Proteção e Adoção de Animais em Arraial d'Ajuda",
  description:
    "Anjos da Ajuda resgata, esteriliza e encontra lares para animais abandonados em Arraial d'Ajuda, Bahia. Doe, adote ou voluntarie-se.",
  metadataBase: new URL("https://anjosdajuda.org"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Anjos d'Ajuda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#FAF8FF] text-[#2D1A4A] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
