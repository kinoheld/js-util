/**
 * Returns the week nzmver for the given date
 * @param {String} isoDay
 * @return {Number}
 */
function getWeek(isoDay) {
  const date = new Date(isoDay);
  const week1 = new Date(date.getFullYear(), 0, 4);

  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));

  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
}

export { getWeek };
