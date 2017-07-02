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

  defaultProps: {
    date: moment(),
    view: 'month'
  },

  setFocus (focus) {
    this.setState( () => { return { focus } })
  },

  setView (view) {
    this.setState( () => { return { view }});
  },

  render() {
    let {view, focus} = this.state;

    return (
      <div className="calendar">
        <h1>{focus.format('YYYY')}</h1>
        <ViewBar view={view} date={focus} setView={this.setView} />
        {view === 'month' && (
          <Month date={focus}
                 view={view}
                 setFocus={this.setFocus} />
        )}
        {view === 'week' && (
          <Week date={focus}
                view={view}
                setFocus={this.setFocus} />
        )}
        {view === 'day' && (
          <Day date={focus}
               view={view}
               setFocus={this.setFocus} />
        )}
      </div>
    )
  }
});

export {Calendar}