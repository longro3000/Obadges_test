//-----------------COMPONENT TO DISPLAY BADGE ICON-----------------------

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

export default function BadgeIcon({badge}) {
    const tooltip = (
        <Tooltip id='tooltip'>
          <h4>{badge.name}</h4>
          <div>Criteria: {badge.criteria}</div>
        </Tooltip>
    )
    return (
        <div className='col-xl-3' key={badge.id}>
          <div>
            <OverlayTrigger placement='top' overlay={tooltip}>
            <Link to={`/badge/${badge.id}`}>
              <img src={badge.image} className='picture-icon' />
            </Link>
            </OverlayTrigger>
          </div>
          <div>{badge.name}</div>
          <div>Created by...</div>
        </div>
    );
}
