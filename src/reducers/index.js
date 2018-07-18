import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Users from './reducer_users';
import Tags from './reducer_tags';
import Badges from './reducer_badges';

const rootReducer = combineReducers({
  tags: Tags,
  badges: Badges,
  users: Users,
  form: formReducer
});
export default rootReducer;
