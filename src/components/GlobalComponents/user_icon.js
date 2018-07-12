import React from 'react';
import { Link } from 'react-router-dom';

export default function UserIcon({user}) {
    return (
        <div className='p-2' key={user.id}>
          <div>
            <Link to={`/community/${user.id}`}>
              <img src={user.image} className='picture-icon' />
            </Link>
          </div>
          <div>{user.name}</div>
          <div>{user.cluster}</div>
        </div>
    );
}
