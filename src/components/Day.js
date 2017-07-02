import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import {isWeekday} from '../dateUtils';
import {hoursOfDay} from '../timeUtils';

import {Toolbar} from './Toolbar';
import {LabelBar} from './LabelBar';


/**
 * Day block in calendar
 * @param {moment|object} date
 * @param {function} setFocus
 * @param {string} view
 * @returns {Component}
 * @constructor
 */
const Day = ({date, view = 'day', setFocus, ...rest}) => {
  let dayClasses = [
    'day',
    {'day--weekend' : !isWeekday(date)},
    `day--view-${view}`
  ];

  let hours =
      <div key='hours' className="hours">
        {hoursOfDay().map(hour => <div className="hours__hour" key={`hour-${hour.format('H')}`} />)}
      </div>;

  return (
    <div className={cx(dayClasses)} {...rest}>
      {view === 'day' && (
        <Toolbar date={date}
                 view={view}
                 prev={() => setFocus(date.clone().subtract(1, 'day'))}
                 next={() => setFocus(date.clone().add(1, 'day'))} />
      )}
      {view !== 'day' && (
        <span className={`day__date ${date.format('DDD') === moment().format('DDD')
          ? 'day__date--today'
          : ''}`}>{date.date()}</span>
      )}
      {view === 'day' && [<LabelBar key={'labelbar'} view={view} />, hours]}
    </div>
  );
};

Day.displayName = 'Calendar.Day';
Day.propTypes = {
  date: PropTypes.object.isRequired,
  setFocus: PropTypes.func.isRequired,
  view: PropTypes.string
};

export {Day}