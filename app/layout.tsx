import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site-config"
// import { ChatWidget } from "@/components/features/chat-widget"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-montserrat",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
        {/* <ChatWidget /> */}
        <Analytics />
      </body>
    </html>
  )
}
