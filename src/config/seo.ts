export const seoConfig = {
  site: {
    name: "VRLY",
    url: "https://vrly.de",
    defaultLanguage: "de-DE",
    title: "VRLY - KI & Workflows für Psychotherapeuten",
    titleTemplate: "%s | VRLY",
    description:
      "Spezialisierte KI-gestützte Workflow-Automatisierung und DSGVO-konforme Digitalisierungslösungen exklusiv für Psychotherapeut:Innen in Hannover. Mehr Zeit für Ihre Patienten durch intelligente Automatisierung.",
    slogan: "VRLY automatisiert Effizienz mit Künstlicher Intelligenz",
    author: "VRLY - Phichayut 'Florentin' Sakwiset",
    image: "/og-image-default.jpg", // Default OG image
    keywords: [
      "Psychotherapeut Hannover",
      "KI Automatisierung Psychotherapie",
      "DSGVO Praxissoftware",
      "Workflow Automation Therapeuten",
      "Digitalisierung Psychotherapiepraxis",
      "AI Praxisverwaltung",
      "Patientenanfragen Automatisierung",
      "Praxiseffizienz Software",
      "IT Lösungen Psychotherapeuten",
      "Cloudflare AI Hannover",
    ],
  },
  social: {
    twitter: "@vrly_de", // Update when you have a Twitter handle
    linkedin: "vrly-hannover",
    github: "vrly-de",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: [],
    images: [
      {
        url: "/og-image-default.jpg",
        width: 1200,
        height: 630,
        alt: "VRLY - KI & Workflows für Psychotherapeuten in Hannover",
        type: "image/jpeg",
      },
    ],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VRLY",
    url: "https://vrly.de",
    logo: "https://vrly.de/logo.svg",
    description:
      "Spezialisierte KI-gestützte Workflow-Automatisierung für Psychotherapeut:Innen in Hannover",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hannover",
      addressRegion: "Niedersachsen",
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "City",
      name: "Hannover",
    },
    sameAs: [
      "https://www.linkedin.com/company/vrly-hannover",
      // Add more social profiles as needed
    ],
  },
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "VRLY - KI & Workflows für Psychotherapeuten",
    description:
      "Spezialisierte KI-gestützte Workflow-Automatisierung und DSGVO-konforme Digitalisierungslösungen für Psychotherapeut:Innen",
    url: "https://vrly.de",
    telephone: "+49-XXX-XXXXXXX", // Add your phone number
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hannover",
      addressRegion: "Niedersachsen",
      postalCode: "30159", // Update with your postal code
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.3759, // Hannover coordinates
      longitude: 9.732,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: {
      "@type": "City",
      name: "Hannover",
    },
  },
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: "KI & Workflow-Automatisierung für Psychotherapeuten in Hannover",
    description:
      "VRLY ist Ihr spezialisierter Partner für KI-gestützte Workflow-Automatisierung, exklusiv für Psychotherapeut:Innen in Hannover. DSGVO-konform und effizient.",
    keywords: [
      ...seoConfig.site.keywords,
      "Startseite VRLY",
      "Psychotherapie Digitalisierung Hannover",
    ],
  },
  leistungen: {
    title: "Unsere Leistungen - KI-Automatisierung für Ihre Praxis",
    description:
      "Entdecken Sie unsere spezialisierten Dienstleistungen: Praxis-Anfragen-Autopilot, KI-Agenten, Workflow-Automatisierung und mehr für Psychotherapeuten.",
    keywords: [
      ...seoConfig.site.keywords,
      "Praxis-Anfragen-Autopilot",
      "KI Agenten Psychotherapie",
      "Workflow Audit",
    ],
  },
  blog: {
    title: "Blog - Insights zu KI & Digitalisierung in der Psychotherapie",
    description:
      "Aktuelle Artikel zu KI, Automatisierung, DSGVO und Digitalisierung speziell für Psychotherapeut:Innen. Praktische Tipps und Branchennews.",
    keywords: [
      ...seoConfig.site.keywords,
      "Psychotherapie Blog",
      "KI News",
      "DSGVO Tipps",
    ],
  },
  contact: {
    title: "Kontakt - Kostenlose Erstberatung",
    description:
      "Vereinbaren Sie Ihre kostenlose 30-minütige Erstberatung. Wir analysieren Ihre Praxisprozesse und zeigen Automatisierungspotenziale auf.",
    keywords: [
      ...seoConfig.site.keywords,
      "Kontakt VRLY",
      "Erstberatung",
      "Workflow Audit",
    ],
  },
};

// Structured data for services
export const serviceStructuredData = {
  praxisAnfragenAutopilot: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Praxis-Anfragen-Autopilot",
    description:
      "Intelligente KI-gestützte Verwaltung von Patientenanfragen mit automatischer Kategorisierung, Priorisierung und DSGVO-konformer Verarbeitung.",
    provider: {
      "@type": "Organization",
      name: "VRLY",
    },
    areaServed: {
      "@type": "City",
      name: "Hannover",
    },
    serviceType: "Workflow-Automatisierung",
  },
};
