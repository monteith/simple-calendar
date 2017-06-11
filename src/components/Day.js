import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import {isWeekday} from '../dateUtils';


/**
 * Day block in calendar
 * @param {moment|object} date
 * @param {string} view
 * @returns {Component}
 * @constructor
 */
const Day = ({date, view = 'day'}) => {
  let dayClasses = [
    'day',
    {'day--weekend' : !isWeekday(date)},
    `day--view-${view}`
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
  date: PropTypes.object.isRequired,
  view: PropTypes.string
};

export {Day}