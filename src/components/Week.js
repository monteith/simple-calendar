import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import moment from 'moment';
import {Day} from './Day';
import {LabelBar} from './LabelBar';

import {daysOfWeek} from '../dateUtils';

/**
 * Week block in calendar
 * @param {moment|object} week
 * @param {string} view
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
        return <Day key={day.date()} date={day} view="week" />
      });

  return (
    <div className={cx('week', `week--view-${view}`)}>
      {view === 'week' && (
        [
          <h2>{`${moment().startOf('week').format('MMM Do')} to ${moment().endOf('week').format('MMM Do')}`}</h2>,
          <LabelBar view={view} weeks={[week]} />
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
  week: PropTypes.object.isRequired
};

export {Week}
