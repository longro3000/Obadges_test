import React from 'react';
import _ from 'lodash';
import BadgeIcon from '../GlobalComponents/badge_icon';

export default function UserBadges ({tag, user, badges})
{
  const d=_.intersection(tag.badges,user.badges);
      return d.map((x)=>{
              return (
                  <div className='d-flex flex-row' key={badges[`${x}`].id}>
                  <BadgeIcon
                      badge={badges[`${x}`]}
                      key={badges[`${x}`].id}
                      />
                  </div>
              );
          });
}
