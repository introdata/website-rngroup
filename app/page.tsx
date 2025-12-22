import { BusinessCard } from "@/components/business-card"

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-corporate-bg px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-3 text-4xl font-bold uppercase tracking-tight text-corporate-text md:text-5xl lg:text-6xl">
            RN GROUP
          </h1>
          <p className="mb-6 text-lg text-corporate-text md:text-xl">Real Estate & Technology Solutions</p>
          <p className="text-base text-corporate-secondary md:text-lg">Where do you want to go?</p>
        </div>

        {/* Split Navigation */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <BusinessCard
            title="Reyna Novillo Inmobiliaria"
            description="Rentals · Property Management · Real Estate"
            buttonText="Go to Inmobiliaria"
            href="https://www.reynanovillo.es/"
          />
          <BusinessCard
            title="IntroData BS"
            description="Automation · Data · Artificial Intelligence"
            buttonText="Go to IntroData"
            href="https://www.introdatabs.com/"
          />
        </div>

        {/* Optional minimal footer */}
        <footer className="mt-16 text-center md:mt-20">
          <p className="text-sm text-corporate-secondary">RN Group</p>
        </footer>
      </div>
    </main>
  )
}
