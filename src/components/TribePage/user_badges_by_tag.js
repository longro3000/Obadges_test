///-----------------RENDER LIST OF USER BY THEIR TAGS---------------------

import React from 'react';
import _ from 'lodash';
import Slider from 'react-slick';

//COMPONENTS
import BadgeIcon from '../GlobalComponents/badge_icon';


export default function UserBadges ({tag, user, badges})
{
  //slider settings

  const settings={
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  const temp=_.intersection(tag.badges,user.badges);

  return (
        <Slider {...settings}>
            {temp.map((x)=>{
              return(
                <div key={badges[`${x}`].id}>
                  <BadgeIcon
                      badge={badges[`${x}`]}
                      />
                    </div>)
              })}
              </Slider>);
}
