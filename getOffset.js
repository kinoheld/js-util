/**
 * Returns the offset of the Object.
 * http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
 * @param {HTMLElement} $element
 * @return {Object}
 */
export default function getOffset($element) {
  const bodyScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  const bodyScrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft;
  const elemRect = $element.getBoundingClientRect();

  return {
    top: elemRect.top + bodyScrollTop,
    left: elemRect.left + bodyScrollLeft,
  };
}
