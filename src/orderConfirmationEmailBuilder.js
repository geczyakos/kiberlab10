export function buildConfirmationEmail(order) {
  return {
    subject: `Order #${order.id} confirmed`,
    body: `Thanks for your order! Total: $${order.total.toFixed(2)}`,
  };
}