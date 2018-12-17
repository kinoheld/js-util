/**
 * Returns true if the passed object has no own keys
 * @param {Object} obj
 * @return {Boolean}
 */
export default function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}
