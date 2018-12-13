/**
 * Checks if the given element has the given class.
 * To support the search for multiple classes in one lookup, cssClassString gets split
 * into an array. It supports a syntax like hasClas($myElement, 'class1 class2 class3');
 * @param {HTMLElement} $element
 * @param {String} cssClassString
 * @return {Boolean}
 */
function hasClass($element = null, cssClassString = '') {
  const elementClasses = [...$element.classList];
  const cssClasses = cssClassString.split(' ');
  let found = false;

  if ($element && elementClasses.length && cssClasses.length) {
    found = cssClasses.every(cssClass => elementClasses.includes(cssClass));
  }

  return found;
}

export default hasClass;
