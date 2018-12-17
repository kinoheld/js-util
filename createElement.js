/**
 * Creates a new dom node of the given type,
 * with the passed attributes and eventually with the passed content.
 * @param {String} type
 * @param {Object} attributes
 * @param {String} content
 * @return {HTMLElement}
 */
function createElement(type, attributes = {}, content = '') {
  const $element = document.createElement(type);

  Object.keys(attributes).forEach(attribute => {
    $element.setAttribute(attribute, attributes[attribute]);
  });

  if (content.length) {
    $element.innerHTML = content;
  }

  return $element;
}

export { createElement };
