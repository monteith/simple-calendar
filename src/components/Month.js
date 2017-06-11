import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import {Week} from './Week';
import {Day} from './Day';

import {weeksOfMonth, monthEdges, daysOfWeek} from '../dateUtils';

const getDayLabels = () =>
  daysOfWeek(moment())
    .map( (day) =>
      <div key={`label-${day.format('ddd')}`}
           className="month__label month__label--day">
        {day.format('ddd')}
      </div> );

/**
 * Month block in calendar
 * @param {moment|object} month
 * @param {string} view
 * @returns {Component}
 * @constructor
 */
const Month = ({month, view = 'days'}) => {
  let labels = getDayLabels();

  let days =
    monthEdges(month)
      .map((day) => <Day key={`day-${day.format('DDD')}`} date={day} view={view} />);

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
      {view === 'days' && (
        <div className="month__days">
          {days}
        </div>
      )}
      {view === 'weeks' && (
        <div className="month__weeks">
          {weeks}
        </div>
      )}
    </div>
  )
};

Month.displayName = 'Calendar.Month';
Month.propTypes = {
  month: PropTypes.object.isRequired,
  view: PropTypes.string
};

export {Month}