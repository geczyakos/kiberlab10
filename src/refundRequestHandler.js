export function createRefundRequest(orderId, reason) {
  return { orderId, reason, status: 'pending', requestedAt: Date.now() };
}