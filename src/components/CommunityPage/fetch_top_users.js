//LIBRARY AND API
import React,{ Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Slider from 'react-slick';
//ACTION CREATORS
import { fetchUsers } from '../../actions';

//COMPONENTS
import UserIcon from '../GlobalComponents/user_icon';


//render top 5 user with most badges earned
class TopUsers extends Component {
  componentDidMount() { //automatic call function fetchUsers
    this.props.fetchUsers();
  }
  renderUsers(){
      const usersArray = _.map(this.props.users);
      return usersArray.map((user) => {
                    return
                      (
                          <div>
                            <UserIcon
                              user = {user}
                              key = {user.id}/>
                          </div>
                      );
                })
  }
    render(){
      const {users} = this.props;
      const settings={
      dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
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
        if (!users){
            return (
                <div>Loading...</div>
            );
        }
        return(
          <div>
            <div>
              {this.renderUsers()}
            </div>
          </div>
        );
    }

};

function mapStateToProps(state){
    return {users: state.users};

};

export default connect(mapStateToProps, { fetchUsers }) (TopUsers);
