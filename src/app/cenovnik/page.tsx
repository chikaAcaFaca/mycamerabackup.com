"use client";

import { useState } from "react";
import Link from "next/link";
import { plans, billingPeriods, type BillingPeriod } from "@/lib/pricing-data";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { usePaddle } from "@/hooks/usePaddle";
import { getPaddlePriceId } from "@/lib/paddle";

export default function PricingPage() {
  const [period, setPeriod] = useState<BillingPeriod>("yearly");
  const [aiEnabled, setAiEnabled] = useState(false);
  const paddle = usePaddle();
  const [showAll, setShowAll] = useState(false);

  const visiblePlans = showAll ? plans : plans.slice(0, 4);

  function getPrice(plan: (typeof plans)[number]) {
    const prices = aiEnabled ? plan.aiPrices : plan.prices;
    return prices[period];
  }

  function getMonthlyEquivalent(plan: (typeof plans)[number]) {
    const price = getPrice(plan);
    const periodData = billingPeriods.find((p) => p.key === period)!;
    if (periodData.months === 1) return null;
    return (price / periodData.months).toFixed(2);
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Početna", url: "https://mycamerabackup.com" },
          { name: "Cenovnik", url: "https://mycamerabackup.com/cenovnik" },
        ]}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Izaberite plan za vaše potrebe
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Od hobiste do profesionalnog studija. Svi planovi uključuju besplatan probni period od 14 dana.
            </p>
          </div>

          {/* Controls */}
          <div className="mt-10 flex flex-col items-center gap-6">
            {/* Billing Period */}
            <div className="flex flex-wrap justify-center gap-2 rounded-xl bg-gray-100 p-1">
              {billingPeriods.map((bp) => (
                <button
                  key={bp.key}
                  type="button"
                  onClick={() => setPeriod(bp.key)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    period === bp.key
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {bp.label}
                  {bp.badge && (
                    <span className="ml-1.5 inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                      {bp.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* AI Toggle */}
            <div className="flex items-center gap-3">
              <span className={`text-sm font-medium ${!aiEnabled ? "text-gray-900" : "text-gray-400"}`}>
                Standard
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={aiEnabled}
                onClick={() => setAiEnabled(!aiEnabled)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                  aiEnabled ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform ${
                    aiEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${aiEnabled ? "text-gray-900" : "text-gray-400"}`}>
                AI Powered
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visiblePlans.map((plan) => {
              const price = getPrice(plan);
              const monthlyEq = getMonthlyEquivalent(plan);

              return (
                <article
                  key={plan.id}
                  className={`relative flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-lg ${
                    plan.popular
                      ? "border-blue-600 bg-blue-50/50 shadow-md"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      Najpopularniji
                    </span>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{plan.storage}</p>
                  </div>

                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${price === 0 ? "0" : price.toFixed(2)}
                    </span>
                    {price > 0 && (
                      <span className="text-sm text-gray-500">
                        /{billingPeriods.find((bp) => bp.key === period)?.label.toLowerCase()}
                      </span>
                    )}
                    {monthlyEq && price > 0 && (
                      <p className="mt-1 text-xs text-gray-400">
                        ≈ ${monthlyEq}/mesečno
                      </p>
                    )}
                  </div>

                  <ul className="mt-6 flex-1 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                    {aiEnabled &&
                      plan.aiFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-blue-600">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                          </svg>
                          {f}
                        </li>
                      ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => {
                      if (plan.id === "free") {
                        window.location.href = "/register";
                        return;
                      }
                      const priceId = getPaddlePriceId(plan.id, period, aiEnabled);
                      if (priceId && paddle) {
                        paddle.Checkout.open({
                          items: [{ priceId, quantity: 1 }],
                          settings: {
                            displayMode: "overlay",
                            theme: "light",
                            locale: "en",
                            successUrl: `${window.location.origin}/success`,
                          },
                        });
                      }
                    }}
                    className={`mt-6 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : plan.id === "free"
                          ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {plan.id === "free" ? "Počni Besplatno" : "Isprobaj 14 Dana"}
                  </button>
                </article>
              );
            })}
          </div>

          {!showAll && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Prikaži sve planove ({plans.length}) &rarr;
              </button>
            </div>
          )}

          {/* FAQ */}
          <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-gray-900">
              Pitanja o cenama
            </h2>
            <div className="mt-8 space-y-4">
              {[
                {
                  q: "Mogu li promeniti plan kasnije?",
                  a: "Da, možete nadograditi ili smanjiti plan u bilo kom trenutku. Razlika u ceni se proporcionalno obračunava.",
                },
                {
                  q: "Šta se dešava kad popunim prostor?",
                  a: "Dobićete obaveštenje kad popunite 80% i 95% prostora. Lako možete nadograditi plan jednim klikom.",
                },
                {
                  q: "Da li postoji garancija povraćaja novca?",
                  a: "Da, nudimo 30-dnevnu garanciju povraćaja novca bez pitanja, pored besplatnog probnog perioda od 14 dana.",
                },
                {
                  q: "Koji načini plaćanja su podržani?",
                  a: "Podržavamo Visa, Mastercard, PayPal i bankovni transfer. Sve transakcije su obrađene preko Paddle-a sa punom PCI usklađenošću.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-gray-200 bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-gray-900">
                    {faq.q}
                    <svg className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-4 text-sm text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
