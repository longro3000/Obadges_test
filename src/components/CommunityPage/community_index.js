//----COMUNITY INDEX PAGE-----------
import React, { Component } from 'react';
import { connect } from 'react-redux';

//ACTION CREATOR
import { fetchUsers } from '../../actions';

//COMPONENTS
import PageHeader from '../GlobalComponents/page_header';
import TopUsers from './fetch_top_users';
import componentsStyle from "../../assets/jss/material-kit-react/views/components.jsx";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "../../UI_components/Parallax/Parallax.jsx";

class CommunityIndex extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
          <PageHeader page='tribe'/>
            <Parallax image={""}>
            </Parallax>
          <div className={classNames(classes.main)}>
              <TopUsers />
          </div>
        </div>
    );
  }
}
export default withStyles(componentsStyle)(CommunityIndex);
