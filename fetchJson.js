import axios from 'axios';
import store from './../store/store';
import DataLayer from './../services/data-layer/data-layer';

const TYPE_AJAX = 'ajax';
const TYPE_GRAPHQL = 'graphql';
const RESOLVE_FIRST_GROUP = 'first-group';
const RESOLVE_FIRST_RECORD = 'first-record';
const RESOLVE_ALL = 'all';
const GRAPHQL_ENDPOINT = `//${DataLayer.get('config.graphHost')}/graphql/v1/query`;

/**
 * Returns a promise
 */
function fetchJson({
  url = '',
  params = {},
  query = '',
  type = TYPE_AJAX,
  resolveStrategy = RESOLVE_FIRST_GROUP,
}) {
  return new Promise((resolve, reject) => {
    if (type === TYPE_AJAX) {
      axios
        .get(url, {
          params,
        })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          displayError(error);
          reject(error);
        });
    } else if (type === TYPE_GRAPHQL) {
      axios
        .post(
          GRAPHQL_ENDPOINT,
          {
            query: query.replace(/[\n\r]/g, ''),
            variables: params,
          },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        )
        .then(({ data }) => {
          if (data.errors) {
            displayError(data.errors);
            return reject(data.errors);
          }

          if (resolveStrategy === RESOLVE_FIRST_GROUP) {
            const keys = Object.keys(data.data);
            resolve(data.data[keys[0]]);
          } else if (resolveStrategy === RESOLVE_FIRST_RECORD) {
            const keys = Object.keys(data.data);
            resolve(data.data[keys[0]].shift());
          } else {
            // RESOLVE_ALL
            resolve(data.data);
          }
        })
        .catch((error) => {
          displayError(error);
          reject(error);
        });
    }
  });
}

/**
 * Displays an error modal
 * @param {Object} error
 */
function displayError(error) {
  let body;

  if (error.length) {
    // graphql returns an errors array with message as key
    body = `<ul>${error.map(e => `<li>${e.message}</li>`)}</ul>`;
  } else if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    body =
      typeof error.response.data === 'object' && error.response.data.message
        ? error.response.data.message
        : error.response.data;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    body = error.request;
  } else {
    // Something happened in setting up the request that triggered an Error
    body = error.message;
  }

  store.dispatch('modal/openModal', { body });
}

/**
 * Returns an array of the given object with key and value for each param.
 * @param {Object} parameters
 * @return {Array}
 */
function buildUrlParameters(parameters) {
  return Object.keys(parameters).map(key => ({ key, value: parameters[key] }));
}

export {
  fetchJson,
  displayError,
  buildUrlParameters,
  TYPE_AJAX,
  TYPE_GRAPHQL,
  RESOLVE_FIRST_GROUP,
  RESOLVE_FIRST_RECORD,
  RESOLVE_ALL,
};
