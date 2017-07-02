import React from 'react';
import PropTypes from 'prop-types';

import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const ViewBar = ({setView}) => (
  <div className="viewbar">
    <ButtonToolbar>
      <DropdownButton pullRight={true} title={<i className="fa fa-television" />} id="viewbar">
        <LinkContainer to="/view/day">
          <MenuItem eventKey="viewbar.day" onClick={() => setView('day')}>Day</MenuItem>
        </LinkContainer>
        <LinkContainer to="/view/week">
          <MenuItem eventKey="viewbar.week" onClick={() => setView('week')}>Week</MenuItem>
        </LinkContainer>
        <LinkContainer to="/view/month">
          <MenuItem eventKey="viewbar.month" onClick={() => setView('month')}>Month</MenuItem>
        </LinkContainer>
      </DropdownButton>
    </ButtonToolbar>
  </div>
);

ViewBar.displayName = 'Calendar.Viewbar';
ViewBar.propTypes = {
  setView: PropTypes.func.isRequired
};

export {ViewBar};
