export function buildGalleryUrls(productId, imageCount) {
  return Array.from({ length: imageCount }, (_, i) => `/products/${productId}/image-${i + 1}.jpg`);
}