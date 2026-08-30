import { createCart } from '../src/cartStore';
import { calculateCartTotal } from '../src/cartTotalCalculator';

test('adds, updates, and removes cart items', () => {
  const cart = createCart();
  cart.addItem('p1', 2);
  cart.addItem('p1', 1);
  expect(cart.getItems()).toEqual([{ productId: 'p1', quantity: 3 }]);

  cart.updateQuantity('p1', 0);
  expect(cart.getItems()).toEqual([]);
});

test('calculates cart total from price lookup', () => {
  const items = [{ productId: 'p1', quantity: 2 }, { productId: 'p2', quantity: 1 }];
  const prices = { p1: 10, p2: 5 };
  expect(calculateCartTotal(items, prices)).toBe(25);
});