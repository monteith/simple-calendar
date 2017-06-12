import React from 'react';
import PropTypes from 'prop-types';

import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const ViewBar = ({setView}) => (
  <div className="viewbar">
    <ButtonToolbar>
      <DropdownButton pullRight={true} title={<i className="fa fa-television" />} id="viewbar">
        <LinkContainer to="/view/daily">
          <MenuItem eventKey="viewbar.daily" onClick={() => setView('daily')}>Daily</MenuItem>
        </LinkContainer>
        <LinkContainer to="/view/weekly">
          <MenuItem eventKey="viewbar.weekly" onClick={() => setView('weekly')}>Weekly</MenuItem>
        </LinkContainer>
        <LinkContainer to="/view/monthly">
          <MenuItem eventKey="viewbar.monthly" onClick={() => setView('monthly')}>Monthly</MenuItem>
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
