import { combineReducers } from 'redux';
import users from './user';
import messages from './message';

const rootReducer = combineReducers({
  users,
  messages,
});

export default rootReducer;
