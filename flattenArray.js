/**
 * Flattens the given array
 * @param {Array} list
 * @return {Array}
 */
function flattenArray(list) {
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flattenArray(b) : b), []);
}

export default flattenArray;
