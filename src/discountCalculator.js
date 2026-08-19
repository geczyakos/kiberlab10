export function applyDiscount(total, discountPercent) {
  const clamped = Math.min(100, Math.max(0, discountPercent));
  return total * (1 - clamped / 100);
}