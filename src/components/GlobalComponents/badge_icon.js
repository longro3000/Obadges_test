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
    const {classes} = this.props;
    const tooltip = (
        <Tooltip id='tooltip'>
          <h4>{badge.name}</h4>
          <div>Criteria: {badge.criteria}</div>
        </Tooltip>
    )
    return (
        <div className='col-xl-3' key={badge.id}>
          <div>
            <OverlayTrigger placement='top' overlay={tooltip}>
            <Link to={`/badge/${badge.id}`}>
              <img src={badge.image} style={{}} />
            </Link>
            </OverlayTrigger>
          </div>
          <div>{badge.name}</div>
          <div>Created by...</div>
        </div>
    );
  }
}
export default withStyles()
