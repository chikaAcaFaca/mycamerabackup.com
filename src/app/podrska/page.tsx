import { pageMetadata } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata.support;

const knowledgeBase = [
  {
    category: "Početak rada",
    articles: [
      "Kako da instaliram MyCameraBackup aplikaciju",
      "Kako da povežem SD karticu čitač",
      "Vodič za prvi backup",
      "Podešavanje automatskog backup-a",
    ],
  },
  {
    category: "Upravljanje nalogom",
    articles: [
      "Kako da promenim plan",
      "Upravljanje načinima plaćanja",
      "Kako da obrišem nalog",
      "Pozivanje članova tima",
    ],
  },
  {
    category: "Tehnička pomoć",
    articles: [
      "Rešavanje problema sa upload-om",
      "Podržani RAW formati",
      "Lightroom plugin instalacija",
      "API dokumentacija",
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Početna", url: "https://mycamerabackup.com" },
          { name: "Podrška", url: "https://mycamerabackup.com/podrska" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Kako vam možemo pomoći?
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Pretražite bazu znanja ili nas kontaktirajte direktno.
          </p>

          {/* Search */}
          <div className="mt-8">
            <input
              type="search"
              placeholder="Pretražite bazu znanja..."
              className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Baza znanja</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {knowledgeBase.map((section) => (
              <div
                key={section.category}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {section.articles.map((article) => (
                    <li key={article}>
                      <a
                        href="#"
                        className="text-sm text-blue-600 transition-colors hover:text-blue-700 hover:underline"
                      >
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Kontaktirajte nas
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Odgovaramo u roku od 24 sata. Premium korisnici dobijaju prioritetnu podršku.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email adresa
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Tema
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Izaberite temu</option>
                <option value="technical">Tehnički problem</option>
                <option value="billing">Naplata i fakturisanje</option>
                <option value="feature">Zahtev za funkcionalnost</option>
                <option value="other">Ostalo</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Poruka
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Pošaljite Poruku
            </button>
          </form>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Email",
                description: "support@mycamerabackup.com",
                note: "Odgovaramo u roku od 24h",
              },
              {
                title: "Live Chat",
                description: "Dostupan radnim danima",
                note: "Pon-Pet, 9:00-17:00 CET",
              },
              {
                title: "Baza znanja",
                description: "100+ članaka i vodiča",
                note: "Dostupno 24/7",
              },
            ].map((option) => (
              <div
                key={option.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-blue-600">
                  {option.description}
                </p>
                <p className="mt-1 text-xs text-gray-500">{option.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
