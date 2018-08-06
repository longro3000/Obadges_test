import React, { Component } from 'react';
import classNames from "classnames";
import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Header from "../../UI_components/Header/Header.jsx";
import Button from "../../UI_components/CustomButtons/Button.jsx";
import componentsStyle from "../../assets/jss/material-kit-react/views/components.jsx";

class PageHeader extends Component {
  activePage(currentPage) {
      if( currentPage === this.props.page) {
          return (this.props.classes.navLink + ' ' + this.props.classes.navLinkActive);
      }
      return (this.props.classes.navLink);
  };
  brand(){
    return (
      <Link to='./' className={this.props.classes.link}>
        <Button
          color='transparent'
        >
          <img src='http://4sv.vn/blog/wp-content/uploads/2017/10/Officience-s-logo.png' className='picture-profile'/>
        </Button>
      </Link>
    );
  };
  render(){
    const {classes, ...rest} = this.props;
    const {page} = this.props;
    return (
                    <Header
                        brand={this.brand()}
                        color='transparent'
                        fixed
                        changeColorOnScroll={{
                            height: 400,
                            color: 'primary'
                        }}
                        leftLinks={
                            <List className={classes.list}>
                              <ListItem className={classes.listItem}>
                                <Link to='./' className={classes.link}>
                                  <Button
                                    className={this.activePage('home')}
                                    color='transparent'
                                  >
                                    HOME
                                  </Button>
                                </Link>
                              </ListItem>
                              <ListItem className={classes.listItem}>
                                <Link to='./tribe' className={classes.link}>
                                  <Button
                                    className={this.activePage('tribe')}
                                    color='transparent'
                                  >
                                    OFFY TRIBE
                                  </Button>
                                </Link>
                              </ListItem>
                              <ListItem className={classes.listItem}>
                                <Link to='./badge' className={classes.link}>
                                  <Button
                                    className={this.activePage('badge')}
                                    color='transparent'
                                  >
                                    COLLECTION
                                  </Button>
                                </Link>
                              </ListItem>
                              <ListItem className={classes.listItem}>
                                <Link to='./addbadge' className={classes.link}>
                                  <Button
                                    className={this.activePage('addbadge')}
                                    color='transparent'
                                  >
                                    ADD BADGE
                                  </Button>
                                </Link>
                              </ListItem>
                            </List>
                        }
                        rightLinks={
                          <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                              <Link to='./' className={classes.link}>
                                <Button
                                  className={classes.navLink}
                                  color='transparent'
                                >
                                VN
                                </Button>
                              </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                              <Link to='./' className={classes.link}>
                                <Button
                                  className={classes.navLink}
                                  color='transparent'
                                >
                                FR
                                </Button>
                              </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                              <Link to='./' className={classes.link}>
                                <Button
                                  className={classes.navLink +' '+ classes.navLinkActive}
                                  color='transparent'
                                >
                                EN
                                </Button>
                              </Link>
                            </ListItem>
                          </List>
                        }
                      {...rest}
                      />
    );
  }
}

export default withStyles(componentsStyle)(PageHeader);
