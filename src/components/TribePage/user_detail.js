import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

//ACTION CREATORS
import {fetchUser, fetchTags, fetchBadges} from '../../actions';

//COMPONENTS
import PageHeader from '../GlobalComponents/page_header';
import UserBadges from './user_badges_by_tag';
import Parallax from "../../UI_components/Parallax/Parallax.jsx";
import componentsStyle from "../../assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

class UserDetail extends Component {
  //automatic call fetch user detail to get user with particular id
  componentWillMount(){
    this.props.fetchTags();
    this.props.fetchBadges();
  }
  componentDidMount(){
      const {id} = this.props.match.params;
      this.props.fetchUser(id);
  }
  //use intersection and for each of lodash to render badges by tags
  renderBadgeEarned(){
      const {user} = this.props;
      const {badges} = this.props;
      const {tags} = this.props;
      return _.map(tags, (tag) => {
          return (
              <div key={tag.id}>
                <h4>{tag.name}</h4>
                <UserBadges
                    tag={tag}
                    user={user}
                    badges={badges}
                    //key={tags.id}
                    />
              </div>
          );
      } );
  }
    render(){
      const {classes} = this.props;
      const {user} = this.props;
      if (!user){
          return <div>Loading...</div>
      }
      return (
        <div>
          <PageHeader page='tribe'/>
            <Parallax image={""}>
            </Parallax>
            <div className={classNames(classes.main)}>
            <h3>Best At ...</h3>
            <div>
              <div className='d-flex flex-row'>
                  <div className='p-3'>
                    <img src={user.image} className='picture-profile'/>
                    <div>{user.badges.length} BADGES EARNED</div>
                  </div>

                  <div className='p-3'>
                    <div>Full Name:  {user.name}</div>
                    <div>Cluster:   {user.cluster}</div>
                    <div>Profile:  {user.profile}</div>
                  </div>
                  <div className='p-3'>
                    <div>Full Name:  {user.skills}</div>
                    <div>Contact:  {user.contact}</div>
                  </div>
              </div>
            </div>
            <div>
              {this.renderBadgeEarned()}
            </div>
            </div>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps ){
    return { user: state.users[ownProps.match.params.id],
              tags: state.tags,
                badges: state.badges};
}

export default connect(mapStateToProps, {fetchUser, fetchTags, fetchBadges})(withStyles(componentsStyle)(UserDetail));
