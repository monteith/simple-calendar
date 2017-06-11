import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import './App.css';

import {Calendar} from './components/Calendar';

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
        <Calendar />
      </div>
    );
  }
});

export default App;
