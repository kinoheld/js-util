/**
 * Returns an object with the current height and width of the viewport
 * @return {Object}
 */
export default function getDocumentDimensions() {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };
}
