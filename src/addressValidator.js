export function validateAddress({ street, city, zip }) {
  const errors = {};
  if (!street) errors.street = 'Street is required';
  if (!city) errors.city = 'City is required';
  if (!zip || !/^\d{4,10}$/.test(zip)) errors.zip = 'Invalid zip code';
  return { valid: Object.keys(errors).length === 0, errors };
}