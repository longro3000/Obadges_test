//-----------------COMPONENT TO DISPLAY BADGE ICON-----------------------

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
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
class BadgeIcon extends Component {
  render(){
    const {badge} = this.props;
    console.log(badge);
    const {classes} = this.props;
    const tooltip = (
        <Tooltip id='tooltip'>
          <h4>{badge.name}</h4>
          <div>Criteria: {badge.criteria}</div>
        </Tooltip>
    )
    return (
          <Card plain className={classes.card}>
              <GridItem className={classes.imageGrid}>
                  <Link to={`/badge/${badge.id}`}>
                      <img src={badge.image} className={classes.imgRoundedCircle} />
                  </Link>
              </GridItem>
              <h4 className={classes.cardTitle}>
                {bagde.name}
                <br />
                <small className={classes.smallTitle}>Created by {badge.issuer}</small>
              </h4>
          </Card>
    );
  }
}
export default withStyles(badgeCardStyle)(BadgeIcon);
