import { NextResponse } from "next/server";

type ChatRequestPayload = {
  message?: string;
  sessionId?: string;
};

const CHAT_ENDPOINT =
  "https://caritive-corrosively-natalia.ngrok-free.dev/api/portfolio/chat";

function extractChatAnswer(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const candidateKeys = ["answer", "message", "output", "response"];

  for (const key of candidateKeys) {
    const value = (payload as Record<string, unknown>)[key];
    if (typeof value === "string" && value.trim()) {
      return value;
    }
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequestPayload;
    const { message, sessionId } = body;

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: "Missing required chat fields." },
        { status: 400 }
      );
    }

    const upstreamResponse = await fetch(CHAT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({ message, sessionId }),
    });

    const payload = (await upstreamResponse.json().catch(() => null)) as
      | Record<string, unknown>
      | null;

    if (!upstreamResponse.ok) {
      const error =
        (payload?.detail as string | undefined) ||
        (payload?.error as string | undefined) ||
        "The chat service rejected the request.";

      return NextResponse.json({ error }, { status: upstreamResponse.status });
    }

    const answer = extractChatAnswer(payload);

    if (answer) {
      return NextResponse.json({ answer });
    }

    const error =
      (payload?.detail as string | undefined) ||
      "The chat service returned an empty response.";

    return NextResponse.json({ error }, { status: 502 });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Unexpected error while sending the chat message." },
      { status: 500 }
    );
  }
}
