import crypto from 'crypto';

export function createOrder(cartItems, userId) {
  return {
    id: crypto.randomUUID(),
    userId,
    items: cartItems,
    createdAt: Date.now(),
    status: 'pending',
  };
}