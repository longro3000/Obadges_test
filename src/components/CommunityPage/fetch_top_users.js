import React,{ Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import UserIcon from '../GlobalComponents/user_icon';
import { fetchUsers } from '../../actions';

//render top 5 user with most badges earned
class TopUsers extends Component {
  componentDidMount() { //automatic call function fetchUsers
    this.props.fetchUsers();
  }
    renderUser(){
      const usersArray = _.map(this.props.users); // convert users object to map object for displaying
      const topUsers = usersArray.sort((a,b) => { return b.badges.length -a.badges.length;}); //sort array from top to bottom
        const UserList = topUsers.slice(0,5); // get 5 most badges earners
        //maping to render user icon
        return UserList.map((user)=> {
                return(
                      //<div>{user.id}</div>
                        <UserIcon
                          user = {user}
                          key = {user.id}/>);}
        );
    }
    render(){
        return(
            <div>
            <div className='d-flex flex-row'>
              <div className='best5'>TOP 5 BEST EARNERS</div>
              {this.renderUser()}
            </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {users: state.users};

}

export default connect(mapStateToProps, { fetchUsers }) (TopUsers);
