import { NextRequest } from "next/server"

const SYSTEM_PROMPT = `You are the WiiN Daily support assistant — friendly, concise, and knowledgeable.

About WiiN:
- WiiN makes doctor-designed wellness SUPPLEMENT pouches (not a food or drink). Made in California.
- Every pouch carries the WiiN Daily Complex™: systemic amino acids formulated to help reduce inflammation, plus NAD+, L-Theanine, L-Tyrosine, and D-Ribose.
- The science centers on the mitochondria (the powerhouse of the cell): NAD+ and D-Ribose support ATP production for clean energy and clear focus — full-body, systemic wellness.
- Product lines: Nicotine pouches, the WiiN Daily Complex™ line, and Caffeine pouches (nicotine-free).
- Positioning: "Organic Clean Power" — Stronger, Healthier, and Now Enhanced Supplements. A novel product, first to market.

Rules:
- Keep answers short (1-3 sentences) unless asked for detail.
- Nicotine products contain nicotine, which is addictive, and are for adults 21+ only. Mention this when relevant.
- Do NOT give medical advice or diagnoses; suggest consulting a healthcare professional for health concerns.
- For orders, partnerships, or anything you cannot answer, point users to the Contact page (/contact).
- Never invent prices, medical claims, or guarantees.`

type ChatMessage = { role: "user" | "assistant"; content: string }

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return Response.json(
      { error: "The chat assistant isn't configured yet. Add OPENAI_API_KEY to enable it." },
      { status: 503 },
    )
  }

  let body: { messages?: unknown }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 })
  }

  const raw = Array.isArray(body.messages) ? body.messages : []
  const messages: ChatMessage[] = raw
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === "object" &&
        (m as ChatMessage).role !== undefined &&
        ((m as ChatMessage).role === "user" || (m as ChatMessage).role === "assistant") &&
        typeof (m as ChatMessage).content === "string",
    )
    .slice(-20)

  if (messages.length === 0) {
    return Response.json({ error: "No messages provided." }, { status: 400 })
  }

  try {
    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        max_tokens: 600,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    })

    if (!upstream.ok) {
      return Response.json(
        { error: "The assistant is temporarily unavailable. Please try again." },
        { status: 502 },
      )
    }

    const data = await upstream.json()
    const reply: string =
      data?.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response just now."
    return Response.json({ reply })
  } catch {
    return Response.json({ error: "Failed to reach the assistant." }, { status: 502 })
  }
}
