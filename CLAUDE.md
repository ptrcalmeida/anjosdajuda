@AGENTS.md

# Anjos d'Ajuda — Project Instructions

## Project overview
NGO website for Anjos d'Ajuda, an animal welfare organization in Arraial d'Ajuda, Bahia, Brazil.
Stack: Next.js 16.2.1 + TypeScript + Tailwind CSS v4 + Stripe.

## Color palette (never change without instruction)
- `#1A103C` — dark navy (backgrounds, headings)
- `#7E22CE` — primary purple (CTAs, accents)
- `#C084FC` — light purple (labels on dark backgrounds)
- `#FAF8FF` — off-white (section backgrounds)
- `#F3E8FF` — purple tint (card backgrounds)
- `#E9D5FF` — purple border
- `#7C6B8E` — muted purple (body text)
- `#FF6B4A` — orange (primary CTA buttons)

## Data
- Pet data: `src/data/pets.json` — schema: id, name, species, gender, age (number|null), age_label (string|optional), neutered (boolean|optional, default true), description, photo (string|null), status, featured
- `status` values: `"available"` | `"adopted"` | `"fostered"` — only `"available"` shows in gallery
- `neutered: false` shows "✓ Vacinado · Castração pendente" badge instead of "✓ Castrado · Vacinado"
- `age_label` overrides the age number display (e.g. "2 meses", "filhote")
- ~64 pets currently in pets.json (2026-08-02). Recent additions: Mel (caramel female filhote, named by Claude), Bibi + Munchkin (sisters, 3 months, preto/caramelo/branco, can adopt together or separately). 6 remaining litter puppies (Filhote Fêmea Caramelo/Marrom/Tigrada, Filhote Macho Chocolate/Preto/Lobo) — permanent names TBD by ONG. Earlier additions now adopted: Lobinho, Pérola, Carambola, Coco, Açafrão, Âmbar, Fumaça, Pitanga, Tinta, Noite, Sombra, Flocos, Preta x2. Bento & Faísca → adopted (2026-06-22)
- FeaturedPets shows first 3 pets with `featured: true && status: "available"` in file order — currently Barão, Nala, Rapunzel (Lobinho adopted)
- Filhotes share group photo until individual photos are available — update photo field when new shots come in
- Pet photos served from: `public/pets/`
- Story/ONG photos served from: `public/story/`
- Source/working photos (NOT served): `src/components/pets/` and `src/components/stock images/`
- Portrait/video-frame photos need square-cropping before commit — use PIL: `python3 -c "from PIL import Image; img=Image.open('src.jpg'); img.crop((left,top,right,bottom)).save('public/pets/name.jpg', quality=90)"`

## Key files
- `src/app/page.tsx` — homepage sections order: Hero → FeaturedPets → Stats → MissionPillars → ImpactChain → RescueHighlight → FoodPartnership → Testimonial → FinalCTA
- `src/app/doe/page.tsx` — donation page (Stripe widget + PIX + IBAN)
- `src/app/sobre/page.tsx` — about page. Sections: Lead → Foto → Fundadora → Stats → O que fazemos → Transparência → FEBRACA → 2026 Pattern → CTA
- `src/app/adote/page.tsx` — adoption gallery + adopted pets section (700+ stat)
- `src/app/api/checkout/route.ts` — Stripe Checkout Session API route
- `src/components/ui/DonationWidget.tsx` — client donation widget
- `src/components/layout/Header.tsx` — sticky nav, text logo "ONG Anjos d'Ajuda", includes UrgencyBar
- `src/components/layout/UrgencyBar.tsx` — orange urgency strip above header (fully evergreen — auto-generates month from JS Date, auto-rotates localStorage key by year+month, no manual updates needed)
- `src/components/layout/Footer.tsx` — footer with social links + FEBRACA SELO badge (public/story/febraca-selo.png)
- `src/components/home/FoodPartnership.tsx` — corporate food donation section
- `src/components/home/Testimonial.tsx` — 3-column testimonials (Patricia E. de Almeida · Voluntária Médica Veterinária + 2 anônimos)
- `src/components/pets/AdoptButton.tsx` — opens WhatsApp with pre-filled "Quero adotar [Nome]" message + Google Ads conversion tracking
- `src/components/pets/ExpandableDescription.tsx` — client component for line-clamp-3 + "Ler mais" toggle
- `src/components/pets/PetCard.tsx` — renders pet cards with conditional neutered badge

## Stripe integration
- One-time: card (BR + INTL) — PIX code ready but not yet activated in Stripe Dashboard
- Recurring: card only
- Env vars: `STRIPE_SECRET_KEY` (server), `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (client)
- Success redirect: `/doe/sucesso`

## Donation pricing anchors
- R$50 = 1 vacina antirrábica
- R$190 = 1 castração completa

## ONG mission hierarchy (important for copy)
1. Castração e esterilização — primary focus
2. Educação — primary focus
3. Resgate e tratamento — only when no alternative; NOT the main mission
- NEVER use "Resgatar" as a mission pillar — use "Proteger" instead

## Volunteer page
- `src/app/voluntarie/page.tsx` — 6 role cards + group photo hero
- Group photo: `public/story/voluntarios-grupo.jpg` (source: `src/components/stock images/AnjosDAjuda_LuisaRiekes-88.jpg`)

## Donors (private — NOT in repo)
- Tracked in `~/Documents/anjosdajuda-donors.csv`
- Danilo Santini Hipólito — R$50/mês — MasterCard ••••2783
- Ana Cristina Queiroz Leite — R$250/mês — Visa ••••7421
- Both need to migrate to new payment platform eventually

## Stripe integration details
- One-time: `payment_method_types: ["card"]` — PIX requires activation in Stripe Dashboard (contact support)
- Recurring: `payment_method_types: ["card"]` only (PIX doesn't support subscriptions)
- Base URL derived from `request.url` (not env var) to avoid invalid URL errors
- Google Pay / Apple Pay: enabled automatically by Stripe when card wallets are on in Dashboard

## Google Ads (Ad Grants)
- Ads tag: AW-18054286952 — installed in `src/app/layout.tsx`
- Analytics 4: G-0DLPGC6C0C — installed in `src/app/layout.tsx`
- Both configured in the same gtag init script block
- Conversion: AW-18054286952/dFj0CLWKipMcEOic-qBD
  - Fires on `/doe/sucesso` (donation completed)
  - Fires on "Quero Adotar" click via `AdoptButton.tsx`
- First campaign live: Doação targeting `/doe`
- Budget: R$329/day (Ad Grants limit)

## SEO implemented
- Schema.org: NGO + nonprofitStatus + areaServed + DonateAction (/doe) + FAQPage (/adote)
- Physical address removed from all pages and schema — only city/state shown
- sitemap.ts + robots.ts in place
- Hero H1 has sr-only location keyword appended
- /adote H1: "Adote um cão ou gato em Arraial d'Ajuda"
- Keywords for food/ração corporate partnerships in layout.tsx

## Favicon
- `src/app/icon.svg` — paw print, navy background + light purple (#C084FC)

## Deployment
- GitHub → Vercel (automatic deploys on push to main)
- Live at: anjosdajuda.org (also anjosdajuda.vercel.app)
- Stripe env vars set in Vercel dashboard (STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
