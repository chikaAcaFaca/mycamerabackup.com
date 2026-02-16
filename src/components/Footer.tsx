import Link from "next/link";

const footerLinks = {
  Proizvod: [
    { label: "Funkcionalnosti", href: "/funkcionalnosti" },
    { label: "Cenovnik", href: "/cenovnik" },
    { label: "Kalkulator", href: "/kalkulator" },
  ],
  Resursi: [
    { label: "Blog", href: "/blog" },
    { label: "Vodiči", href: "/blog" },
    { label: "Podrška", href: "/podrska" },
  ],
  Kompanija: [
    { label: "O Nama", href: "/o-nama" },
    { label: "Kontakt", href: "/podrska" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                MC
              </div>
              <span className="font-bold text-gray-900">MyCameraBackup</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              Sigurno čuvajte vaše fotografije i video zapise u cloud-u. Dizajnirano za profesionalne fotografe.
            </p>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-gray-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} MyCameraBackup. Sva prava zadržana.
            Vaši podaci su zaštićeni AES-256 enkripcijom. GDPR usklađenost.
          </p>
        </div>
      </div>
    </footer>
  );
}
