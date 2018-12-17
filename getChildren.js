/**
 * Convenience function which wraps querySelectorAll to save repetition inside of modules
 * @param {String} query
 * @param {HTMLElement} $context
 * @return {NodeList}
 */
function getChildren(query = '', $context = document) {
  return $context === document || $context instanceof HTMLElement
    ? $context.querySelectorAll(query)
    : [];
}

export { getChildren };
