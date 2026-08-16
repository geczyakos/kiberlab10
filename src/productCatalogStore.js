export function createCatalog() {
  const products = new Map();
  let nextId = 1;
  return {
    add(product) {
      const id = nextId++;
      products.set(id, { id, ...product });
      return id;
    },
    get(id) {
      return products.get(id);
    },
    all() {
      return Array.from(products.values());
    },
  };
}