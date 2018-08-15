import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../../UI_components/Grid/GridContainer.jsx";
import GridItem from "../../UI_components/Grid/GridItem.jsx";
import Button from "../../UI_components/CustomButtons/Button.jsx";
import Card from "../../UI_components/Card/Card.jsx";
import CardBody from "../../UI_components/Card/CardBody.jsx";
import CardFooter from "../../UI_components/Card/CardFooter.jsx";

//sample image
import tag5 from '../../Image/5-tag.png';
import otherTag from '../../Image/other-tag.png';

import userCardStyle from "../../assets/jss/material-kit-react/views/TribePageSections/userCardStyle.jsx";

class UserIcon extends Component{

  render(){
    const {classes} = this.props;
    const {user} = this.props;
    const imageClasses = classNames(
      classes.imgRoundedCircle,
      classes.imgTag
    );
    return (
      <GridItem xs={12} sm={12} md={12} className={classes.cardGrid}>
            <Card plain className={classes.card}>
              <GridItem xs={12} sm={12} md={12} className={classes.imageGrid}>
                <Link to={`/tribe/${user.id}`}>
                <img src={user.image} className={classes.imgFluid} />
                </Link>
              </GridItem>
              <h4 className={classes.cardTitle}>
                {user.name}
                <br />
                <small className={classes.smallTitle}>{user.cluster}</small>
              </h4>
              <CardBody>
                <div className={classes.tagGrid}>
                    <div style={{marginBottom:"10px"}}>
                      <img src={tag5} className={imageClasses} />
                      <div style={{marginLeft:"60px"}}>
                        <h6>Creating Shared Value</h6>
                        <div>8</div>
                      </div>
                    </div>
                    <div>
                    <img src={otherTag} className={imageClasses} />
                    <div style={{marginLeft:"60px"}}>
                      <h6>CMS</h6>
                      <div>8</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
      </GridItem>
    );
  }
}
export default withStyles(userCardStyle)(UserIcon);
