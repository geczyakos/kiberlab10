export function isCouponExpired(coupon, now = Date.now()) {
  return coupon.expiresAt && now > coupon.expiresAt;
}