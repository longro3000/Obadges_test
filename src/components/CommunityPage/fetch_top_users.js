///-----------------RENDER LIST OF USER BY THEIR TAGS---------------------

import React from 'react';
import _ from 'lodash';
import Slider from 'react-slick';

//COMPONENTS
import UserIcon from '../GlobalComponents/user_icon';


export default function TopUsers ({users})
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
          breakpoint: 1200,
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
    console.log(users);
  return (
        <Slider {...settings}>
            {_.map(users, (user)=>{
              return(
                  <UserIcon
                      key={user.id}
                      user = {users}
                      />
                    )
              })}
              </Slider>);
}
