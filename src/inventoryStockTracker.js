export function createStockTracker() {
  const stock = new Map();
  return {
    setStock(productId, qty) {
      stock.set(productId, qty);
    },
    getStock(productId) {
      return stock.get(productId) || 0;
    },
    decrement(productId, qty) {
      const current = stock.get(productId) || 0;
      stock.set(productId, Math.max(0, current - qty));
    },
  };
}