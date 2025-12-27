"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! 👋 Soy AIden de RN GROUP.",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const WEBHOOK_URL = "/api/chat"

  useEffect(() => {
    // Generate or retrieve session ID
    let savedId = localStorage.getItem("rn_chat_session_id")
    if (!savedId) {
      savedId = `session_${Math.random().toString(36).substring(2, 11)}`
      localStorage.setItem("rn_chat_session_id", savedId)
    }
    setSessionId(savedId)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatInput: userMessage.text,
          sessionId: sessionId,
        }),
      })

      if (!response.ok) throw new Error("Network response was not ok")

      const data = await response.json()

      // n8n often returns an array of responses
      let botResponse = ""
      if (Array.isArray(data)) {
        botResponse = data[0].output || data[0].text || data[0].message
      } else {
        botResponse = data.output || data.text || data.message || "Lo siento, no pude procesar tu mensaje."
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    } catch (err) {
      console.error("Chat Error:", err)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Lo siento, hubo un error de conexión con AIden. Por favor intenta más tarde.",
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Botón Flotante (Launcher) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#73BDFC] to-[#2A6DB5] text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
        >
          <MessageCircle className="h-8 w-8 transition-transform group-hover:rotate-12" />
          <span className="absolute right-0 top-0 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white/10"></span>
          </span>
          <span className="absolute -top-12 right-0 hidden whitespace-nowrap rounded-lg bg-[#0f172a] px-3 py-1 text-sm text-white shadow-lg group-hover:block">
            ¿Cómo podemos ayudarte?
          </span>
        </button>
      )}

      {/* Ventana de Chat */}
      {isOpen && (
        <div className="flex bg-[#0A1529] h-[600px] w-full max-w-[400px] flex-col rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-10 duration-300 md:w-[400px] border border-white/10">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#050A14] px-6 py-5 rounded-t-[2rem] border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#73BDFC] to-[#2A6DB5]">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">AIden</h3>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-white/60 font-medium">Asistente RN GROUP</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-white/40 hover:bg-white/5 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Lista de Mensajes */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex w-full ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-[1.2rem] px-4 py-3 text-sm leading-relaxed shadow-sm ${message.sender === "user"
                    ? "bg-gradient-to-br from-[#73BDFC] to-[#2A6DB5] text-white rounded-tr-none"
                    : "bg-[#1e293b] text-white/90 rounded-tl-none border border-white/5"
                    }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1e293b] rounded-[1.2rem] rounded-tl-none px-4 py-3 border border-white/5">
                  <div className="flex gap-1.5 px-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-[#050A14] p-4 rounded-b-[2rem] border-t border-white/5">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe un mensaje..."
                className="w-full bg-[#1e293b]/50 text-white placeholder:text-white/30 rounded-2xl px-5 py-3.5 pr-14 focus:outline-none focus:ring-2 focus:ring-[#2A6DB5]/50 transition-all border border-white/5"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 p-2.5 rounded-xl bg-gradient-to-br from-[#73BDFC] to-[#2A6DB5] text-white shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-3 text-center text-[10px] text-white/20 uppercase tracking-widest font-bold">
              IntroData • AI Solutions
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
