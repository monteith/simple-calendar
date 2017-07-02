import React from 'react';
import moment from 'moment';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import {ViewBar} from './ViewBar';
import {Month} from './Month';
import {Day} from './Day';
import {Week} from './Week';

const _cc = createReactClass;

const Calendar = _cc({
  displayName: 'Calendar.Container',

  propTypes: {
    date: PropTypes.object,
    view: PropTypes.string
  },

  getInitialState() {
    return {
      focus: this.props.date || moment(),
      view: this.props.view || 'month'
    }
  },

  setView (view) {
    this.setState( () => { return { view }});
  },

  render() {
    let {view, focus} = this.state;

    return (
      <div className="calendar">
        <ViewBar view={view} setView={this.setView} />
        {view === 'month' && (
          <Month month={focus}
                 view={view} />
        )}
        {view === 'week' && (
          <Week week={focus}
                view={view} />
        )}
        {view === 'day' && (
          <Day date={focus} view={view} />
        )}
      </div>
    )
  }
});

export {Calendar}