export function createCart() {
  const items = new Map();
  return {
    addItem(productId, quantity = 1) {
      items.set(productId, (items.get(productId) || 0) + quantity);
    },
    removeItem(productId) {
      items.delete(productId);
    },
    updateQuantity(productId, quantity) {
      if (quantity <= 0) items.delete(productId);
      else items.set(productId, quantity);
    },
    getItems() {
      return Array.from(items.entries()).map(([productId, quantity]) => ({ productId, quantity }));
    },
  };
}