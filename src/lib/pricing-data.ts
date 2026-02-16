export interface PricingPlan {
  id: string;
  name: string;
  storage: string;
  storageBytes: number;
  prices: {
    monthly: number;
    quarterly: number;
    semiAnnual: number;
    yearly: number;
  };
  aiPrices: {
    monthly: number;
    quarterly: number;
    semiAnnual: number;
    yearly: number;
  };
  features: string[];
  aiFeatures: string[];
  popular?: boolean;
}

export const billingPeriods = [
  { key: "monthly" as const, label: "Mesečno", months: 1, discount: 0, badge: "" },
  { key: "quarterly" as const, label: "Kvartalno", months: 3, discount: 2.5, badge: "" },
  { key: "semiAnnual" as const, label: "Polugodišnje", months: 6, discount: 5, badge: "" },
  { key: "yearly" as const, label: "Godišnje", months: 12, discount: 16.67, badge: "2 mes. gratis" },
] as const;

export type BillingPeriod = typeof billingPeriods[number]["key"];

export const plans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    storage: "10 GB",
    storageBytes: 10 * 1024 * 1024 * 1024,
    prices: { monthly: 0, quarterly: 0, semiAnnual: 0, yearly: 0 },
    aiPrices: { monthly: 0, quarterly: 0, semiAnnual: 0, yearly: 0 },
    features: [
      "Web i mobilni pristup",
      "Automatski backup",
      "Osnovno deljenje",
      "Čuvanje u originalnom kvalitetu",
    ],
    aiFeatures: ["AI demo (50 fotografija/mesec)"],
  },
  {
    id: "starter",
    name: "Starter",
    storage: "150 GB",
    storageBytes: 150 * 1024 * 1024 * 1024,
    prices: { monthly: 2.49, quarterly: 7.28, semiAnnual: 14.19, yearly: 24.90 },
    aiPrices: { monthly: 2.99, quarterly: 8.75, semiAnnual: 17.04, yearly: 29.90 },
    features: [
      "Web i mobilni pristup",
      "Automatski backup",
      "Deljenje albuma",
      "Čuvanje u originalnom kvalitetu",
      "Prioritetni upload",
    ],
    aiFeatures: ["Pametna pretraga", "Auto-tagovanje", "Prepoznavanje lica"],
  },
  {
    id: "plus",
    name: "Plus",
    storage: "250 GB",
    storageBytes: 250 * 1024 * 1024 * 1024,
    prices: { monthly: 3.49, quarterly: 10.21, semiAnnual: 19.90, yearly: 34.90 },
    aiPrices: { monthly: 4.49, quarterly: 13.14, semiAnnual: 25.60, yearly: 44.90 },
    features: [
      "Web i mobilni pristup",
      "Automatski backup",
      "Deljenje albuma",
      "Čuvanje u originalnom kvalitetu",
      "Prioritetni upload",
    ],
    aiFeatures: ["Pametna pretraga", "Auto-tagovanje", "Prepoznavanje lica"],
    popular: true,
  },
  {
    id: "standard",
    name: "Standard",
    storage: "500 GB",
    storageBytes: 500 * 1024 * 1024 * 1024,
    prices: { monthly: 5.99, quarterly: 17.52, semiAnnual: 34.14, yearly: 59.90 },
    aiPrices: { monthly: 7.99, quarterly: 23.37, semiAnnual: 45.54, yearly: 79.90 },
    features: [
      "Web i mobilni pristup",
      "Automatski backup",
      "Deljenje albuma",
      "Čuvanje u originalnom kvalitetu",
      "Prioritetni upload",
      "Porodično deljenje (do 5)",
    ],
    aiFeatures: ["Pametna pretraga", "Auto-tagovanje", "Prepoznavanje lica", "AI foto asistent"],
  },
  {
    id: "pro",
    name: "Pro",
    storage: "750 GB",
    storageBytes: 750 * 1024 * 1024 * 1024,
    prices: { monthly: 8.99, quarterly: 26.30, semiAnnual: 51.24, yearly: 89.90 },
    aiPrices: { monthly: 11.99, quarterly: 35.07, semiAnnual: 68.34, yearly: 119.90 },
    features: [
      "Web i mobilni pristup",
      "Automatski backup",
      "Deljenje albuma",
      "Čuvanje u originalnom kvalitetu",
      "Prioritetni upload",
      "Porodično deljenje (do 5)",
      "Premium podrška",
    ],
    aiFeatures: [
      "Pametna pretraga",
      "Auto-tagovanje",
      "Prepoznavanje lica",
      "AI foto asistent",
      "Uklanjanje pozadine",
    ],
  },
  {
    id: "proplus",
    name: "Pro+",
    storage: "1.25 TB",
    storageBytes: 1.25 * 1024 * 1024 * 1024 * 1024,
    prices: { monthly: 13.49, quarterly: 39.46, semiAnnual: 76.89, yearly: 134.90 },
    aiPrices: { monthly: 17.99, quarterly: 52.62, semiAnnual: 102.54, yearly: 179.90 },
    features: [
      "Web i mobilni pristup",
      "Automatski backup",
      "Deljenje albuma",
      "Čuvanje u originalnom kvalitetu",
      "Prioritetni upload",
      "Porodično deljenje (do 5)",
      "Premium podrška",
    ],
    aiFeatures: [
      "Neograničene AI funkcije",
      "Pametna pretraga",
      "Auto-tagovanje",
      "Prepoznavanje lica",
      "AI foto asistent",
      "Uklanjanje pozadine",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    storage: "2.5 TB",
    storageBytes: 2.5 * 1024 * 1024 * 1024 * 1024,
    prices: { monthly: 24.99, quarterly: 73.10, semiAnnual: 142.44, yearly: 249.90 },
    aiPrices: { monthly: 31.99, quarterly: 93.57, semiAnnual: 182.34, yearly: 319.90 },
    features: [
      "Web i mobilni pristup",
      "Automatski backup",
      "Deljenje albuma",
      "Čuvanje u originalnom kvalitetu",
      "Prioritetni upload",
      "Porodično deljenje (do 5)",
      "Premium podrška",
      "API pristup",
    ],
    aiFeatures: [
      "Neograničene AI funkcije",
      "Pametna pretraga",
      "Auto-tagovanje",
      "Prepoznavanje lica",
      "AI foto asistent",
      "Uklanjanje pozadine",
      "Poboljšanje fotografija",
    ],
  },
  {
    id: "business",
    name: "Business",
    storage: "5 TB",
    storageBytes: 5 * 1024 * 1024 * 1024 * 1024,
    prices: { monthly: 45.99, quarterly: 134.52, semiAnnual: 262.14, yearly: 459.90 },
    aiPrices: { monthly: 54.99, quarterly: 160.85, semiAnnual: 313.44, yearly: 549.90 },
    features: [
      "Sve iz Premium plana",
      "Upravljanje timom",
      "Napredne kontrole deljenja",
      "Revizijski logovi",
      "SSO integracija",
    ],
    aiFeatures: [
      "Neograničene AI funkcije",
      "Prioritetna AI obrada",
      "Prilagođeni AI modeli",
      "Masovne operacije",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    storage: "10 TB",
    storageBytes: 10 * 1024 * 1024 * 1024 * 1024,
    prices: { monthly: 84.99, quarterly: 248.60, semiAnnual: 484.44, yearly: 849.90 },
    aiPrices: { monthly: 94.99, quarterly: 277.85, semiAnnual: 541.44, yearly: 949.90 },
    features: [
      "Sve iz Business plana",
      "Dedikirana podrška",
      "Prilagođene integracije",
      "SLA garancija",
      "On-premise opcija",
    ],
    aiFeatures: [
      "Neograničene AI funkcije",
      "Prioritetna AI obrada",
      "Prilagođeni AI modeli",
      "Masovne operacije",
      "Dedikirani AI resursi",
    ],
  },
];
