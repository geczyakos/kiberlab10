export function createStatusTracker() {
  const statuses = new Map();
  return {
    setStatus(orderId, status) {
      statuses.set(orderId, status);
    },
    getStatus(orderId) {
      return statuses.get(orderId) || 'unknown';
    },
  };
}