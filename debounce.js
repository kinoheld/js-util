import lodashDebounce from 'lodash/debounce';

/**
 * Returns a debounced version of the given function
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @param {Object} options The options object.
 * @return {Function}
 */
function debounce(func, wait = 0, options = {}) {
  return lodashDebounce(func, wait, options);
}

export default debounce;
