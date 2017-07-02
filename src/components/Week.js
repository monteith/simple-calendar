import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import {Day} from './Day';
import {LabelBar} from './LabelBar';

import {daysOfWeek} from '../dateUtils';

/**
 * Week block in calendar
 * @param {moment|object} date
 * @param {string} view
 * @returns {Component}
 * @constructor
 */
const Week = ({date, view}) => {
  let days =
    daysOfWeek(date)
      .map( (n, i) => {
        let day =
          date
            .clone()
            .startOf('week')
            .add(i, 'days');
        return <Day key={day.date()} date={day} view="week" />
      });

  return (
    <div className={cx('week', `week--view-${view}`)}>
      {view === 'week' && (
        [
          <h2 key="week-title">{`${date.clone().startOf('week').format('MMM Do')} to ${date.clone().endOf('week').format('MMM Do')}`}</h2>,
          <LabelBar key="week-labels" view={view} weeks={[date]} />
        ]
      )}
      <div className="week__days">
        {days}
      </div>
    </div>
  );
};

Week.displayName = 'Calendar.Week';
Week.propTypes = {
  date: PropTypes.object.isRequired
};

export {Week}
