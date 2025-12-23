export const siteConfig = {
    name: "RN GROUP",
    description: "Real Estate & Technology Solutions",
    url: "https://rn-group.com", // Placeholder, replace with actual if known
    ogImage: "https://rn-group.com/og.jpg", // Placeholder
    links: {
        twitter: "https://twitter.com/rngroup", // Placeholder
        github: "https://github.com/rngroup", // Placeholder
    },
    services: [
        {
            title: "¿Buscás una gestión inmobiliaria profesional?",
            description: "Gestión integral · Alquileres · Administración · Ventas",
            href: "https://www.reynanovillo.es/",
            logoSrc: "/logos/reyna-novillo-logo.png",
            logoAlt: "Reyna Novillo Inmobiliaria",
        },
        {
            title: "¿Querés optimizar procesos y tomar mejores decisiones?",
            description: "Automatización · Datos · IA aplicada · Escalabilidad",
            href: "https://www.introdatabs.com/",
            logoSrc: "/logos/introdata-logo.png",
            logoAlt: "IntroData BS",
        },
    ],
}

export type SiteConfig = typeof siteConfig
