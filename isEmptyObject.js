/**
 * Returns true if the passed object has no own keys
 * @param {Object} obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

export default isEmptyObject;
