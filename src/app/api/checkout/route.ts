import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      return NextResponse.json({ error: "STRIPE_SECRET_KEY not set" }, { status: 500 });
    }
    const stripe = new Stripe(key.trim(), { maxNetworkRetries: 0, timeout: 8000 });
    const { amount, recurring } = await request.json();

    if (!amount || amount < 10) {
      return NextResponse.json({ error: "Valor mínimo: R$10" }, { status: 400 });
    }

    const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const baseUrl = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

    const session = await stripe.checkout.sessions.create({
      mode: recurring ? "subscription" : "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: "Doação — Anjos d'Ajuda",
              description: recurring
                ? "Doação mensal recorrente para castração e proteção animal em Arraial d'Ajuda, Bahia."
                : "Doação para castração, resgate e educação animal em Arraial d'Ajuda, Bahia.",
            },
            unit_amount: Math.round(amount * 100),
            ...(recurring && { recurring: { interval: "month" } }),
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/doe/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/doe`,
      locale: "pt-BR",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro desconhecido";
    const type = (error as { type?: string })?.type ?? "unknown";
    console.error("Stripe checkout error:", type, message);
    return NextResponse.json({ error: message, type }, { status: 500 });
  }
}
