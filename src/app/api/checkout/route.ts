import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const { amount, recurring } = await request.json();

    if (!amount || amount < 10) {
      return NextResponse.json({ error: "Valor mínimo: R$10" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: recurring ? "subscription" : "payment",
      payment_method_types: recurring ? ["card"] : ["card", "pix"],
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: "Doação — Anjos d'Ajuda",
              description: recurring
                ? "Doação mensal recorrente para castração e proteção animal em Arraial d'Ajuda, Bahia."
                : "Doação para castração, resgate e educação animal em Arraial d'Ajuda, Bahia.",
              images: [`${baseUrl}/logo.jpg`],
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
      billing_address_collection: "auto",
      custom_text: {
        submit: {
          message: "Seu apoio financia castração, alimentação e resgate de animais em Arraial d'Ajuda.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Erro ao criar sessão de pagamento." }, { status: 500 });
  }
}
