import React, { Component } from 'react';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';
import _ from 'lodash';

//ACTION CREATOR
import { fetchUsers, fetchNewBadges } from '../../actions';

import PageHeader from '../GlobalComponents/page_header';
import homePageStyle from "../../assets/jss/material-kit-react/views/homePage.jsx";
import Parallax from "../../UI_components/Parallax/Parallax.jsx";
import GridContainer from "../../UI_components/Grid/GridContainer.jsx";
import GridItem from "../../UI_components/Grid/GridItem.jsx";
import TopUsers from '../TribePage/fetch_top_users';
import Footer from '../../UI_components/Footer/Footer';
import BadgeIcon from '../GlobalComponents/badge_icon';
//local images
import TribeIcon from '../../Image/tribe-icon.png';
import BadgeCollectionIcon from '../../Image/badge-icon.png';
import background from '../../Image/Offy-flower.png';

class HomeIndex extends Component {
  componentDidMount(){
      this.props.fetchUsers();
  }
  constructor(props){
      super(props);
      this.props.fetchNewBadges();
  }

  renderBadge(){
      const {badges} = this.props;
      return _.map(badges, badge =>{
                        return (
                            <GridItem xs={12} sm={6} md={3}>
                              <BadgeIcon
                                  badge={badge}
                                />
                            </GridItem>
                        );
                    })
  }
  render() {
    const {classes} = this.props;
    const {users} = this.props;
    console.log(users);
    return (
        <div>
            <PageHeader page='home' />
            <Parallax>
              <div className={classes.backgroundcontainer}>
                <img src={background} />
              </div>
            </Parallax>
            <div className={classes.tribeMain}>
              <GridContainer className={classes.container}>
                <GridItem className={classes.gridIcon}>
                  <img src={TribeIcon} className={classes.icon}/>
                </GridItem>
                <GridItem className={classes.gridSlider}>
                  <TopUsers
                    users = {users}
                    />
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.badgeMain}>
              <GridContainer className={classes.container}>
                <GridItem className={classes.gridIcon}>
                  <img src={BadgeCollectionIcon} className={classes.icon}/>
                </GridItem>
                <GridContainer className={classes.newBadge}>
                  {this.renderBadge()}
                </GridContainer>
              </GridContainer>
            </div>
          <Footer />
      </div>
    );
  }
}

function mapStateToProps( state ){
    return { users: state.users,
              badges: state.badges}
}

export default connect(mapStateToProps, { fetchUsers, fetchNewBadges })(withStyles(homePageStyle)(HomeIndex));
