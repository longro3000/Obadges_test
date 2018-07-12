import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default function BadgeIcon({badge}) {
    return (
        <div className='p-2' key={badge.id}>
          <div>
            <Link to={`/badge/${badge.id}`}>
              <img src={badge.image} className='picture-icon' />
            </Link>
          </div>
          <div>{badge.name}</div>
          <div>Created by...</div>
        </div>
    );
}
