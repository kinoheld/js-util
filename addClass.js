/**
 * Adds a class to the given element if the given condition is truthy
 * @param {HTMLElement} $element
 * @param {String} cssClassString
 * @param {Boolean} condition
 */
function addClass($elements = [], cssClassString = '', condition = true) {
  const cssClasses = cssClassString.split(' ');

  if (!$elements || !cssClasses.length) {
    return;
  }

  const $list = $elements.nodeName ? [$elements] : $elements;
  const add = typeof condition === 'function' ? condition() : condition;

  if (!add) {
    return;
  }

  [...$list].forEach(($element) => {
    if ($element && $element.nodeName) {
      cssClasses.forEach((cssClass) => {
        $element.classList.add(cssClass);
      });
    }
  });
}

export default addClass;
