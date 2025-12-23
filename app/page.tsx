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
            Where do you want to go?
          </p>

          {/* Router Section - Two Premium Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card A - Real Estate */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#14284A] to-[#0F1E38] p-8 shadow-[0_0_40px_rgba(42,109,181,0.15)] transition-all duration-500 ease-out hover:translate-y-[-6px] hover:shadow-[0_0_70px_rgba(42,109,181,0.35)] md:p-10">
              <div className="flex min-h-[280px] flex-col justify-between">
                <div>
                  <div className="mb-4 h-12 w-auto md:h-14">
                    <Image
                      src="/logos/reyna-novillo-logo.png"
                      alt="Reyna Novillo Inmobiliaria"
                      width={300}
                      height={80}
                      className="h-full w-auto object-contain object-left brightness-0 invert"
                    />
                  </div>
                  <p className="mb-8 text-base text-white/70 md:text-lg">Rentals · Property Management · Real Estate</p>
                </div>

                <Link
                  href="https://www.reynanovillo.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-5 text-base font-extrabold text-[#0A1529] shadow-[0_0_20px_rgba(42,109,181,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-500 ease-out hover:brightness-110 hover:shadow-[0_0_35px_rgba(42,109,181,0.6),inset_0_1px_0_rgba(255,255,255,0.4)] group-hover:shadow-[0_0_30px_rgba(42,109,181,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] md:text-lg"
                >
                  Go to Inmobiliaria
                </Link>
              </div>
            </div>

            {/* Card B - Technology */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#14284A] to-[#0F1E38] p-8 shadow-[0_0_40px_rgba(42,109,181,0.15)] transition-all duration-500 ease-out hover:translate-y-[-6px] hover:shadow-[0_0_70px_rgba(42,109,181,0.35)] md:p-10">
              <div className="flex min-h-[280px] flex-col justify-between">
                <div>
                  <div className="mb-4 h-10 w-auto md:h-12">
                    <Image
                      src="/logos/introdata-logo.png"
                      alt="IntroData BS"
                      width={300}
                      height={80}
                      className="h-full w-auto object-contain object-left brightness-0 invert"
                    />
                  </div>
                  <p className="mb-8 text-base text-white/70 md:text-lg">Automation · Data · Artificial Intelligence</p>
                </div>

                <Link
                  href="https://www.introdatabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-5 text-base font-extrabold text-[#0A1529] shadow-[0_0_20px_rgba(42,109,181,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-500 ease-out hover:brightness-110 hover:shadow-[0_0_35px_rgba(42,109,181,0.6),inset_0_1px_0_rgba(255,255,255,0.4)] group-hover:shadow-[0_0_30px_rgba(42,109,181,0.5),inset_0_1px_0_rgba(255,255,255,0.4)] md:text-lg"
                >
                  Go to IntroData
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
