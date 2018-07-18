//----COMUNITY INDEX PAGE-----------
import React, { Component } from 'react';
import { connect } from 'react-redux';

//ACTION CREATOR
import { fetchUsers } from '../../actions';

//COMPONENTS
import PageHeader from '../GlobalComponents/page_header';
import TopUsers from './fetch_top_users';


class CommunityIndex extends Component {
  render() {
    return (
        <div>
        <PageHeader />
        <div className='title-community'>Community</div>
        <TopUsers />
        </div>
    );
  }
}
export default CommunityIndex;
