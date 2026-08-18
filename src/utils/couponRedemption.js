// Redeems a single-use coupon: checks it hasn't been used yet, then
// marks it as used.

export async function redeemCoupon(couponStore, code) {
  const coupon = await couponStore.get(code);
  if (!coupon || coupon.used) {
    throw new Error('Coupon invalid or already used');
  }

  // A little async work happens here in the real flow (calculating
  // the discount, applying it to the order) before we persist the
  // "used" flag.
  await new Promise((resolve) => setTimeout(resolve, 0));

  coupon.used = true;
  await couponStore.save(coupon);
  return coupon;
}