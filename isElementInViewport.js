/**
 * Returns true if the given element is in the viewport
 * @param {HTMLElement}
 * @return {Boolean}
 */
function isElementInViewport($element, offsetY = 0, offsetX = 0) {
  if (!$element || typeof $element.getBoundingClientRect !== 'function') {
    return false;
  }

  const rect = $element.getBoundingClientRect();

  return (
    rect.top >= offsetY * -1 &&
    rect.left >= offsetX * -1 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + offsetY &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth) + offsetX
  );
}

export default isElementInViewport;
