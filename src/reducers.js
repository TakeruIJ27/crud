import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Place your reducers below...
import auth from './containers/auth/reducer';
import users from './containers/Pages/users/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  users
});
