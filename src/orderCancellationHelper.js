export function cancelOrder(order) {
  if (order.status === 'shipped') {
    throw new Error('Cannot cancel a shipped order');
  }
  order.status = 'cancelled';
  return order;
}