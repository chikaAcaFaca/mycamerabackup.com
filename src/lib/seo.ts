import type { Metadata } from "next";

const siteUrl = "https://mycamerabackup.com";
const siteName = "MyCameraBackup";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Sigurni Backup Fotografija u Cloud-u`,
    template: `%s | ${siteName}`,
  },
  description:
    "Automatski backup fotografija i videa za profesionalne fotografe. Sigurno čuvajte RAW fajlove u cloud-u sa vojnim nivoom enkripcije. Pristupite arhivama sa bilo kog uređaja.",
  keywords: [
    "backup fotografija na cloud",
    "kako sačuvati slike sa kamere",
    "najbolji eksterni hard disk za fotografe",
    "3-2-1 backup strategija",
    "automatski backup sd kartice",
    "cloud za fotografe",
    "sigurnost podataka",
    "backup RAW fajlova",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: siteUrl,
    siteName,
    title: `${siteName} - Nikada Više Ne Gubite Uspomene`,
    description:
      "Jednostavno, automatsko i sigurno rešenje za backup fotografija i videa. Dizajnirano za profesionalce koji ne rizikuju.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Sigurni Backup Fotografija`,
    description:
      "Automatski backup fotografija i videa za profesionalne fotografe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: `${siteName} - Sigurni Backup Fotografija u Cloud-u`,
    description:
      "Automatski backup fotografija i videa za profesionalne fotografe. Sigurno čuvajte RAW fajlove u cloud-u sa vojnim nivoom enkripcije. Pristupite sa bilo kog uređaja.",
  },
  features: {
    title: "Funkcionalnosti",
    description:
      "Podrška za RAW fajlove, vojna enkripcija, munjevit prenos podataka. Otkrijte sve funkcionalnosti MyCameraBackup cloud platforme za siguran backup fotografija.",
  },
  pricing: {
    title: "Cenovnik",
    description:
      "Izaberite plan za backup fotografija koji odgovara vašim potrebama. Od besplatnog plana sa 10GB do Enterprise sa 10TB. Cloud za fotografe po pristupačnim cenama.",
  },
  blog: {
    title: "Vodiči i Blog",
    description:
      "Tutorijali za backup fotografija, recenzije opreme za fotografe, saveti za sigurnost podataka i 3-2-1 backup strategija. Sve na jednom mestu.",
  },
  about: {
    title: "O Nama",
    description:
      "MyCameraBackup je nastao iz potrebe profesionalnog fotografa da nikada ne izgubi snimljene trenutke. Saznajte našu priču i misiju.",
  },
  support: {
    title: "Podrška",
    description:
      "Baza znanja, kontakt forma i live chat podrška za korisnike MyCameraBackup platforme. Tu smo da pomognemo sa backup-om vaših fotografija.",
  },
  calculator: {
    title: "Kalkulator Potrebnog Prostora za Backup",
    description:
      "Izračunajte koliko vam prostora treba za backup fotografija. Unesite megapiksele kamere i broj slika - dobijte preporuku plana.",
  },
};
