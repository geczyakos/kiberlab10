# commerce-toolkit

A small, dependency-light e-commerce helper library for Node.js:
cart, orders, coupons, checkout, and related utilities.

## Installation

```
npm install commerce-toolkit
```

## Utilities

- `createCart` / `calculateCartTotal` – cart state and totals
- `createCatalog` / `searchByCategory` / `buildProductQuery` – product catalog and search
- `renderReviewHtml` / `computeAverageRating` – reviews
- `createStockTracker` – inventory tracking
- `createOrder` / `createStatusTracker` / `getOrderHistory` – orders
- `generateCouponCode` / `redeemCoupon` / `isCouponExpired` / `applyDiscount` – coupons
- `placeOrder` – checkout
- `buildCheckoutHeaders` – checkout widget embedding
- `calculateShipping` / `calculateTax` – order cost breakdown
- `buildSessionCookie` – session cookie building
- `isValidCardNumber` – payment method validation (Luhn check)
- `buildConfirmationEmail` – order confirmation email
- `buildResetLink` – password reset link building
- `createWishlist` – wishlist support
- `logOrderEvent` – order audit logging
- `recommendByCategory` – product recommendations
- `createRefundRequest` / `cancelOrder` – post-purchase actions
- `isValidGiftCardPin` – gift card PIN validation
- `createSupportTicket` – customer support tickets
- `generatePromoLink` – promotional discount links
- `buildGalleryUrls` – product image galleries
- `formatCurrency` / `validateAddress` – misc formatting/validation

## Usage

```js
import { createCart, calculateCartTotal } from 'commerce-toolkit';

const cart = createCart();
cart.addItem('sku-123', 2);
calculateCartTotal(cart.getItems(), { 'sku-123': 19.99 });
```

## License

MIT