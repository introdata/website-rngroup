import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050A14] to-[#0A1529] text-white">
      {/* Hero Section - Centered, Full Viewport */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-7xl">
          {/* Wordmark */}
          <div className="mb-6 text-center">
            <h1 className="inline-flex items-baseline text-6xl font-black tracking-tight md:text-7xl lg:text-8xl">
              <span className="text-white">RN</span>
              <span className="ml-2 bg-gradient-to-b from-[#73BDFC] to-[#2A6DB5] bg-clip-text text-transparent">
                GROUP
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mb-4 text-center text-xl font-normal tracking-wide text-white/90 md:text-2xl">
            Real Estate & Technology Solutions
          </p>

          {/* Accent Phrase - Italic */}
          <p className="mb-16 text-center font-serif text-lg italic text-white/70 md:text-xl">
            ¿Qué tipo de solución estás buscando?
          </p>

          {/* Router Section - Two Premium Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card A - Real Estate */}
            <Link
              href="https://www.reynanovillo.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#14284A] to-[#0F1E38] p-8 shadow-[0_0_40px_rgba(42,109,181,0.15)] transition-all duration-500 ease-out hover:translate-y-[-6px] hover:shadow-[0_0_70px_rgba(42,109,181,0.35)] md:p-10"
            >
              <div className="flex min-h-[280px] flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-16 w-full justify-center md:h-20">
                    <Image
                      src="/logos/reyna-novillo-logo.png"
                      alt="Reyna Novillo Inmobiliaria"
                      width={300}
                      height={90}
                      className="h-full w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <h3 className="mb-2 text-center text-xl font-bold text-white md:text-2xl">
                    ¿Buscás una gestión inmobiliaria profesional?
                  </h3>
                  <p className="mb-8 text-center text-sm text-white/70 md:text-base">
                    Gestión integral · Alquileres · Administración · Ventas
                  </p>
                </div>

                {/* Hover Reveal Action */}
                <div className="transform translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="flex justify-center items-center text-base font-normal tracking-wide text-white md:text-lg">
                    Visitar Sitio Web
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>

            {/* Card B - Technology */}
            <Link
              href="https://www.introdatabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#14284A] to-[#0F1E38] p-8 shadow-[0_0_40px_rgba(42,109,181,0.15)] transition-all duration-500 ease-out hover:translate-y-[-6px] hover:shadow-[0_0_70px_rgba(42,109,181,0.35)] md:p-10"
            >
              <div className="flex min-h-[280px] flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-16 w-full justify-center md:h-20">
                    <Image
                      src="/logos/introdata-logo.png"
                      alt="IntroData BS"
                      width={300}
                      height={90}
                      className="h-full w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <h3 className="mb-2 text-center text-xl font-bold text-white md:text-2xl">
                    ¿Querés optimizar procesos y tomar mejores decisiones?
                  </h3>
                  <p className="mb-8 text-center text-sm text-white/70 md:text-base">
                    Automatización · Datos · IA aplicada · Escalabilidad
                  </p>
                </div>

                {/* Hover Reveal Action */}
                <div className="transform translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="flex justify-center items-center text-base font-normal tracking-wide text-white md:text-lg">
                    Visitar Sitio Web
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
