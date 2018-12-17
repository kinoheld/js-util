/**
 * Renders the given template with passed params
 * and returns the generated dom node
 * @param {Object} template
 * @param {Object} params
 * @return {HTMLElement}
 */
export default function renderTemplate(template, params = {}) {
  let $renderedNode = null;

  if (template && typeof template === 'function') {
    const $element = document.createElement('div');

    $element.innerHTML = template(params);
    $renderedNode = $element.firstElementChild;
  }

  return $renderedNode;
}
