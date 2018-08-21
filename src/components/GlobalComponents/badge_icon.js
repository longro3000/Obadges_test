//-----------------COMPONENT TO DISPLAY BADGE ICON-----------------------

import React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import badgeCardStyle from "../../assets/jss/material-kit-react/views/BadgePageSections/badgeCardStyle.jsx";
// @material-ui/icons

// core components
import GridContainer from "../../UI_components/Grid/GridContainer.jsx";
import GridItem from "../../UI_components/Grid/GridItem.jsx";
import Button from "../../UI_components/CustomButtons/Button.jsx";
import Card from "../../UI_components/Card/Card.jsx";
import CardBody from "../../UI_components/Card/CardBody.jsx";
import CardFooter from "../../UI_components/Card/CardFooter.jsx";
//sample image
function BadgeIcon({...props}) {
    const {classes} = props;
    const {badge} = props;
    const imageclass = classNames(
          classes.imgRoundedCircle,
          classes.imgBadge
    );

    return (
          <Card plain className={classes.card}>
              <GridItem className={classes.imageGrid}>
                  <Link to={`/badge/${badge.id}`}>
                      <img src={badge.image} className={classes.imageClass} />
                  </Link>
              </GridItem>
              <h4 className={classes.badgeTitle}>
                {badge.name}
                <br />
                <small className={classes.smallTitle}>Created by {badge.issuer}</small>
              </h4>
          </Card>
    );
  }
export default withStyles(badgeCardStyle)(BadgeIcon);
