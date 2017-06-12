import React from 'react';
import moment from 'moment';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import {Month} from './Month';
import {ViewBar} from './ViewBar';

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
      view: this.props.view || 'monthly'
    }
  },

  setView (view) {
    this.setState( () => { return { view }});
  },

  render() {
    return (
      <div className="calendar">
        <ViewBar view={this.state.view} setView={this.setView} />
        <Month month={this.state.focus}
               view={this.state.view} />
      </div>
    )
  }
});

export {Calendar}