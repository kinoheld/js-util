import lodashThrottle from 'lodash/throttle';

/**
 * Returns a throttled version of the given function
 * @param {Function} func The function to throttled.
 * @param {number} wait The number of milliseconds to delay.
 * @param {Object} options The options object.
 * @return {Function}
 */
function throttle(func, wait = 0, options = {}) {
  return lodashThrottle(func, wait, options);
}

export { throttle };
