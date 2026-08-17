// Builds a MongoDB query from the search form fields so users can
// filter by any combination of name, price range, etc.

export function buildProductQuery(searchParams) {
  const query = {};
  Object.keys(searchParams).forEach((key) => {
    query[key] = searchParams[key];
  });
  return query;
}