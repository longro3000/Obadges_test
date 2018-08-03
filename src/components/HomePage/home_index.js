import React, { Component } from 'react';
import PageHeader from '../GlobalComponents/page_header';

export default class HomeIndex extends Component {
  render() {
    return (
        <div>
        <PageHeader home='home' />
        <div>Home Page</div>
        </div>
    );
  }
}
