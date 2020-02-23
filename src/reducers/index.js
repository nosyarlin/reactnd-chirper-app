import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authedUser from '../reducers/authedUser';
import tweets from '../reducers/tweets';
import users from '../reducers/users';

export default combineReducers({
  authedUser,
  tweets,
  users,
  loadingBar: loadingBarReducer,
});