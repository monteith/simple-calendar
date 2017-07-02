import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import {Toolbar} from './Toolbar';
import {LabelBar} from './LabelBar';
import {Day} from './Day';

import {constructDateURL, monthEdges} from '../dateUtils';


/**
 * Month block in calendar
 * @param {moment|object} date
 * @param {function} setFocus
 * @param {string} view
 * @returns {Component}
 * @constructor
 */
const Month = ({date, view = 'month', setFocus}) => {
  let days =
    monthEdges(date)
      .map((day) => <Day key={`day-${day.format('DDD')}`}
                         date={day}
                         view={view}
                         setFocus={setFocus}
                         onClick={() => window.location.href = `/view/day/${constructDateURL(day)}`} />);

  return (
    <div className={cx('month', `month--view-${view}`)}>
      <Toolbar date={date} view={view}
               prev={() => setFocus(date.clone().subtract(1, 'month'))}
               next={() => setFocus(date.clone().add(1, 'month'))} />
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
  setFocus: PropTypes.func.isRequired,
  view: PropTypes.string
};

export {Month}