import moment from 'moment';

/** Returns moment objects for first day of each week of the month.
 *  Can return moments from previous month if week start is in them.
 *  @param {string|Date|moment} month - any date in a month to create weeks for
 */
const weeksOfMonth = (month) => {
  const thisMonth = month.month();
  const weeks = [];

  month = moment(month).startOf('month').startOf('week');

  do {
    weeks.push(month.clone());
    month.add(1, 'week');
  } while (month.month() === thisMonth);

  return weeks;
};



/** Returns moments for each day that is not in the month, but is part of
 *  weeks that are.
 *  Week contents is locale aware.
 *  @param {string|Date|moment} month - moment any date in the target month
 */
const monthEdges = (month) => {
  const start = moment(month).startOf('month').startOf('week');
  const end = moment(month).endOf('month').endOf('week');

  const result = [];

  while (start.month() !== month.month()) {
    result.push(start.clone());
    start.add(1, 'day');
  }

  while (end.month() !== month.month()) {
    result.push(end.clone());
    end.subtract(1, 'day');
  }

  return result;
};



/** Returns moment objects for each day of the week.
 *  Ordering is locale aware.
 *  @param {string|Date|moment} week - any date in a week to create days for
 */
const daysOfWeek  = (week) => {
  let date = moment(week).startOf('week');

  return new Array(7).fill(0).map((n, i) => date.clone().add(n + i, 'day'));
};


const isWeekday = (day) => {
  return day.weekday() !== 0 && day.weekday() !== 6;
};

export {weeksOfMonth, monthEdges, daysOfWeek, isWeekday}