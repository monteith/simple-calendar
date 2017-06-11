import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import moment from 'moment';

import './App.css';

import {Month} from './components/Month';

const _cc = createReactClass;

/**
 *
 */
const App = _cc({
  displayName: 'SprintHero',
  propTypes: {
    model: PropTypes.object.isRequired
  },
  render() {
    return (
      <div className="sprintHero">
        <Month month={moment().month(5)} view="weeks" />
      </div>
    );
  }
});

export default App;
