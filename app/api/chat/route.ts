import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()

        // Webhook URL from the user
        const WEBHOOK_URL = "https://automation.introdatabs.com/webhook-test/ed5e1db5-a3ac-4b7e-9fc1-98adc7f83ec2"

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
