import React from 'react';
import moment from 'moment';

import {daysOfWeek} from '../dateUtils';
import {hoursOfDay} from '../timeUtils';

const getDayLabels = () =>
  daysOfWeek(moment())
    .map( day =>
      <div key={`label-${day.format('ddd')}`}
           className="labels__label labels__label--day">
        <span>{day.format('ddd')}</span>
      </div> );

const getHourLabels = () =>
  hoursOfDay()
    .map(hour =>
      <div key={`label-${hour.format('H')}`} className="labels__label labels__label--hour">
        <span>{hour.format('h:mma')}</span>
      </div>
    );

const LabelBar = ({view, weeks}) => {
  let el = <div />;

  switch (view) {
    case 'month':
      el = (
        <div className="labels labels--view-month">
          {getDayLabels()}
        </div>
      );
      break;
    case 'week':
      el = (
        <div className="labels labels--view-week">
          {weeks.map( (n, i) => (
            <div className="labels__group" key={`week-label-${i}`}>
              {getDayLabels()}
            </div>
          ))}
        </div>
      );
      break;
    case 'day':
      el = (
        <div className="labels labels--view-day">
          {getHourLabels()}
        </div>
      );
      break;
    default:
      el = <div className="labels"><p>No label group found</p></div>
  }

  return el;
};

export {LabelBar};