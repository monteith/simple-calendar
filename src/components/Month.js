import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import {LabelBar} from './LabelBar';
import {Week} from './Week';
import {Day} from './Day';

import {constructDateURL, monthEdges} from '../dateUtils';


/**
 * Month block in calendar
 * @param {moment|object} date
 * @param {string} view
 * @returns {Component}
 * @constructor
 */
const Month = ({date, view = 'month'}) => {
  let days =
    monthEdges(date)
      .map((day) => <Day key={`day-${day.format('DDD')}`}
                         date={day}
                         view={view}
                         onClick={() => window.location.href = `/view/day/${constructDateURL(day)}`} />);

  return (
    <div className={cx('month', `month--view-${view}`)}>
      <h2 key="month-title">{date.clone().format('MMMM')}</h2>
      <LabelBar view={view} />
      {view === 'month' && (
        <div className="month__days">
          {days}
        </div>
      )}
    </div>
  )
};

Month.displayName = 'Calendar.Month';
Month.propTypes = {
  date: PropTypes.object.isRequired,
  view: PropTypes.string
};

export {Month}