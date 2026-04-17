import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required contact fields." },
        { status: 400 }
      );
    }

    const endpoint = process.env.CONTACT_WEBHOOK_URL;

    if (!endpoint) {
      return NextResponse.json(
        {
          error:
            "Contact service is not configured yet. Set CONTACT_WEBHOOK_URL on the server.",
        },
        { status: 503 }
      );
    }

    const upstreamResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: name,
        correo: email,
        mensaje: message,
      }),
    });

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        { error: "The contact service rejected the request." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unexpected error while sending the message." },
      { status: 500 }
    );
  }
}
