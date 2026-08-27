// Validates a gift card PIN entered at checkout against the one on
// file.

export function isValidGiftCardPin(storedPin, enteredPin) {
  return storedPin == enteredPin;
}