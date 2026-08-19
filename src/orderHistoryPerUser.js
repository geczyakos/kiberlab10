export function getOrderHistory(orders, userId) {
  return orders.filter((order) => order.userId === userId);
}