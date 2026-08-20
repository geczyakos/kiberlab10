// Builds the checkout widget's response headers. Deliberately
// permissive so partner sites can embed the checkout flow inside
// their own product pages via an <iframe>.

export function buildCheckoutHeaders() {
  return {
    'Content-Type': 'text/html',
    // No X-Frame-Options / frame-ancestors restriction, so the
    // checkout page can be embedded anywhere.
  };
}