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
      {/* Card header: full-width area with subtle bottom divider to anchor the logo */}
      <div className="w-full mb-4">
        <div className="w-full border-b border-corporate-border pb-6">
          <div className="flex justify-center">
            {isRealEstate && (
              <div className="h-48 md:h-72 flex items-center">
                <Image
                  src="/logos/real-estate-logo.png"
                  alt="Reyna Novillo Inmobiliaria logo"
                  className="h-full w-auto mx-auto"
                  width={280}
                  height={280}
                />
                <span className="sr-only">{title}</span>
              </div>
            )}
            {isIntroData && (
              <div className="h-48 md:h-72 flex items-center">
                <Image
                  src="/logos/introdata-logo.png"
                  alt="IntroData BS logo"
                  className="h-full w-auto mx-auto"
                  width={280}
                  height={280}
                />
                <span className="sr-only">{title}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="mb-6 flex-grow text-base text-corporate-secondary md:text-lg text-center">{description}</p>

      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-flex items-center justify-center rounded-md bg-corporate-text px-6 py-3 text-base font-semibold text-corporate-bg transition-all hover:bg-corporate-accent focus:outline-none focus:ring-2 focus:ring-corporate-accent focus:ring-offset-2 focus:ring-offset-corporate-bg"
      >
        {buttonText}
      </Link>
    </div>
  )
}
 
