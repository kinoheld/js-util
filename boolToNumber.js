/**
 * Returns the given value as number in case a boolean is passed
 * @param {*} value
 * @return {Number|*}
 */
export default function boolToNumber(value) {
  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  return value;
}
