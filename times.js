import lodashTimes from 'lodash/times';

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argumentindex).
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 */
function times(n, iteratee) {
  return lodashTimes(n, iteratee);
}

export { times };
