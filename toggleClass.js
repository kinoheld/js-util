import addClass from './addClass';
import removeClass from './removeClass';
import hasClass from './hasClass';

/**
 * Adds or removes a class from the given element if the given condition is truthy
 * @param {Array} $elements
 * @param {String} cssClass
 * @param {Boolean} condition
 */
function toggleClass($elements = [], cssClass = '', condition = undefined) {
  if (!$elements || !cssClass) {
    return;
  }

  const $list = $elements.nodeName ? [$elements] : $elements;

  [...$list].forEach($element => {
    if ($element && $element.nodeName && cssClass) {
      const classShouldBeAdded =
        typeof condition !== 'undefined'
          ? condition
          : !hasClass($element, cssClass);

      if (classShouldBeAdded) {
        addClass($element, cssClass);
      } else {
        removeClass($element, cssClass);
      }
    }
  });
}

export default toggleClass;
