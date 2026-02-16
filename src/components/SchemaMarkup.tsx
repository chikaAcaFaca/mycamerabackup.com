export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MyCameraBackup",
    applicationCategory: "PhotographyApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Automatski backup fotografija i videa za profesionalne fotografe. Sigurno čuvajte RAW fajlove u cloud-u.",
    url: "https://mycamerabackup.com",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "94.99",
      offerCount: "9",
    },
    featureList: [
      "Automatski backup sa SD kartice",
      "Podrška za RAW fajlove",
      "Vojna enkripcija (AES-256)",
      "Pristup sa bilo kog uređaja",
      "Integracija sa Adobe Lightroom",
      "AI pametna pretraga",
      "Prepoznavanje lica",
    ],
    screenshot: "https://mycamerabackup.com/og-image.png",
    softwareVersion: "1.0",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MyCameraBackup",
    url: "https://mycamerabackup.com",
    logo: "https://mycamerabackup.com/logo.png",
    description:
      "Platforma za siguran backup fotografija i videa za profesionalne fotografe.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Serbian", "English"],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
