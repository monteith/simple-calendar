import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import {LabelBar} from './LabelBar';
import {Week} from './Week';
import {Day} from './Day';

import {weeksOfMonth, monthEdges} from '../dateUtils';


/**
 * Month block in calendar
 * @param {moment|object} month
 * @param {string} view
 * @returns {Component}
 * @constructor
 */
const Month = ({month, view = 'monthly'}) => {
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
        return <Week key={week.date()} week={week} view={view} />
      });

  return (
    <div className={cx('month', `month--view-${view}`)}>
      <LabelBar view={view} weeks={weeks} />
      {view === 'monthly' && (
        <div className="month__days">
          {days}
        </div>
      )}
      {view === 'weekly' && (
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