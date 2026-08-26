export function recommendByCategory(catalog, category, excludeId, limit = 5) {
  return catalog.all()
    .filter((p) => p.category === category && p.id !== excludeId)
    .slice(0, limit);
}