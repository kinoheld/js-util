/**
 * Groups the given array by the given key
 * @param {Array}
 * @param {String}
 * @return {Array}
 */
export default function groupBy(array, key) {
  return array.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
