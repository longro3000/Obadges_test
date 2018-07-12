import React, { Component } from 'react';
import PageHeader from '../GlobalComponents/page_header';
import TopUsers from './fetch_top_users';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

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
