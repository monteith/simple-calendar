import React from 'react';
import moment from 'moment';

import {daysOfWeek} from '../dateUtils';

const getDayLabels = () =>
  daysOfWeek(moment())
    .map( (day) =>
      <div key={`label-${day.format('ddd')}`}
           className="labels__label labels__label--day">
        <span>{day.format('ddd')}</span>
      </div> );

const LabelBar = ({view, weeks}) => {
  let labels = getDayLabels();
  let el = <div />;

  switch (view) {
    case 'monthly':
      el = (
        <div className="labels labels--view-monthly">
          {labels}
        </div>
      );
      break;
    case 'weekly':
      el = (
        <div className="labels labels--view-weekly">
          {weeks.map( (n, i) => (
            <div className="labels__group" key={`week-label-${i}`}>
              {labels}
            </div>
          ))}
        </div>
      );
      break;
    default:
      el = <div className="labels"><p>No label group found</p></div>
  }
  return el;
};

export {LabelBar};