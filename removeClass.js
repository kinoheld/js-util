/**
 * Removes a class from the given element if the given condition is truthy
 * @param {Array} $elements
 * @param {String} cssClassString
 * @param {Boolean} condition
 */
function removeClass($elements = [], cssClassString = '', condition = true) {
  const cssClasses = cssClassString.split(' ');

  if (!$elements || !cssClasses.length) {
    return;
  }

  const $list = $elements.nodeName ? [$elements] : $elements;
  const remove = typeof condition === 'function' ? condition() : condition;

  if (!remove) {
    return;
  }

  [...$list].forEach($element => {
    if ($element && $element.nodeName) {
      cssClasses.forEach(cssClass => {
        $element.classList.remove(cssClass);
      });
    }
  });
}

export default removeClass;
