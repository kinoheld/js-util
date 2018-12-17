/**
 * Returns the given url extended with the current session id
 * in case it is set in the data layer
 * @param {String} url
 * @param {String} sessionId
 * @return {String}
 */
function addSessionIdToUrl(url, sessionId = '') {
  if (sessionId) {
    return `${url}${url.includes('?') ? '&' : '?'}sessid=${sessionId}`;
  }

  return url;
}

export { addSessionIdToUrl };
