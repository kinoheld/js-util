/**
 * Convenience function which wraps querySelector to save repetition inside of modules
 * @param {String} query
 * @param {HTMLElement} $context
 * @return {HTMLElement}
 */
export default function getChild(query = '', $context = document) {
  return $context === document || $context instanceof HTMLElement
    ? $context.querySelector(query)
    : null;
}
