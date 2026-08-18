import crypto from 'crypto';

export function generateCouponCode(prefix = 'SAVE') {
  const suffix = crypto.randomBytes(4).toString('hex').toUpperCase();
  return `${prefix}-${suffix}`;
}