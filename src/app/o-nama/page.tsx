import { pageMetadata } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Početna", url: "https://mycamerabackup.com" },
          { name: "O Nama", url: "https://mycamerabackup.com/o-nama" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Image
            src="/logo.jpg"
            alt="MyCameraBackup logo"
            width={100}
            height={100}
            className="mx-auto mb-6 drop-shadow-md"
          />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Nastali iz potrebe fotografa
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            MyCameraBackup je kreirao fotograf za fotografe, nakon što je izgubio godine rada zbog kvara hard diska.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-gray mx-auto">
            <h2 className="text-2xl font-bold text-gray-900">Naša priča</h2>
            <p className="mt-4 text-gray-600 leading-7">
              Sve je počelo 2019. godine kada je naš osnivač, profesionalni svadbeni fotograf sa
              više od 10 godina iskustva, izgubio kompletan arhiv od 50.000+ fotografija zbog
              istovremenog kvara dva hard diska.
            </p>
            <p className="mt-4 text-gray-600 leading-7">
              Nijedan postojeći cloud servis nije bio dizajniran za potrebe profesionalnih
              fotografa - ogromni RAW fajlovi, potreba za brzim upload-om, integracija sa
              Lightroom-om. Postojeća rešenja su ili kompresovala fajlove, ili su bila
              preskupa, ili previše komplikovana.
            </p>
            <p className="mt-4 text-gray-600 leading-7">
              MyCameraBackup je rođen sa jednom misijom:{" "}
              <strong>nijedan fotograf ne sme izgubiti svoje fotografije</strong>. Gradimo
              platformu koja razume specifične potrebe fotografa i pruža mir uma koji dolazi
              sa sigurnim, automatizovanim backup-om.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Naše vrednosti
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Privatnost prvo",
                description:
                  "Vaše fotografije su vaše. Zero-knowledge enkripcija, bez skeniranja sadržaja, bez korišćenja za AI treniranje.",
              },
              {
                title: "Nulta kompresija",
                description:
                  "Svaki piksel je sačuvan tačno onako kako ga je kamera snimila. RAW fajlovi ostaju nedodirnut.",
              },
              {
                title: "Pouzdanost",
                description:
                  "99.99% uptime, tri kopije vaših podataka na dva kontinenta. Vaše fotografije su sigurnije nego ikad.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { number: "2019", label: "Osnivanje" },
              { number: "50K+", label: "Korisnika" },
              { number: "15M+", label: "Fotografija čuvamo" },
              { number: "5 PB+", label: "Ukupan prostor" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-blue-600">{stat.number}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Pridružite se zajednici fotografa
          </h2>
          <p className="mt-3 text-blue-100">
            Počnite sa besplatnim planom i otkrijte zašto nas 50.000+ fotografa koristi svaki dan.
          </p>
          <Link
            href="/cenovnik"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
          >
            Isprobaj Besplatno
          </Link>
        </div>
      </section>
    </>
  );
}
