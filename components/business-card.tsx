import Link from "next/link"
import Image from "next/image"

interface BusinessCardProps {
  title: string
  description: string
  buttonText: string
  href: string
}

export function BusinessCard({ title, description, buttonText, href }: BusinessCardProps) {
  const isExternal = typeof href === "string" && href.startsWith("http")
  const isRealEstate = title.toLowerCase().includes("reyna") || title.toLowerCase().includes("inmobiliaria")
  const isIntroData = title.toLowerCase().includes("introdata")

  return (
    <div className="group flex flex-col rounded-lg border border-corporate-border bg-corporate-card p-8 transition-colors hover:border-corporate-accent">
      {/* Card header: plain title (no logo) to match original squares */}
      <div className="w-full mb-4">
        <div className="w-full border-b border-corporate-border pb-6">
          <div className="flex justify-center">
            <div className="py-6">
              <h3 className="text-2xl md:text-3xl font-bold text-corporate-text text-center">{title}</h3>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-6 flex-grow text-base text-corporate-secondary md:text-lg text-center opacity-95">{description}</p>

      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex items-center justify-center rounded-md bg-corporate-text px-6 py-3 text-base font-semibold text-corporate-bg transition-transform duration-150 transform hover:translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-corporate-accent focus:ring-offset-2 focus:ring-offset-corporate-bg"
      >
        {buttonText}
      </Link>
    </div>
  )
}
 
