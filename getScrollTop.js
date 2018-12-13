/**
 * Returns the current scroll position of the viewport
 * @return {Number}
 */
function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}

export default getScrollTop;
