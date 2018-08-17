//------------------------------BADGE INDEX PAGE-----------------------------

//LIBRARY AND API
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
//ACTION CREATOR
import { fetchTags, fetchBadgeOnTag, fetchBadgeOnSearch } from '../../actions';

//IMPORT COMPONENTS
import BadgeList from './badge_list';
import SearchBar from '../GlobalComponents/search_bar';
import PageHeader from '../GlobalComponents/page_header';
import CheckboxGroup from '../GlobalComponents/check_box';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import badgePageStyle from "../../assets/jss/material-kit-react/views/BadgePageSections/badgePage.jsx";
import Parallax from "../../UI_components/Parallax/Parallax.jsx";

//sample picture

import BadgeBanner from "../../Image/badge-banner.png";

class BadgeIndex extends Component {
  componentDidMount(){
      this.props.fetchTags();
  }
  //----CONSTRUCTOR-----
  constructor(props){
      super(props);
      this.state ={
          tags: [],
          badgeSearch: ''
      };
      this.onSearchChange= this.onSearchChange.bind(this);
      this.props.fetchBadgeOnTag("");
      this.props.fetchBadgeOnSearch("");
  }
  //------------when search bar value change, change value of SearchBadge in state---

  onSearchChange(term){
      this.props.fetchBadgeOnSearch();

  }
  //------------when a tag is checked , update tags state of component----
  //-----------------when checkbox is submited-------------------------
  onSubmit(values){
      this.props.fetchBadgeOnTag(values.Tags);
  }
  //------------render checkbox of badges---------------

  renderBadgeForm(){
    const {tags} = this.props;
    const { handleSubmit } = this.props;
    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <CheckboxGroup
              name='Tags'
              options={_.map(tags)} />
          <button type='submit' className='btn btn-primary'>SEARCH</button>
        </form>
    );
  }
  //----------------------render badge based on tags and search---------
  renderBadge(){
        const {badges} = this.props;
        return _.map(badges, badge=> {
                          <BadgeIcon
                              badge={badge}
                            />
                    });
  }
  //------------render whole component--------------------
  render() {
    const {classes}=this.props;
    const {tags}=this.state;
    return (
        <div>
          <PageHeader page='badge'/>
          <Parallax small filter image={BadgeBanner}>
          </Parallax>
          <div className={classes.main}>
            <div>Badge</div>
            <div><SearchBar
                  onSearchTermChange={this.onSearchChange}
                  target='badges'
                  />
            </div>
            <div className='col-xl-4'>{this.renderBadgeForm()}</div>
            <div className='col-xl-8'>
              {this.renderBadge()}
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps( state){
    return {
        tags : state.tags,
        badges: state.badges
    }
}

export default reduxForm({
  form: 'BadgeSearchForm'
})(
  connect(mapStateToProps,{ fetchTags, fetchBadgeOnTag, fetchBadgeOnSearch })(withStyles(badgePageStyle)(BadgeIndex)));
