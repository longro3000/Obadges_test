import React, { Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { fetchTags } from '../../actions';
import { connect } from 'react-redux';

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import CustomTabs from "../../UI_components/CustomTabs/CustomTabs.jsx";

import FirstPage from './first_page';
import SecondPage from './second_page';
import ThirdPage from './third_page';
import PageHeader from '../GlobalComponents/page_header';
import PropTypes from 'prop-types';


class AddBadge extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.state = {
      page: 0,
    };
  }
  onSubmit(values){
      console.log(values);
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  onPageChange(value){
      this.setState({page: value});
  }
  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  render() {
    const { page } = this.state;
    return (
              <div>
              <PageHeader page='addbadge' />
              <CustomTabs
                  headerColor='primary'
                  onButtonClick = {this.state.page}
                  pageChange = {this.onPageChange}
                  tabs={[
                    {
                      tabName: 'Tab 1',
                      tabIcon: Face,
                      tabContent:(
                        <FirstPage onSubmit={this.nextPage}/>
                      )
                    },
                    {
                      tabName: 'Tab 2',
                      tabIcon: Chat,
                      tabContent:(
                        <SecondPage
                          previousPage={this.previousPage}
                          onSubmit={this.nextPage}/>
                      )
                    },
                    {
                      tabName: 'Tab 3',
                      tabIcon: Build,
                      tabContent:(
                        <ThirdPage
                          previousPage={this.previousPage}
                          onSubmit={this.onSubmit}/>
                      )
                    }
                  ]}
                />
                </div>
    );
  };
}
function mapStateToProps(state){
    return {
        tags : state.tags,
    }
};
export default connect(mapStateToProps)(AddBadge);
