/**
 * Returns an object containg all parameters from the given url.
 * @param {String} url
 * @return {Object}
 */
export default function getParams(url) {
  if (!url.includes('?')) {
    return {};
  }

  return url
    .split('?')
    .reverse()[0]
    .split('&')
    .reduce((params, param) => {
      const [key, value] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, {});
}
