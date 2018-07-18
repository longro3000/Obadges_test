//LIBRARY AND API
import React from 'react';
import _ from 'lodash';

//COMPONENTS
import BadgeIcon from '../GlobalComponents/badge_icon';

export default function BadgeList({Badges, Tags, BadgeSearch}){
  const tags= _.map(Tags);
      return _.map(Badges, (badge) =>{
            if ((_.difference(tags[0], badge.tags).length === 0) && (_.includes(badge.name, BadgeSearch))){
                    return  <BadgeIcon
                              badge={badge}
                              key={badge.id}/>
            }
        });
}
