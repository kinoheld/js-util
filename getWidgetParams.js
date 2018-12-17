import getParams from './getParams';

/**
 * Returns an object containg all widget parameters from the given url.
 * @param {String} url
 * @return {Object}
 */
function getWidgetParams(url) {
  const allowedKeys = [
    'ref', // referrer
    'mode', // mode=widget
    'appView', // app
    'cid', // encoded cinema id (can be a comma separated list of encoded cinema ids aswell)
    'rb', // reservation button (enable reservation)
    'labels', // comma separated list of labels for the playtimes
    'layout', // initial layout
    'layouts', // available layouts
    'target', // target
    'design', // design param
    'sessid', // sessionid

    // filters for shows overview
    'showName',
    'startDate',
    'endDate',
    'date',
    'flags',
    'timeOfDay',
    'period',
    'movieIds',

    // hide custom elements of the ui
    'hideTitle', // title in shows overview
    'hideControls', // layout control buttons
    'hideFilters', // active filters
    'hideTrailer', // trailer button
    'hideEmptyPlaytimes', // empty playtimes in schedule
  ];
  const params = getParams(url);

  return Object.keys(params)
    .filter(key => allowedKeys.includes(key))
    .reduce((obj, key) => {
      obj[key] = params[key];
      return obj;
    }, {});
}

export default getWidgetParams;
