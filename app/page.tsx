import { ServiceCard } from "@/components/service-card"

export default function HomePage() {
  const services = [
    {
      href: "https://www.reynanovillo.es/",
      logoSrc: "/logos/reyna-novillo-logo.png",
      logoAlt: "Reyna Novillo Inmobiliaria",
      title: "¿Buscás una gestión inmobiliaria profesional?",
      description: "Gestión integral · Alquileres · Administración · Ventas",
    },
    {
      href: "https://www.introdatabs.com/",
      logoSrc: "/logos/introdata-logo.png",
      logoAlt: "IntroData BS",
      title: "¿Querés optimizar procesos y tomar mejores decisiones?",
      description: "Automatización · Datos · IA aplicada · Escalabilidad",
    },
  ]

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
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                href={service.href}
                logoSrc={service.logoSrc}
                logoAlt={service.logoAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
