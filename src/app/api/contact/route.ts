import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const BACKEND_URL = (
  process.env.BACKEND_URL ||
  "https://caritive-corrosively-natalia.ngrok-free.dev"
).replace(/\/+$/, "");

const CONTACT_ENDPOINT = `${BACKEND_URL}/api/portfolio/formulario-web`;

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

    const upstreamResponse = await fetch(
      CONTACT_ENDPOINT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({
          nombre: name,
          correo: email,
          mensaje: message,
        }),
      }
    );

    if (!upstreamResponse.ok) {
      const payload = (await upstreamResponse.json().catch(() => null)) as
        | Record<string, unknown>
        | null;

      return NextResponse.json(
        {
          error:
            (payload?.detail as string | undefined) ||
            (payload?.error as string | undefined) ||
            "The contact service rejected the request.",
        },
        { status: upstreamResponse.status }
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
