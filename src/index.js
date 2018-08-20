import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import HomeIndex from './components/HomePage/home_index';
import TribeIndex from './components/TribePage/tribe_index';
import BadgeIndex from './components/BadgePage/badge_index';
import UserDetail from './components/TribePage/user_detail';
import BadgeDetail from './components/BadgePage/badge_detail';
import AddBadge from './components/AddBadgePage/add_badge';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route path='/addbadge' component={AddBadge}/>
          <Route path='/tribe/:id' component={UserDetail}/>
          <Route path='/tribe' component={TribeIndex}/>
          <Route path='/badge/:id' component={BadgeDetail}/>
          <Route path='/badge' component={BadgeIndex}/>
          <Route path='/' component={HomeIndex}/>
        </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
