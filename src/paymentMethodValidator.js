export function isValidCardNumber(number) {
  const digits = String(number).replace(/\D/g, '').split('').reverse().map(Number);
  let sum = 0;
  digits.forEach((digit, i) => {
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  });
  return sum % 10 === 0;
}