/**
 * Reduces an array of object to an object
 * with keyField as key
 * @param {Array} array
 * @param {String} keyField
 * @return {Object}
 */
export default function arrayToObject(array, keyField) {
  return array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});
}
