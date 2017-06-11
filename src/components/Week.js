import React from 'react';
import PropTypes from 'prop-types';

import {Day} from './Day';

import {daysOfWeek} from '../dateUtils';

/**
 * Week block in calendar
 * @param {moment|object} week
 * @returns {Component}
 * @constructor
 */
const Week = ({week}) => {
  let days =
    daysOfWeek(week)
      .map( (n, i) => {
        let day =
          week
            .clone()
            .startOf('week')
            .add(i, 'days');
        return <Day key={day.date()} date={day} />
      });

  return (
    <div className="week">
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
