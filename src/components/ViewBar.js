import React from 'react';
import PropTypes from 'prop-types';

import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

const ViewBar = ({setView}) => (
  <div className="viewbar">
    <ButtonToolbar>
      <DropdownButton pullRight={true} title={<i className="fa fa-television" />} id="viewbar">
        <MenuItem eventKey="viewbar.daily" onClick={() => setView('daily')}>Daily</MenuItem>
        <MenuItem eventKey="viewbar.weekly" onClick={() => setView('weekly')}>Weekly</MenuItem>
        <MenuItem eventKey="viewbar.monthly" onClick={() => setView('monthly')}>Monthly</MenuItem>
      </DropdownButton>
    </ButtonToolbar>
  </div>
);

ViewBar.displayName = 'Calendar.Viewbar';
ViewBar.propTypes = {
  setView: PropTypes.func.isRequired
};

export {ViewBar};
