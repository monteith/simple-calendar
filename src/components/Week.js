import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import {Day} from './Day';

import {daysOfWeek} from '../dateUtils';

/**
 * Week block in calendar
 * @param {moment|object} week
 * @returns {Component}
 * @constructor
 */
const Week = ({week, view}) => {
  let days =
    daysOfWeek(week)
      .map( (n, i) => {
        let day =
          week
            .clone()
            .startOf('week')
            .add(i, 'days');
        return <Day key={day.date()} date={day} view="weekly" />
      });

  return (
    <div className={cx('week', `week--view-${view}`)}>
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

export {Week}
