// We imported the constants from our actions files.
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './actions';
import { getCookie } from '../../utils/cookie';

// initial state
const initState = {
  isLogin: getCookie('TOKEN') !== '',
};

// This is the reducer for auth we use switch to handle various cases.
const auth = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      // We use '...' (spread operator) to avoid mutating the data.
      return {
        ...state,
        ...action.payload,
        isLogin: true,
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        ...action.payload,
        isLogin: false,
      };
    }

    case LOGOUT_SUCCESS: {
      return {
        isLogin: false,
      };
    }

    case LOGOUT_FAILED: {
      return {
        ...state,
        isLogin: true,
      };
    }

    default:
      return state;
  }
};


export default auth;
