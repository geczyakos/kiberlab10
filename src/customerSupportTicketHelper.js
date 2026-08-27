export function createSupportTicket(userId, subject, message) {
  return { userId, subject, message, createdAt: Date.now(), status: 'open' };
}