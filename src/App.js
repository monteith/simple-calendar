import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import createBrowserHistory from 'history/createBrowserHistory'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

import {Calendar} from './components/Calendar';

const _cc = createReactClass;

let customHistory = createBrowserHistory();

/**
 * App container
 */
const App = _cc({
  displayName: 'SprintHero',
  propTypes: {
    model: PropTypes.object.isRequired
  },
  render() {
    return (
      <Router history={customHistory}>
        <div className="sprintHero">
          <Route exact path="/" render={() => <Calendar />} />
          <Route path="/view/:view" render={({match}) => <Calendar view={match.params.view} />} />
        </div>
      </Router>
    );
  }
});

export default App;
