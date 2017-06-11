import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import {Week} from './Week';

import {weeksOfMonth, daysOfWeek} from '../dateUtils';

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

export {Month}