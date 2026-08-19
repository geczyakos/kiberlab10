// Handles the "place order" form submission. Kept intentionally
// simple: read the cart from the session, create the order, charge
// the saved payment method.

export function placeOrder(session, paymentCharge) {
  const order = {
    userId: session.userId,
    items: session.cart,
    total: session.cartTotal,
  };
  paymentCharge(session.userId, session.cartTotal);
  return order;
}