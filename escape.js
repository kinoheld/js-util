import lodashEscape from 'lodash/escape';

/**
 * Returns an escaped string using the lodash escape method
 * @TODO: replace the lodash method with a smaller one
 * @param {String} value
 * @return {String}
 */
function escape(value) {
  return lodashEscape(value);
}

export { escape };
