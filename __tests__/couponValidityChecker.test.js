import { isCouponExpired } from '../src/couponValidityChecker';

test('detects an expired coupon', () => {
  const coupon = { expiresAt: 1000 };
  expect(isCouponExpired(coupon, 2000)).toBe(true);
});

test('treats a coupon without expiresAt as never expiring', () => {
  expect(isCouponExpired({}, Date.now())).toBe(false);
});