import { Environment, Paddle } from "@paddle/paddle-node-sdk";

// Server-side Paddle SDK for subscription management and webhook verification
export const paddle = new Paddle(process.env.PADDLE_API_KEY || "", {
  environment:
    process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT === "production"
      ? Environment.production
      : Environment.sandbox,
});

/**
 * Paddle Price IDs mapped to our plans and billing periods
 *
 * Create these in the Paddle Dashboard or via API:
 * POST https://api.paddle.com/products  (for each plan)
 * POST https://api.paddle.com/prices    (for each plan x period x tier)
 *
 * Naming convention: pri_{planId}_{period} / pri_{planId}_ai_{period}
 */
export const paddlePriceIds: Record<string, Record<string, { standard: string; ai: string }>> = {
  starter: {
    monthly:    { standard: "pri_starter_monthly",     ai: "pri_starter_ai_monthly" },
    quarterly:  { standard: "pri_starter_quarterly",   ai: "pri_starter_ai_quarterly" },
    semiAnnual: { standard: "pri_starter_semiannual",  ai: "pri_starter_ai_semiannual" },
    yearly:     { standard: "pri_starter_yearly",      ai: "pri_starter_ai_yearly" },
  },
  plus: {
    monthly:    { standard: "pri_plus_monthly",        ai: "pri_plus_ai_monthly" },
    quarterly:  { standard: "pri_plus_quarterly",      ai: "pri_plus_ai_quarterly" },
    semiAnnual: { standard: "pri_plus_semiannual",     ai: "pri_plus_ai_semiannual" },
    yearly:     { standard: "pri_plus_yearly",         ai: "pri_plus_ai_yearly" },
  },
  standard: {
    monthly:    { standard: "pri_standard_monthly",    ai: "pri_standard_ai_monthly" },
    quarterly:  { standard: "pri_standard_quarterly",  ai: "pri_standard_ai_quarterly" },
    semiAnnual: { standard: "pri_standard_semiannual", ai: "pri_standard_ai_semiannual" },
    yearly:     { standard: "pri_standard_yearly",     ai: "pri_standard_ai_yearly" },
  },
  pro: {
    monthly:    { standard: "pri_pro_monthly",         ai: "pri_pro_ai_monthly" },
    quarterly:  { standard: "pri_pro_quarterly",       ai: "pri_pro_ai_quarterly" },
    semiAnnual: { standard: "pri_pro_semiannual",      ai: "pri_pro_ai_semiannual" },
    yearly:     { standard: "pri_pro_yearly",          ai: "pri_pro_ai_yearly" },
  },
  proplus: {
    monthly:    { standard: "pri_proplus_monthly",     ai: "pri_proplus_ai_monthly" },
    quarterly:  { standard: "pri_proplus_quarterly",   ai: "pri_proplus_ai_quarterly" },
    semiAnnual: { standard: "pri_proplus_semiannual",  ai: "pri_proplus_ai_semiannual" },
    yearly:     { standard: "pri_proplus_yearly",      ai: "pri_proplus_ai_yearly" },
  },
  premium: {
    monthly:    { standard: "pri_premium_monthly",     ai: "pri_premium_ai_monthly" },
    quarterly:  { standard: "pri_premium_quarterly",   ai: "pri_premium_ai_quarterly" },
    semiAnnual: { standard: "pri_premium_semiannual",  ai: "pri_premium_ai_semiannual" },
    yearly:     { standard: "pri_premium_yearly",      ai: "pri_premium_ai_yearly" },
  },
  business: {
    monthly:    { standard: "pri_business_monthly",    ai: "pri_business_ai_monthly" },
    quarterly:  { standard: "pri_business_quarterly",  ai: "pri_business_ai_quarterly" },
    semiAnnual: { standard: "pri_business_semiannual", ai: "pri_business_ai_semiannual" },
    yearly:     { standard: "pri_business_yearly",     ai: "pri_business_ai_yearly" },
  },
  enterprise: {
    monthly:    { standard: "pri_enterprise_monthly",    ai: "pri_enterprise_ai_monthly" },
    quarterly:  { standard: "pri_enterprise_quarterly",  ai: "pri_enterprise_ai_quarterly" },
    semiAnnual: { standard: "pri_enterprise_semiannual", ai: "pri_enterprise_ai_semiannual" },
    yearly:     { standard: "pri_enterprise_yearly",     ai: "pri_enterprise_ai_yearly" },
  },
};

/**
 * Get Paddle price ID for a plan/period/tier combination
 */
export function getPaddlePriceId(
  planId: string,
  period: string,
  aiEnabled: boolean,
): string | null {
  const plan = paddlePriceIds[planId];
  if (!plan) return null;

  const periodPrices = plan[period];
  if (!periodPrices) return null;

  return aiEnabled ? periodPrices.ai : periodPrices.standard;
}
