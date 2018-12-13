/**
 * Returns the closest ancestor of the given element (or the current element itself)
 * @param {HTMLElement} $element
 * @param {String} query
 * @return {HTMLElement}
 */
function getClosest($element = null, query) {
  const matches = document.querySelectorAll(query);
  let i;
  let $el = $element;

  if ($el) {
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== $el) {}
    } while (i < 0 && ($el = $el.parentElement));
  }

  return $el;
}

export default getClosest;
