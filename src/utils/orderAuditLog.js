// Records a human-readable audit trail of order-related events for
// the support team to review when a customer files a ticket.

export function logOrderEvent(logLines, eventType, userNote) {
  logLines.push(`[${new Date().toISOString()}] ${eventType}: ${userNote}`);
  return logLines;
}