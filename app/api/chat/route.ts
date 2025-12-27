import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()

        // Webhook URL from environment variables
        const WEBHOOK_URL = process.env.CHAT_WEBHOOK_URL

        if (!WEBHOOK_URL) {
            console.error("CHAT_WEBHOOK_URL is not defined")
            return NextResponse.json({ error: "Configuration error" }, { status: 500 })
        }

        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error("n8n error response:", errorText)
            return NextResponse.json({ error: "Error from n8n server" }, { status: response.status })
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error("Proxy error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
