export function searchByCategory(catalog, category) {
  return catalog.all().filter((p) => p.category === category);
}