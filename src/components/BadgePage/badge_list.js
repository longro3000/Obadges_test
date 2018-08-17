//LIBRARY AND API
import React from 'react';
import _ from 'lodash';

//COMPONENTS
import BadgeIcon from '../GlobalComponents/badge_icon';

export default function BadgeList({Badges}){
      return (<div className='col-xl-8'>
                {_.map(Badges, (badge) =>{
            if ((tags.length===0) || ((_.intersection(tags, badge.tags).length != 0) && (_.includes(badge.name, BadgeSearch)))){
                    return
                      <BadgeIcon
                              badge={badge}
                              />
                              }
                      })}
        </div>);
}
