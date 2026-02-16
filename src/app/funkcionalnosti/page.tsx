import { pageMetadata } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata.features;

const features = [
  {
    category: "Backup i Skladištenje",
    items: [
      {
        title: "Automatski backup sa SD kartice",
        description:
          "Ubacite SD karticu i backup počinje automatski. Podržava USB čitače kartica i direktnu vezu sa kamerom.",
      },
      {
        title: "Podrška za RAW formate",
        description:
          "CR2, CR3, NEF, ARW, RAF, ORF, RW2, DNG, PEF i svi drugi RAW formati. Nulta kompresija - vaši fajlovi ostaju identični.",
      },
      {
        title: "Video backup",
        description:
          "4K, 8K, ProRes, H.264, H.265 - svi video formati. Automatska detekcija novih snimaka sa kamere.",
      },
      {
        title: "3-2-1 Backup strategija",
        description:
          "Lokalna kopija + cloud kopija + geografski odvojena replika. Tri kopije vaših podataka na dva različita medija.",
      },
    ],
  },
  {
    category: "Sigurnost i Privatnost",
    items: [
      {
        title: "AES-256 enkripcija",
        description:
          "Vojni standard enkripcije za podatke u mirovanju i tokom prenosa. TLS 1.3 za sve komunikacije.",
      },
      {
        title: "Zero-knowledge arhitektura",
        description:
          "Samo vi imate ključeve za dešifrovanje. Čak ni mi ne možemo pristupiti vašim fotografijama.",
      },
      {
        title: "EU serveri (GDPR)",
        description:
          "Svi podaci se čuvaju na serverima u Evropskoj Uniji. Puna usklađenost sa GDPR regulativom.",
      },
      {
        title: "Bez skeniranja sadržaja",
        description:
          "Ne skeniramo vaše fotografije za reklame. Ne koristimo vaše podatke za treniranje AI modela.",
      },
    ],
  },
  {
    category: "AI Funkcionalnosti",
    items: [
      {
        title: "Pametna pretraga",
        description:
          'Pretražujte fotografije prirodnim jezikom. Opišite scenu kao "zalazak sunca na plaži" i pronađite tačnu fotografiju.',
      },
      {
        title: "Auto-tagovanje",
        description:
          "AI automatski prepoznaje objekte, scene i aktivnosti na vašim fotografijama. Bez ručnog organizovanja.",
      },
      {
        title: "Prepoznavanje lica",
        description:
          "Automatsko grupiranje fotografija po osobama. Imenujte jednom - AI pronalazi sve ostale fotografije te osobe.",
      },
      {
        title: "Uklanjanje pozadine",
        description:
          "AI alat za uklanjanje i zamenu pozadine direktno u cloudu. Bez potrebe za dodatnim softverom.",
      },
    ],
  },
  {
    category: "Integracije i Pristup",
    items: [
      {
        title: "Adobe Lightroom plugin",
        description:
          "Pristupite cloud backup-u direktno iz Lightroom-a. Sinhronizujte kataloge, preuzimajte RAW fajlove.",
      },
      {
        title: "Web, mobilni, desktop",
        description:
          "Pristupite sa bilo kog uređaja. Native aplikacije za iOS, Android, Windows i macOS.",
      },
      {
        title: "API pristup",
        description:
          "REST API za automatizaciju workflow-a. Integrisite MyCameraBackup sa vašim postojećim alatima.",
      },
      {
        title: "Deljenje albuma",
        description:
          "Kreirajte javne ili privatne albume. Delite sa klijentima putem linka - bez potrebe za nalogom.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Početna", url: "https://mycamerabackup.com" },
          { name: "Funkcionalnosti", url: "https://mycamerabackup.com/funkcionalnosti" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Funkcionalnosti
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Profesionalni alati za backup fotografija sa fokusom na sigurnost, brzinu i jednostavnost.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {features.map((category, idx) => (
        <section
          key={category.category}
          className={`py-16 sm:py-20 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {category.category}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {category.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Spremni da zaštitite vaše fotografije?
          </h2>
          <p className="mt-3 text-blue-100">
            Počnite sa besplatnim planom od 10GB ili isprobajte Pro plan 14 dana besplatno.
          </p>
          <Link
            href="/cenovnik"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
          >
            Pogledajte Cenovnik
          </Link>
        </div>
      </section>
    </>
  );
}
