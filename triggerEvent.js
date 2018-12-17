/**
 * Triggers an fake event for the given $element
 * @param {HTMLElement} $element
 * @param {*} eventName
 */
function triggerEvent($element, eventName) {
  const fakeEvent = document.createEvent('Event');
  fakeEvent.initEvent(eventName, true, true);
  $element.dispatchEvent(fakeEvent);
}

export { triggerEvent };
