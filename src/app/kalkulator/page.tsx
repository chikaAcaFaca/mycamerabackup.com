"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { plans } from "@/lib/pricing-data";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

// Average file sizes by megapixel count (in MB)
// RAW files: ~2.5 bytes per pixel, JPEG: ~0.5 bytes per pixel
function estimateFileSize(megapixels: number, format: "raw" | "jpeg" | "both") {
  const rawMB = megapixels * 2.5;
  const jpegMB = megapixels * 0.5;
  if (format === "raw") return rawMB;
  if (format === "jpeg") return jpegMB;
  return rawMB + jpegMB; // RAW+JPEG
}

const cameras = [
  { label: "12 MP (iPhone, starije kamere)", mp: 12 },
  { label: "20 MP (Canon EOS R50, Nikon Z30)", mp: 20 },
  { label: "24 MP (Sony A6400, Canon R10)", mp: 24 },
  { label: "33 MP (Nikon Z6 III, Canon R8)", mp: 33 },
  { label: "45 MP (Nikon Z8, Canon R5)", mp: 45 },
  { label: "50 MP (Canon R5 II, Sony A1)", mp: 50 },
  { label: "61 MP (Sony A7R V)", mp: 61 },
  { label: "102 MP (Fujifilm GFX 100S)", mp: 102 },
];

export default function CalculatorPage() {
  const [megapixels, setMegapixels] = useState(24);
  const [photoCount, setPhotoCount] = useState(5000);
  const [format, setFormat] = useState<"raw" | "jpeg" | "both">("raw");
  const [videoHours, setVideoHours] = useState(0);

  const result = useMemo(() => {
    const fileSizeMB = estimateFileSize(megapixels, format);
    const totalPhotoGB = (fileSizeMB * photoCount) / 1024;
    const totalVideoGB = videoHours * 15; // ~15GB per hour of 4K video
    const totalGB = totalPhotoGB + totalVideoGB;
    const totalTB = totalGB / 1024;

    const recommended = plans.find(
      (p) => p.storageBytes >= totalGB * 1024 * 1024 * 1024
    );

    return {
      fileSizeMB: fileSizeMB.toFixed(1),
      totalPhotoGB: totalPhotoGB.toFixed(1),
      totalVideoGB: totalVideoGB.toFixed(1),
      totalGB: totalGB.toFixed(1),
      totalTB: totalTB.toFixed(2),
      recommended,
      usagePercent: recommended
        ? Math.round((totalGB * 1024 * 1024 * 1024 * 100) / recommended.storageBytes)
        : 100,
    };
  }, [megapixels, photoCount, format, videoHours]);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Početna", url: "https://mycamerabackup.com" },
          { name: "Kalkulator", url: "https://mycamerabackup.com/kalkulator" },
        ]}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kalkulator potrebnog prostora
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Izračunajte koliko vam prostora treba za backup fotografija i dobijte preporuku plana.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Input Form */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Parametri kamere
              </h2>

              {/* Camera / Megapixels */}
              <div className="mt-6">
                <label htmlFor="camera" className="block text-sm font-medium text-gray-700">
                  Rezolucija kamere
                </label>
                <select
                  id="camera"
                  value={megapixels}
                  onChange={(e) => setMegapixels(Number(e.target.value))}
                  className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  {cameras.map((cam) => (
                    <option key={cam.mp} value={cam.mp}>
                      {cam.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Format */}
              <div className="mt-5">
                <label className="block text-sm font-medium text-gray-700">
                  Format fotografija
                </label>
                <div className="mt-2 flex gap-2">
                  {(
                    [
                      { key: "raw", label: "RAW" },
                      { key: "jpeg", label: "JPEG" },
                      { key: "both", label: "RAW + JPEG" },
                    ] as const
                  ).map((f) => (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setFormat(f.key)}
                      className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                        format === f.key
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo Count */}
              <div className="mt-5">
                <label htmlFor="photos" className="block text-sm font-medium text-gray-700">
                  Broj fotografija: <strong>{photoCount.toLocaleString()}</strong>
                </label>
                <input
                  id="photos"
                  type="range"
                  min={100}
                  max={200000}
                  step={100}
                  value={photoCount}
                  onChange={(e) => setPhotoCount(Number(e.target.value))}
                  className="mt-2 w-full accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>100</span>
                  <span>200,000</span>
                </div>
              </div>

              {/* Video Hours */}
              <div className="mt-5">
                <label htmlFor="video" className="block text-sm font-medium text-gray-700">
                  Sati 4K videa: <strong>{videoHours}</strong>
                </label>
                <input
                  id="video"
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={videoHours}
                  onChange={(e) => setVideoHours(Number(e.target.value))}
                  className="mt-2 w-full accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>0h</span>
                  <span>100h</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col gap-6">
              {/* Summary Card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">
                  Rezultat
                </h2>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-600">Veličina po fajlu</span>
                    <span className="text-sm font-semibold text-gray-900">{result.fileSizeMB} MB</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                    <span className="text-sm text-gray-600">Fotografije ukupno</span>
                    <span className="text-sm font-semibold text-gray-900">{result.totalPhotoGB} GB</span>
                  </div>
                  {videoHours > 0 && (
                    <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                      <span className="text-sm text-gray-600">Video ukupno</span>
                      <span className="text-sm font-semibold text-gray-900">{result.totalVideoGB} GB</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between rounded-lg bg-blue-50 px-4 py-3">
                    <span className="text-sm font-medium text-blue-700">Potreban prostor</span>
                    <span className="text-lg font-bold text-blue-700">
                      {parseFloat(result.totalGB) >= 1024
                        ? `${result.totalTB} TB`
                        : `${result.totalGB} GB`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommendation Card */}
              {result.recommended && (
                <div className="rounded-2xl border-2 border-blue-600 bg-blue-50 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Preporučeni plan
                  </h3>
                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {result.recommended.name}{" "}
                    <span className="text-lg font-normal text-gray-500">
                      ({result.recommended.storage})
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Iskoristili biste ~{result.usagePercent}% prostora
                  </p>
                  {/* Progress bar */}
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-200">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all"
                      style={{ width: `${Math.min(result.usagePercent, 100)}%` }}
                    />
                  </div>
                  <p className="mt-4 text-2xl font-bold text-gray-900">
                    ${result.recommended.prices.yearly.toFixed(2)}
                    <span className="text-sm font-normal text-gray-500">/godišnje</span>
                  </p>
                  <Link
                    href="/cenovnik"
                    className="mt-4 block rounded-lg bg-blue-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Isprobaj {result.recommended.name} Plan Besplatno
                  </Link>
                </div>
              )}

              {!result.recommended && (
                <div className="rounded-2xl border-2 border-orange-400 bg-orange-50 p-6">
                  <h3 className="text-sm font-semibold text-orange-700">
                    Potreban je prilagođeni plan
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Vaše potrebe prevazilaze naše standardne planove. Kontaktirajte nas za Enterprise rešenje.
                  </p>
                  <Link
                    href="/podrska"
                    className="mt-4 block rounded-lg bg-orange-500 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                  >
                    Kontaktirajte nas
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 rounded-2xl bg-gray-50 p-6">
            <h3 className="text-sm font-semibold text-gray-900">Kako smo izračunali?</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
              <li>RAW fajl: ~2.5 MB po megapikselu (npr. 24MP = ~60MB po fajlu)</li>
              <li>JPEG fajl: ~0.5 MB po megapikselu (npr. 24MP = ~12MB po fajlu)</li>
              <li>4K video: ~15 GB po satu snimanja (H.264 kodek)</li>
              <li>Preporuka: izaberite plan sa 20-30% rezerve za budući rast</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
