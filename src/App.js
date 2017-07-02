import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import createBrowserHistory from 'history/createBrowserHistory'

import moment from 'moment';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

import {Calendar} from './components/Calendar';

const _cc = createReactClass;

let customHistory = createBrowserHistory();


/**
 * 404 component
 * @returns Component
 */
const NoMatch = () =>
  <div className="oops">
    <h1>404</h1>
    <p>Oops. Page not found</p>
  </div>;


/**
 * Builds date from URL parameters to render calendar
 * @param match
 * @returns {Component}
 * @constructor
 */
const CalendarDate = ({match}) => {
  let {params} = match;

  let year = params.year || moment().format('YYYY');
  let month = params.month || moment().format('MM');
  let day = params.day || moment().format('DD');

  let date = moment(`${month}/${day}/${year}`, 'MM/DD/YYYY');

  return <Calendar view={params.view} date={date} />;
};


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
          <Switch>
            <Route exact path="/" render={() => <Calendar />} />
            <Route path="/view/:view/:year?/:month?/:day?" component={CalendarDate} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
});

export default App;
