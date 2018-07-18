
//----------------------------DETAIL OF  A SINGLE BADGES--------------------
import React, {Component} from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';
import {fetchUsers, fetchTags, fetchBadge} from '../../actions';
import PageHeader from '../GlobalComponents/page_header';
import UserIcon from '../GlobalComponents/user_icon';

class BadgeDetail extends Component {
  //automatic call fetch user detail to get user with particular id
  componentWillMount(){
    this.props.fetchTags();
    this.props.fetchUsers();
  }
  componentDidMount(){
      const {id} = this.props.match.params;
      this.props.fetchBadge(id);
  }
  //-------------------RENDER METHOD USER WHO EARNED THIS BADGES---------------------
  renderUser(){
    const {users} = this.props;
    const {badge} = this.props;
        return _.map(users, (user)=>{
            if (_.includes(user.badges,badge.id))
                return <UserIcon
                        user={user}
                        key={user.id}/>
        });
  }
  //---------------RENDER METHOD-------------------------------------------
  render(){
    const {badge} = this.props;
    const {users} = this.props;

    if (!badge){
        return <div>Loading...</div>
    }
    return (
      <div>
        <PageHeader />
          <div>
                  <div className='p-3'> // BADGE PICTURE
                      <img src={badge.image} className='picture-profile'/>
                  </div>
                  <div className='d-flex flex-row'> //BADGE INFOS
                      <div className='p-3'>
                          <h5>{badge.name}</h5>
                          <div>Created by: {users[`${badge.issuer}`].name}</div>
                          <div>Criteria:  {badge.criteria}</div>
                      </div>
                    <div className='p-3'> // BADGES TAGS
                      <div>Tags: {badge.tags.map((tag)=>{
                          return(
                              <p key={tag}>{tag}</p>
                            );}
                          )}
                      </div>
                    </div>
                </div>
      </div>
      <div> // USER EARNER THIS BADGE
          {this.renderUser()}
      </div>
    </div>
    );
  }
}
function mapStateToProps(state, ownProps ){
    return { badge: state.badges[ownProps.match.params.id],
              tags: state.tags,
                users: state.users};
}

export default connect(mapStateToProps, {fetchBadge, fetchTags, fetchUsers})(BadgeDetail);
