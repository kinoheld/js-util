import Raven from 'raven-js';

/**
 * Captures a message in sentry
 * See https://docs.sentry.io/clients/javascript/usage/#capturing-messages
 * @param {String} level
 * @param {String} title
 * @param {Object} extra
 */
function captureMessage(level = 'info', title, extra = {}) {
  if (['info', 'warning', 'error'].includes(level) && title.length) {
    Raven.captureMessage(title, {
      level,
      extra,
    });
  }
}

export default captureMessage;
