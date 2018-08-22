//----COMUNITY INDEX PAGE-----------
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
//ACTION CREATOR
import { fetchUsers } from '../../actions';
//COMPONENTS
import PageHeader from '../GlobalComponents/page_header';
import TopUsers from './fetch_top_users';
import UserIcon from '../GlobalComponents/user_icon';
import tribePageStyle from "../../assets/jss/material-kit-react/views/TribePageSections/tribePage.jsx";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "../../UI_components/Parallax/Parallax.jsx";
import Footer from '../../UI_components/Footer/Footer';
import GridContainer from "../../UI_components/Grid/GridContainer.jsx";
import GridItem from "../../UI_components/Grid/GridItem.jsx";

//sample picture
import TribeBanner from '../../Image/tribe-banner.png';
import TopEarners from '../../Image/top-earners.png';
import TribeMembers from '../../Image/tribe-members.png';


class TribeIndex extends Component {
  componentDidMount(){
      this.props.fetchUsers();
  }
  renderUser(){

      const {users} = this.props;

      return _.map(users, user => {
                          return (
                                <GridItem xs={12} sm={6} md={3}>
                                  <UserIcon
                                    user = {user}
                                    />
                                </GridItem>
                          );
                })
  }
  render() {

    const { classes } = this.props;

    return (
        <div>
          <PageHeader page='tribe'/>
            <Parallax small filter image={TribeBanner}>
            </Parallax>
          <div className={classes.main}>
            <GridContainer className={classes.container}>
              <GridItem className={classes.gridIcon}>
                <img src={TopEarners} />
              </GridItem>
              <GridItem>
                <TopUsers users={this.props.users}/>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.main}>
            <GridContainer className={classes.container}>
              <GridItem className={classes.gridIcon}>
                <img src={TribeMembers} />
              </GridItem>
              <GridContainer>
                  {this.renderUser()}
              </GridContainer>
            </GridContainer>
          </div>
          <Footer />
        </div>
    );
  }
}

function mapStateToProps(state){
    return {users: state.users};
}
export default connect(mapStateToProps, {fetchUsers})(withStyles(tribePageStyle)(TribeIndex));
