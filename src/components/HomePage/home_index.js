import React, { Component } from 'react';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from 'react-redux';

//ACTION CREATOR
import { fetchUsers } from '../../actions';

import PageHeader from '../GlobalComponents/page_header';
import homePageStyle from "../../assets/jss/material-kit-react/views/homePage.jsx";
import Parallax from "../../UI_components/Parallax/Parallax.jsx";
import GridContainer from "../../UI_components/Grid/GridContainer.jsx";
import GridItem from "../../UI_components/Grid/GridItem.jsx";
import TopUsers from '../TribePage/fetch_top_users';
import background from '../../Image/Offy-flower.png';
import Footer from '../../UI_components/Footer/Footer';


class HomeIndex extends Component {
  componentDidMount(){
      this.props.fetchUsers();
  }

  render() {
    const {classes} = this.props;
    const {users} = this.props;
    return (
        <div>
            <PageHeader page='home' />
            <Parallax image={''}>
              <div className={classes.backgroundcontainer}>
                <img src={background} />
              </div>
            </Parallax>
            <div className={classNames(classes.main)}>
              <div>
                    <TopUsers
                      users={users}
                      />
              </div>
            </div>
          <Footer />
      </div>
    );
  }
}

function mapStateToProps( state ){
    return { users: state.users}
}

export default connect(mapStateToProps, { fetchUsers })(withStyles(homePageStyle)(HomeIndex));
