import { pageMetadata } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata.blog;

const pillarArticles = [
  {
    slug: "3-2-1-backup-strategija-za-fotografe",
    title: "3-2-1 Backup Strategija: Kompletni Vodič za Fotografe",
    excerpt:
      "Naučite kako da primenite 3-2-1 pravilo za backup fotografija i nikada ne izgubite snimke. Tri kopije, dva medija, jedna off-site lokacija.",
    category: "Vodiči",
    readTime: "12 min",
    date: "2026-02-10",
  },
  {
    slug: "backup-fotografija-na-cloud-vodic",
    title: "Backup Fotografija na Cloud: Sve Što Trebate Znati u 2026",
    excerpt:
      "Kompletni vodič za cloud backup fotografija. Poređenje servisa, sigurnosne opcije, brzina upload-a i preporuke za profesionalne fotografe.",
    category: "Vodiči",
    readTime: "15 min",
    date: "2026-02-05",
  },
  {
    slug: "kako-sacuvati-slike-sa-kamere",
    title: "Kako Sačuvati Slike sa Kamere: Vodič za Početnike i Profesionalce",
    excerpt:
      "Od SD kartice do cloud-a - korak po korak vodič za sigurno čuvanje fotografija. Saznajte koje greške pravite i kako ih izbeći.",
    category: "Tutorijali",
    readTime: "10 min",
    date: "2026-01-28",
  },
  {
    slug: "najbolji-eksterni-hard-disk-za-fotografe-2026",
    title: "Najbolji Eksterni Hard Diskovi za Fotografe u 2026 - Recenzija",
    excerpt:
      "Testirali smo 15 eksternih diskova za brzinu, pouzdanost i vrednost. Saznajte koji je najbolji izbor za vaš workflow.",
    category: "Recenzije",
    readTime: "18 min",
    date: "2026-01-20",
  },
  {
    slug: "automatski-backup-sd-kartice-podesavanje",
    title: "Automatski Backup SD Kartice: Podešavanje od A do Ž",
    excerpt:
      "Naučite kako da podesite automatski backup SD kartice čim je ubacite u računar. Windows, Mac i Linux vodiči.",
    category: "Tutorijali",
    readTime: "8 min",
    date: "2026-01-15",
  },
];

const categories = ["Sve", "Vodiči", "Tutorijali", "Recenzije", "Saveti"];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Početna", url: "https://mycamerabackup.com" },
          { name: "Blog", url: "https://mycamerabackup.com/blog" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Image
            src="/logo.jpg"
            alt="MyCameraBackup logo"
            width={80}
            height={80}
            className="mx-auto mb-6 drop-shadow-md"
          />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Vodiči i Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tutorijali za backup fotografija, recenzije opreme i saveti za sigurnost podataka.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  cat === "Sve"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pillarArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white transition-shadow hover:shadow-lg"
              >
                {/* Placeholder image */}
                <div className="aspect-video rounded-t-2xl bg-gradient-to-br from-blue-100 to-indigo-100" />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-2 flex-1 text-sm text-gray-600">
                    {article.excerpt}
                  </p>

                  <time className="mt-4 text-xs text-gray-400">
                    {new Date(article.date).toLocaleDateString("sr-RS", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Prijavite se na naš newsletter
          </h2>
          <p className="mt-2 text-gray-600">
            Dobijajte savete za backup fotografija, recenzije opreme i ekskluzivne ponude.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="vaš@email.com"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Pretplatite se
            </button>
          </form>
          <p className="mt-2 text-xs text-gray-400">
            Bez spam-a. Otkažite pretplatu kad god želite.
          </p>
        </div>
      </section>
    </>
  );
}
