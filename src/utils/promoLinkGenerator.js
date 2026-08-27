import crypto from 'crypto';

// Generates a one-time promotional discount link to include in
// marketing emails, e.g. a limited-time 20% off offer.

export function generatePromoLink(userId) {
  const code = crypto.randomBytes(8).toString('hex');
  return { code, userId, discountPercent: 20 };
}