import React, { Component } from 'react';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import PageHeader from '../GlobalComponents/page_header';
import componentsStyle from "../../assets/jss/material-kit-react/views/components.jsx";
import Parallax from "../../UI_components/Parallax/Parallax.jsx";
import GridContainer from "../../UI_components/Grid/GridContainer.jsx";
import GridItem from "../../UI_components/Grid/GridItem.jsx";
import TopUsers from '../CommunityPage/fetch_top_users';
import background from '../../Image/Offy-flower.png';

class HomeIndex extends Component {
  render() {
    const {classes} = this.props;
    return (
        <div>
            <PageHeader page='home' />
            <Parallax image={''}>
              <img src={background} />
            </Parallax>
            <div className={classNames(classes.main)}>
              <div>
                    <TopUsers />
              </div>
            </div>
        </div>
    );
  }
}

export default withStyles(componentsStyle)(HomeIndex);
