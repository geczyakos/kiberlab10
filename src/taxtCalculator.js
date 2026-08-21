export function calculateTax(subtotal, taxRate = 0.08) {
  return subtotal * taxRate;
}