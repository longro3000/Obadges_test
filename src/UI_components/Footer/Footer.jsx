/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import {Link} from 'react-router-dom';
// @material-ui/icons

import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle.jsx";
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

import Button from '../CustomButtons/button';

import facebook from '../../Image/facebook.png';
import google from '../../Image/google.png';
import youtube from '../../Image/youtube.png';

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
  [classes.footer]: true,
  [classes.footerWhiteFont]: whiteFont
  });
  const leftCornerClasses = classNames(
    classes.block,
    classes.leftCorner
  );
  const rightCornerClasses = classNames(
    classes.block,
    classes.rightCorner
  );
  return (
    <footer className={footerClasses}>
      <GridContainer className={classes.container}>
          <GridItem xs={12} sm={6} md={3} className={classes.gridItem}>
              <div className={leftCornerClasses}>
              <h5 className={classes.title}>obadge</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
              </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={2} className={classes.gridItem}>
              <div className={classes.block}>
                <h5 className={classes.title}>discover us</h5>
                <Link to='/'><a className={classes.a}>HOME PAGE</a></Link> <br />
                <Link to='/tribe'><a className={classes.a}>HOFFY TRIBE</a></Link> <br />
                <Link to='/badge'><a className={classes.a}>BADGES COLLECTION</a></Link>
              </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={2} className={classes.gridItem}>
              <div className={rightCornerClasses}>
                <h5 className={classes.title}>our pages</h5>
                <Link to='/'><a className={classes.a}>OFFICIENCE</a></Link> <br />
                <Link to='/tribe'><a className={classes.a}>CRAFT</a></Link> <br />
                <Link to='/tribe'><a className={classes.a}>CRUNCH</a></Link> <br />
                <Link to='/tribe'><a className={classes.a}>O&I</a></Link> <br />
                <Link to='/tribe'><a className={classes.a}>CREATIVE TRIBE</a></Link> <br />
              </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={2} className={classes.gridItem}>
            <div className={rightCornerClasses}>
              <h5 className={classes.title}>follow us</h5>
              <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                      <Button color="text" simple className={classes.button}>
                        <a href='https://www.facebook.com/Officience/'>
                          <img src={facebook} />
                        </a>
                      </Button>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                      <Button color='text' simple className={classes.button}>
                        <a href='https://www.youtube.com/user/OfficienceVN'>
                          <img src={youtube} />
                        </a>
                      </Button>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                      <Button color="text" simple className={classes.button}>
                        <a href='https://plus.google.com/u/1/communities/114247689785052683839'>
                          <img src={google} />
                        </a>
                      </Button>
                  </ListItem>
              </List>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3} className={classes.gridItem}>
              <div className={rightCornerClasses}>
                <h5 className={classes.title}>contact information</h5>
                <p>Address: 16A Le Hong Phong (pro-long), Ward 12, District 10, HCM </p>
                <p>Tel: +84 (28) 38 62 00 55</p>
                <p>Email : contact@officience.com</p>
              </div>
          </GridItem>
      </GridContainer>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
