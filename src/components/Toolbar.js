import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

/**
 * Display a title and previous, next buttons
 * @param {object|moment} date
 * @param {string} view
 * @param {function} prev
 * @param {function} next
 * @returns {Component}
 * @constructor
 */
const Toolbar = ({date, view, prev, next}) => {
  let copy;

  switch (view) {
    case 'day':
      copy = `${date.format('MMM Do')}`;
      break;
    case 'week':
      copy = `${date.clone().startOf('week').format('MMM Do')} to ${date.clone().endOf('week').format('MMM Do')}`;
      break;
    case 'month':
      copy = `${date.format('MMMM')}`;
      break;
    default:
      copy = `${date.format()}`;
  }

  return <header className={`${view}__header`}>
      <h2 key={`${view}-title`}>{copy}</h2>
      <ButtonGroup>
        <Button key="button-prev" onClick={prev} bsSize="small"><i className="fa fa-chevron-left" aria-hidden="true" /></Button>
        <Button key="button-next" onClick={next} bsSize="small"><i className="fa fa-chevron-right" aria-hidden="true" /></Button>
      </ButtonGroup>
    </header>;
};

export {Toolbar};