//------------------------------BADGE INDEX PAGE-----------------------------

//LIBRARY AND API
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
//ACTION CREATOR
import { fetchTags, fetchBadges } from '../../actions';

//IMPORT COMPONENTS
import BadgeList from './badge_list';
import SearchBar from '../GlobalComponents/search_bar';
import PageHeader from '../GlobalComponents/page_header';
import CheckboxGroup from '../GlobalComponents/check_box';

class BadgeIndex extends Component {
  componentDidMount(){
      this.props.fetchTags();
  }
  componentWillMount(){
      this.props.fetchBadges();
  }
  //----CONSTRUCTOR-----
  constructor(props){
      super(props);
      this.state ={
          tags: [],
          badgeSearch: ''
      };
      this.onSearchChange= this.onSearchChange.bind(this);
  }
  //------------when search bar value change, change value of SearchBadge in state---

  onSearchChange(term){
      this.setState({
          badgeSearch: term
      });

  }
  //------------when a tag is checked , update tags state of component----
  onTagChecked(Tags){
      this.setState({
          tags: Tags
      });
  }
  //-----------------when checkbox is submited-------------------------
  onSubmit(values){
      this.onTagChecked(values);
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

  //------------render whole component--------------------
  render() {
    const {tags}=this.state;
    console.log(tags);
    return (
        <div>
        <PageHeader />
        <div>Badge</div>
        <div><SearchBar onSearchTermChange={this.onSearchChange}/></div>
        <div>{this.renderBadgeForm()}</div>
            <BadgeList
              Tags={this.state.tags}
              Badges={this.props.badges}
              BadgeSearch={this.state.badgeSearch} />
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
  form: 'BadgeNewForm'
})(
  connect(mapStateToProps,{ fetchTags, fetchBadges })(BadgeIndex)
);
