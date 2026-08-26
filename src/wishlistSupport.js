export function createWishlist() {
  const items = new Set();
  return {
    add(productId) {
      items.add(productId);
    },
    remove(productId) {
      items.delete(productId);
    },
    all() {
      return Array.from(items);
    },
  };
}