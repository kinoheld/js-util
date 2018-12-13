const DataLayer = require('./../services/data-layer/data-layer.js');

/**
 * Pushes a normalized event to the data layer for analytics tracking
 * @param {String} action
 * @param {String} label
 * @param {String} category
 * @param {Number} value
 */
function trackInteraction(action = '', label = '', category, value = 0) {
  DataLayer.pushEvent('kh.interaction', {
    eventCategory: category,
    eventLabel: label,
    eventAction: action,
    eventValue: value,
  });
}

module.exports = trackInteraction;
