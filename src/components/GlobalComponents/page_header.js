import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageHeader extends Component {
  render(){
    return (
        <div className="navbar">
          <span className="navbar-brand">
            <img src='https://officience.com/wp-content/themes/officience/images/logo_en.png' width='100px'/>
          </span>
          <a>
          <Link className='btn' to='/'>Home Page</Link>
          </a>
          <a>
          <Link className='btn' to='/community'>Community Page</Link>
          </a>
          <a>
          <Link className='btn' to='/badge'>Badge Page</Link>
          </a>
        </div>
    );
  }
}
