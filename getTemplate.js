import lodashTemplate from 'lodash/template';

/**
 * Returns the template
 * @param {String} templateId
 * @param {Object} imports
 * @return {Function}
 */
export default function getTemplate(templateId, imports = {}) {
  const $domTemplate = document.getElementById(templateId);
  let template = null;

  if ($domTemplate) {
    template = lodashTemplate($domTemplate.innerHTML, {
      imports: Object.assign({}, imports),
    });
  }

  return template;
}
