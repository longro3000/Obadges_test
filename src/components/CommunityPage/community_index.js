//----COMUNITY INDEX PAGE-----------
import React, { Component } from 'react';
import { connect } from 'react-redux';

//ACTION CREATOR
import { fetchUsers } from '../../actions';
//COMPONENTS
import PageHeader from '../GlobalComponents/page_header';
import TopUsers from './fetch_top_users';
import tribePageStyle from "../../assets/jss/material-kit-react/views/tribePage.jsx";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "../../UI_components/Parallax/Parallax.jsx";

import Footer from '../../UI_components/Footer/Footer';
class CommunityIndex extends Component {
  componentDidMount(){
      this.props.fetchUsers();
  }
  render() {
    const { classes } = this.props;
    return (
        <div>
          <PageHeader page='tribe'/>
            <Parallax image={""}>
            </Parallax>
          <div className={classNames(classes.main)}>
              <TopUsers users={this.props.users}/>
          </div>
          <Footer />
        </div>
    );
  }
}

function mapStateToProps(state){
    return {users: state.users};
}
export default connect(mapStateToProps, {fetchUsers})(withStyles(tribePageStyle)(CommunityIndex));
