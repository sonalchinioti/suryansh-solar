// Single source of truth for every rupee figure on the site.
// The calculator and the story breakdowns both call estimate(), so changing a number here updates both.
// ASSUMPTIONS: confirm against real pricing, the NBFC's terms and the current scheme rules.
export const ASSUMPTIONS = {
  tariffPerUnit: 8, // ₹ per kWh
  unitsPerKwMonth: 120, // kWh generated per kW each month
  annualInterest: 0.1, // NBFC loan rate
  loanMonths: 60,
  plantLifeYears: 25,
  home: { costPerKw: 65000, minKw: 1, maxKw: 10, stepKw: 0.5 },
  society: { costPerKw: 50000, minKw: 5, maxKw: 500, stepKw: 5, subsidyPerKw: 18000 },
}

// Central subsidy for a home: ₹30,000 per kW up to 2 kW, ₹18,000 for the third kW, capped at ₹78,000.
function homeSubsidy(kw) {
  if (kw <= 2) return kw * 30000
  return Math.min(78000, 60000 + (kw - 2) * 18000)
}

function roundToStep(value, step) {
  return Math.round(value / step) * step
}

/**
 * @param {number} monthlyBill current electricity bill in ₹
 * @param {'home'|'society'} type
 */
export function estimate(monthlyBill, type = 'home') {
  const a = ASSUMPTIONS
  const cfg = a[type]
  const units = monthlyBill / a.tariffPerUnit
  const kw = Math.min(cfg.maxKw, Math.max(cfg.minKw, roundToStep(units / a.unitsPerKwMonth, cfg.stepKw)))

  const cost = kw * cfg.costPerKw
  const subsidy = type === 'home' ? homeSubsidy(kw) : kw * cfg.subsidyPerKw
  const loan = cost - subsidy

  const r = a.annualInterest / 12
  const emi = (loan * r) / (1 - Math.pow(1 + r, -a.loanMonths))
  const monthlySaving = Math.min(units, kw * a.unitsPerKwMonth) * a.tariffPerUnit

  const lifeMonths = a.plantLifeYears * 12
  return {
    kw,
    cost,
    subsidy,
    loan,
    emi,
    monthlySaving,
    freePowerValue: monthlySaving * (lifeMonths - a.loanMonths), // years after the loan closes
    netGain: monthlySaving * lifeMonths - emi * a.loanMonths,
  }
}

export function formatInr(amount) {
  return '₹' + Math.round(amount).toLocaleString('en-IN')
}

// ₹6.91 lakh, ₹1.04 crore
export function formatLakh(amount) {
  if (amount >= 1e7) return '₹' + (amount / 1e7).toFixed(2) + ' crore'
  if (amount >= 1e5) return '₹' + (amount / 1e5).toFixed(2) + ' lakh'
  return formatInr(amount)
}
