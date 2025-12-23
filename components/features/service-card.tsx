import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
    href: string
    logoSrc: string
    logoAlt: string
    title: string
    description: string
}

export function ServiceCard({
    href,
    logoSrc,
    logoAlt,
    title,
    description,
}: ServiceCardProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#14284A] to-[#0F1E38] p-8 shadow-[0_0_40px_rgba(42,109,181,0.15)] transition-all duration-500 ease-out hover:translate-y-[-6px] hover:shadow-[0_0_70px_rgba(42,109,181,0.35)] md:p-10"
        >
            <div className="flex min-h-[280px] flex-col justify-between">
                <div>
                    <div className="mb-6 flex h-16 w-full justify-center md:h-20">
                        <Image
                            src={logoSrc}
                            alt={logoAlt}
                            width={300}
                            height={90}
                            className="h-full w-auto object-contain brightness-0 invert"
                        />
                    </div>
                    <h3 className="mb-2 text-center text-xl font-bold text-white md:text-2xl">
                        {title}
                    </h3>
                    <p className="mb-8 text-center text-sm text-white/70 md:text-base">
                        {description}
                    </p>
                </div>

                {/* Hover Reveal Action */}
                <div className="mt-4">
                    <p className="flex justify-center items-center text-base font-normal tracking-wide text-white md:text-lg">
                        Visitar Sitio Web
                        <svg
                            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </p>
                </div>
            </div>
        </Link>
    )
}
