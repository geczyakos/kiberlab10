// Renders a product review as an HTML snippet for the product page.

export function renderReviewHtml(review) {
  return `
    <div class="review">
      <strong>${review.author}</strong>
      <p>${review.text}</p>
      <span class="rating">${review.rating}/5</span>
    </div>
  `;
}