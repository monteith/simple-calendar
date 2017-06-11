import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import {weeksOfMonth, daysOfWeek, isWeekday} from './dateUtils';

/**
 * Day block in calendar
 * @param {moment|object} date
 * @returns {Component}
 * @constructor
 */
const Day = ({date}) => {
  let dayClasses = [
    'day',
    {'day--weekend' : !isWeekday(date)}
  ];

  return (
    <div className={cx(dayClasses)}>
      <span className={`day__date ${date.format('DDD') === moment().format('DDD')
        ? 'day__date--today'
        : ''}`}>{date.date()}</span>
    </div>
  );
};

Day.displayName = 'Calendar.Day';
Day.propTypes = {
  date: PropTypes.object.isRequired
};


/**
 * Week block in calendar
 * @param {moment|object} week
 * @returns {Component}
 * @constructor
 */
const Week = ({week}) => {
  let days =
    daysOfWeek(week)
      .map( (n, i) => {
        let day =
          week
            .clone()
            .startOf('week')
            .add(i, 'days');
        return <Day key={day.date()} date={day} />
      });

  return (
    <div className="week">
      <div className="week__days">
        {days}
      </div>
    </div>
  );
};

Week.displayName = 'Calendar.Week';
Week.propTypes = {
  week: PropTypes.object.isRequired
};


/**
 * Month block in calendar
 * @param {moment|object} month
 * @returns {Component}
 * @constructor
 */
const Month = ({month}) => {
  let labels =
    daysOfWeek(moment())
      .map( (day) =>
        <div key={`label-${day.format('ddd')}`}
             className="month__label month__label--day">
          {day.format('ddd')}
        </div> );

  let weeks =
    weeksOfMonth(month)
      .map((n,i) => {
        let week =
          month
            .clone()
            .startOf('month')
            .add(i, 'weeks');
        return <Week key={week.date()} week={week} />
      });

  return (
    <div className="month">
      <div className="month__labels">
        {labels}
      </div>
      <div className="month__weeks">
        {weeks}
      </div>
    </div>
  )
};

Month.displayName = 'Calendar.Month';
Month.propTypes = {
  month: PropTypes.object.isRequired
};







export {Day, Week, Month};