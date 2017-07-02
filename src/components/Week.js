import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

import {constructDateURL} from '../dateUtils';

import {Toolbar} from './Toolbar';
import {Day} from './Day';
import {LabelBar} from './LabelBar';

import {daysOfWeek} from '../dateUtils';


/**
 * Week block in calendar
 * @param {moment|object} date
 * @param {function} setFocus
 * @param {string} view
 * @returns {Component}
 * @constructor
 */
const Week = ({date, view = 'week', setFocus}) => {
  let days =
    daysOfWeek(date)
      .map( (n, i) => {
        let day =
          date
            .clone()
            .startOf('week')
            .add(i, 'days');
        return <Day key={day.date()}
                    date={day} view="week"
                    setFocus={setFocus}
                    onClick={() => window.location.href = `/view/day/${constructDateURL(day)}`} />
      });

  return (
    <div className={cx('week', `week--view-${view}`)}>
      {view === 'week' && (
        [
          <Toolbar date={date}
                   view={view} key="week-header"
                   prev={() => setFocus(date.clone().subtract(1, 'week')) }
                   next={() => setFocus(date.clone().add(1, 'week'))} />,
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
  date: PropTypes.object.isRequired,
  setFocus: PropTypes.func.isRequired,
  view: PropTypes.string
};

export {Week}
