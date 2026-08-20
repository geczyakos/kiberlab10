const RATES = { standard: 5, express: 15, overnight: 30 };

export function calculateShipping(method = 'standard') {
  return RATES[method] ?? RATES.standard;
}