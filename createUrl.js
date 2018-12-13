/**
 * Returns the url with all key/values appended
 * and if set, converts true and false into 0 and 1.
 * https://stackoverflow.com/questions/7820683/convert-boolean-result-into-number-integer
 * @param {String} url
 * @param {Object} params
 * @param {Boolean} convertBooleans
 * @return {String}
 */
function createUrl(url, params = {}, convertBooleans = false) {
  const urlParams = Object.keys(params).map((key) => {
    let value = params[key];

    if (convertBooleans && (value === true || value === false)) {
      value = +value;
    }

    return `${key}=${value}`;
  });

  return `${url}${url.includes('?') ? '&' : '?'}${urlParams.join('&')}`;
}

export default createUrl;
