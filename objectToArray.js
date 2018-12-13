/**
 * Returns an array from the given object
 * @param {Object} object
 * @return {Array}
 */
function objectToArray(object = {}) {
  return Object.keys(object).map(k => object[k]);
}

export default objectToArray;
