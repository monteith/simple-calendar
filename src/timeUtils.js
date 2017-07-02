import moment from 'moment';

/**
 * Return a moment date for each hour in provided range
 * @param start
 * @param finish
 * @returns {Array}
 */
const hoursOfDay = (start = 0, finish = 24, step = 1) => {
  let limit = Math.abs(finish - start);

  let i, hours = [];

  for (i = start; i <= limit; i += step) {
    hours.push( moment().hour(i).minute(0) );
  }

  return hours;
};

export {hoursOfDay};