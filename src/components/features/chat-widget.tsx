"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

type Message = { role: "user" | "assistant"; content: string }

const GREETING: Message = {
  role: "assistant",
  content: "Hi! I'm the WiiN assistant. Ask me about our supplement pouches, the WiiN Daily Complex™, or anything else.",
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState("")
  const [sending, setSending] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, isOpen])

  const send = async () => {
    const trimmed = input.trim()
    if (!trimmed || sending) return

    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }]
    setMessages(nextMessages)
    setInput("")
    setSending(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        // Drop the canned greeting before sending to the model.
        body: JSON.stringify({ messages: nextMessages.filter((m) => m !== GREETING) }),
      })
      const data = await res.json()
      const reply =
        typeof data?.reply === "string"
          ? data.reply
          : data?.error ?? "Something went wrong. Please try again."
      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I couldn't reach the server. Please try again." },
      ])
    } finally {
      setSending(false)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      void send()
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-power-gradient text-white shadow-lg shadow-orange-500/30 transition-transform hover:scale-105 active:scale-95"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed bottom-24 right-5 z-[70] flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden border-3 border-foreground bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="bg-power-gradient px-4 py-3 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em]">WiiN Assistant</p>
              <p className="text-[10px] uppercase tracking-wide text-white/85">Ask us anything</p>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "border border-foreground/15 bg-card text-foreground"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {sending && (
                <div className="flex justify-start">
                  <div className="border border-foreground/15 bg-card px-3 py-2 text-sm text-muted-foreground">
                    …
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-end gap-2 border-t border-foreground/15 p-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Type a message…"
                className="max-h-24 flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => void send()}
                disabled={sending || !input.trim()}
                aria-label="Send message"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
