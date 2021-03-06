/**
 * Formats the price to a string with euro sign included
 * @param {Number} value
 * @return {String}
 */
export default function formatPrice(value) {
  return value && !isNaN(value)
    ? `${String(value.toFixed(2)).replace('.', ',')} €`
    : '';
}
