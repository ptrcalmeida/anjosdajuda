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
- Pet data: `src/data/pets.json` — schema: id, name, species, gender, age (number|null), description, photo (string|null), status, featured
- Pet photos served from: `public/pets/`
- Story/ONG photos served from: `public/story/`
- Source/working photos (NOT served): `src/components/pets/` and `src/components/stock images/`

## Key files
- `src/app/page.tsx` — homepage sections order: Hero → FeaturedPets → Stats → MissionPillars → ImpactChain → RescueHighlight → FoodPartnership → Testimonial → FinalCTA
- `src/app/doe/page.tsx` — donation page (Stripe widget + PIX + IBAN)
- `src/app/sobre/page.tsx` — about page
- `src/app/adote/page.tsx` — adoption gallery
- `src/app/api/checkout/route.ts` — Stripe Checkout Session API route
- `src/components/ui/DonationWidget.tsx` — client donation widget
- `src/components/layout/Header.tsx` — sticky nav, text logo "ONG Anjos d'Ajuda" (no image)
- `src/components/layout/Footer.tsx` — footer with social links
- `src/components/home/FoodPartnership.tsx` — corporate food donation section
- `src/components/pets/AdoptButton.tsx` — client button with Google Ads conversion tracking

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
