export function calculateCartTotal(cartItems, priceLookup) {
  return cartItems.reduce((total, item) => total + (priceLookup[item.productId] || 0) * item.quantity, 0);
}