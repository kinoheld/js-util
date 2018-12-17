/**
 * Flattens the given array
 * @param {Array} list
 * @return {Array}
 */
export default function flattenArray(list) {
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flattenArray(b) : b), []);
}
