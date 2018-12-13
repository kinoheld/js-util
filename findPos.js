/**
 * Returns the offset of the Object.
 * http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
 * @param {HTMLElement} $element
 * @return {Number}
 */
function findPos($element) {
  const bodyScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const elemRect = $element.getBoundingClientRect();

  return elemRect.top + bodyScrollTop;
}

export default findPos;
