/**
 * Returns an object of with the camelCased version of the
 * data attributes of the given element. In case there is no
 * value set for the attribute, or if it will be interpreted as truthy.
 * If the value is set to 'true' or 'false' the value will be converted to a
 * boolean.
 * @param {HTMLElement} $element
 * @param {object}
 */
export default function getDataAttributes($element) {
  const attributes = [];

  if ($element && $element.attributes) {
    [...$element.attributes].forEach(attr => {
      if (/^data-/.test(attr.name)) {
        const camelCaseName = attr.name
          .substr(5)
          .replace(/-(.)/g, ($0, $1) => $1.toUpperCase());

        // in case only the data attribute is set, interpret it as a boolean and set it to true
        let value = attr.value.length ? attr.value : true;

        if (value === 'true' || value === 'false') {
          value = value === 'true';
        }

        attributes[camelCaseName] = value;
      }
    });
  }

  return attributes;
}
