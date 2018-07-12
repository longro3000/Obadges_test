import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import HomeIndex from './components/HomePage/home_index';
import CommunityIndex from './components/CommunityPage/community_index';
import BadgeIndex from './components/BadgePage/badge_index';
import UserDetail from './components/CommunityPage/user_detail';
import BadgeDetail from './components/BadgePage/badge_detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/community/:id' component={UserDetail}/>
          <Route path='/community' component={CommunityIndex}/>
          <Route path='/badge/:id' component={BadgeDetail}/>
          <Route path='/badge' component={BadgeIndex}/>
          <Route path='/' component={HomeIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
