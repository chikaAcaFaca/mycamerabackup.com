import Link from "next/link";
import Image from "next/image";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata.home;

const faqs = [
  {
    question: "Koji formati fajlova su podržani?",
    answer:
      "MyCameraBackup podržava sve RAW formate (CR2, CR3, NEF, ARW, RAF, ORF, DNG), JPEG, PNG, TIFF, HEIC, kao i video formate MP4, MOV, AVI i MKV.",
  },
  {
    question: "Koliko je siguran backup mojih fotografija?",
    answer:
      "Koristimo AES-256 enkripciju, isti standard koji koristi vojska. Vaši podaci su enkriptovani tokom prenosa (TLS 1.3) i u skladištu. Niko osim vas nema pristup.",
  },
  {
    question: "Da li mogu pristupiti fotografijama sa telefona?",
    answer:
      "Da, MyCameraBackup ima mobilne aplikacije za iOS i Android. Pristupite svim arhivama, pretražujte i delite fotografije direktno sa telefona.",
  },
  {
    question: "Kako funkcioniše automatski backup sa SD kartice?",
    answer:
      "Instalirate desktop aplikaciju i povežete čitač kartica. Čim ubacite SD karticu, backup počinje automatski - bez ijednog klika.",
  },
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Početna", url: "https://mycamerabackup.com" }]}
      />
      <FAQSchema faqs={faqs} />

      {/* ===== ATTENTION: Hero Section ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <Image
              src="/logo.jpg"
              alt="MyCameraBackup logo"
              width={120}
              height={120}
              className="mx-auto mb-6 drop-shadow-lg"
              priority
            />
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Backup fotografija za profesionalce
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Nikada više ne gubite{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                uspomene
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Jednostavno, automatsko i sigurno rešenje za backup fotografija i
              videa, dizajnirano za profesionalce koji ne rizikuju.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/cenovnik"
                className="w-full rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
              >
                Isprobaj Besplatno 14 Dana
              </Link>
              <Link
                href="/kalkulator"
                className="w-full rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto"
              >
                Izračunaj Potreban Prostor
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Bez kreditne kartice. Otkaži kad god želiš.
            </p>
          </div>
        </div>
        {/* Decorative blobs */}
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
      </section>

      {/* ===== Social Proof Bar ===== */}
      <section className="border-y border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-400">
            Koriste nas profesionalni fotografi i studiji širom regiona
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-50">
            {["Studio Pro", "FotoArt", "PixelPerfect", "LightRoom Studio", "CaptureOne Pro"].map(
              (name) => (
                <span key={name} className="text-lg font-bold text-gray-400">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== INTEREST: How It Works (3 Steps) ===== */}
      <section className="bg-white py-20 sm:py-28" id="kako-radi">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kako funkcioniše?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tri jednostavna koraka do sigurnog backup-a vaših fotografija.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Povežite kameru ili SD karticu",
                description:
                  "Instalirajte aplikaciju i povežite uređaj. Automatska detekcija kartica i kamera.",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Automatski prenos u cloud",
                description:
                  "RAW i JPEG fajlovi se šifruju i prenose u sigurno skladište. Bez kompresije.",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v-6m0 0 2.25 2.25M12 6.75 9.75 9" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Pristupite bilo gde",
                description:
                  "Pregledajte, pretražujte i delite sa bilo kog uređaja. Web, mobilni, desktop.",
                icon: (
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                ),
              },
            ].map((item) => (
              <article
                key={item.step}
                className="relative rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-shadow hover:shadow-lg"
              >
                <span className="text-sm font-bold text-blue-600">
                  Korak {item.step}
                </span>
                <div className="mt-4">{item.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEREST: Key Features ===== */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sve što vam treba za siguran backup
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Profesionalni alati dizajnirani za fotografe koji cene svoje podatke.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Podrška za RAW fajlove",
                description: "CR2, CR3, NEF, ARW, RAF, ORF, DNG i svi popularni RAW formati. Bez kompresije, bez gubitka kvaliteta.",
              },
              {
                title: "AES-256 enkripcija",
                description: "Vojni nivo zaštite vaših podataka. Zero-knowledge enkripcija znači da samo vi imate pristup.",
              },
              {
                title: "Munjevit prenos",
                description: "Optimizovan protokol za velike fajlove. Backup 64GB SD kartice za manje od 10 minuta na brzom internetu.",
              },
              {
                title: "Adobe Lightroom integracija",
                description: "Direktan pristup backup-u iz Lightroom-a i Photoshop-a. Sinhronizujte kataloge bez napora.",
              },
              {
                title: "AI pametna pretraga",
                description: "Pretražujte fotografije opisom scene. AI automatski taguje i prepoznaje lica u vašoj kolekciji.",
              },
              {
                title: "Pristup sa svih uređaja",
                description: "Web, iOS, Android, desktop. Pristupite arhivama, delite albume i upravljajte backup-om odakle god da ste.",
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESIRE: Testimonials & Numbers ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { number: "50,000+", label: "Fotografa" },
              { number: "15M+", label: "Fotografija čuvamo" },
              { number: "99.99%", label: "Uptime" },
              { number: "4.8/5", label: "Ocena korisnika" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-blue-600 sm:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                quote: "Izgubio sam celu svadbu zbog pokvarenog hard diska. Od tada koristim MyCameraBackup i mirno spavam.",
                name: "Milan P.",
                role: "Svadbeni fotograf, Beograd",
              },
              {
                quote: "RAW fajlovi od 60MB se uploaduju neverovatno brzo. Lightroom integracija je savršena za moj workflow.",
                name: "Ana K.",
                role: "Portretni fotograf, Novi Sad",
              },
              {
                quote: "AI pretraga je game-changer. Tražim 'zalazak sunca na plaži' i odmah nalazim pravu fotografiju.",
                name: "Dragan S.",
                role: "Travel fotograf, Niš",
              },
            ].map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <p className="text-sm leading-6 text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Često postavljana pitanja
          </h2>
          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-medium text-gray-900">
                  {faq.question}
                  <svg
                    className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm leading-6 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACTION: Final CTA ===== */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Image
            src="/logo.jpg"
            alt="MyCameraBackup logo"
            width={80}
            height={80}
            className="mx-auto mb-6 rounded-2xl bg-white/10 p-2 shadow-lg backdrop-blur-sm"
          />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vaš MyCameraBackup je spreman
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Pridružite se hiljadama fotografa koji nikada ne brinu o izgubljenim
            fotografijama. Počnite besplatno danas.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/cenovnik"
              className="w-full rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 sm:w-auto"
            >
              Isprobaj Besplatno 14 Dana
            </Link>
            <Link
              href="/kalkulator"
              className="w-full rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Kalkulator Prostora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
