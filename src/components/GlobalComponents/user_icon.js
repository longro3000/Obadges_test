import React from 'react';
import { Link } from 'react-router-dom';

export default function UserIcon({user}) {
    return (
        <div className='col-xl-3' key={user.id}>
          <div>
            <Link to={`/tribe/${user.id}`}>
              <img src={user.image} style={{width:"50px", height:"50px"}} />
            </Link>
          </div>
          <div>{user.name}</div>
          <div>{user.cluster}</div>
        </div>
    );
}
