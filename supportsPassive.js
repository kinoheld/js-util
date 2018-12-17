/**
 * Feature Detection
 * Because older browsers will interpret any object in the 3rd argument as a
 * true value for the capture argument, it's important for developers to use
 * feature detection or a polyfill when using this API, to avoid unforeseen
 * results. Feature detection for specific options can be done as follows:
 * Test via a getter in the options object to see if the passive property is accessed
 * https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */
let supportsPassive = false;

try {
  const opts = Object.defineProperty({}, 'passive', {
    get() {
      supportsPassive = true;
    },
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

export default supportsPassive;
