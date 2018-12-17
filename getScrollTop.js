/**
 * Returns the current scroll position of the viewport
 * @return {Number}
 */
export default function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}
