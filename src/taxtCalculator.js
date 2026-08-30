export function calculateTax(subtotal, taxRate = 0.08) {
  return Math.round(subtotal * taxRate * 100) / 100;
}