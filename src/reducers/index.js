import { combineReducers } from 'redux';


import Users from './reducer_users';
import Tags from './reducer_tags';
import Badges from './reducer_badges';

const rootReducer = combineReducers({
  tags: Tags,
  badges: Badges,
  users: Users
});
export default rootReducer;
