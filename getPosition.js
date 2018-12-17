/**
 * Returns the index of an element with siblings
 *
 * @param {NodeList} $haystack
 * @param {String} needle
 * @return {Integer}
 */
export default function getPosition($haystack, needle) {
  let index = -1;

  if ($haystack && needle) {
    const $ref = $haystack.querySelector(needle);

    if ($ref) {
      index = [].slice.call($ref.parentNode.children).indexOf($ref);
    }
  }

  return index;
}
