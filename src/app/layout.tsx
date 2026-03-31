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
    "ONG sem fins lucrativos em Arraial d'Ajuda (BA). Desde 2013 castramos cães e gatos, resgatamos animais abandonados e promovemos adoção responsável no Sul da Bahia. Doe ou adote.",
  metadataBase: new URL("https://anjosdajuda.org"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Anjos d'Ajuda",
    images: [
      {
        url: "/story/sobre-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Voluntário da Anjos d'Ajuda rodeado por cães resgatados em Arraial d'Ajuda, Bahia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/story/sobre-hero.jpg"],
  },
  keywords: [
    "ONG animais Arraial d'Ajuda",
    "castração de cães e gatos Bahia",
    "adoção de animais Arraial d'Ajuda",
    "animais abandonados Sul da Bahia",
    "ONG sem fins lucrativos Bahia",
    "resgate animal Arraial d'Ajuda",
    "adoção responsável Bahia",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Anjos d'Ajuda",
  "alternateName": "Anjos da Ajuda",
  "url": "https://anjosdajuda.org",
  "logo": "https://anjosdajuda.org/logo.jpg",
  "foundingDate": "2013",
  "description": "ONG sem fins lucrativos fundada em 2013 em Arraial d'Ajuda, Bahia. Castração, resgate e adoção responsável de cães e gatos no Sul da Bahia.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Mucugê, 333, Shopping d'Ajuda",
    "addressLocality": "Arraial d'Ajuda",
    "addressRegion": "BA",
    "postalCode": "45816-000",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-73-99921-4880",
    "email": "anjosdajuda@gmail.com",
    "contactType": "customer service",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://www.instagram.com/anjosdajuda_arraial/",
    "https://www.facebook.com/anjosdajudaba/",
    "https://www.youtube.com/@anjosdajuda7134"
  ],
  "taxID": "20.699.396/0001-14",
  "nonprofitStatus": "Associação",
  "areaServed": {
    "@type": "City",
    "name": "Arraial d'Ajuda",
    "containedInPlace": {
      "@type": "State",
      "name": "Bahia",
      "containedInPlace": { "@type": "Country", "name": "Brazil" }
    }
  },
  "knowsAbout": [
    "castração de animais",
    "esterilização de cães e gatos",
    "adoção responsável",
    "bem-estar animal",
    "saúde pública veterinária",
    "controle populacional de cães e gatos",
    "resgate de animais abandonados",
    "educação para guarda responsável"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8FF] text-[#2D1A4A] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
