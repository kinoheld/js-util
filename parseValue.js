/**
 * Returns parseInt of subject if it is a number
 * or the fallback provided
 * @param {*} subject
 * @param {number} fallback
 */
export default function parseValue(subject, fallback = 0) {
  const parsedSubject = parseInt(subject, 10);

  return isNaN(parsedSubject) ? fallback : parsedSubject;
}
