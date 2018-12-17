/**
 * Adds an event listener to the given element and triggers the callback
 * with a reference to this and the element.
 * @param {HTMLElement} $element
 * @param {String} event
 * @param {Function} callback
 * @param {Object} context
 * @return {Integer}
 */
function addEventListener($element, event, callback, context = null) {
  let bound = 0;

  if ($element && event && typeof callback === 'function') {
    if (!$element.nodeName) {
      // Check if its a collection of elements
      bound = $element.length;
      [].forEach.call($element, $el => {
        $el.addEventListener(event, callback.bind(context, $el), false);
      });
    } else if ($element.nodeName) {
      // Or a real node with a name which gets the event listener
      bound = 1;
      $element.addEventListener(event, callback.bind(context, $element), false);
    }
  }

  return bound;
}

export { addEventListener };
