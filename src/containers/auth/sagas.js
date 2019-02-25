// We are going to use redux-saga as our middleware for this example...
import { push } from 'connected-react-router';
import {
  call,
  put,
  take,
  fork,
} from 'redux-saga/effects';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './actions';

// apiCall
import apiCall from '../../utils/ApiService';
import { setCookie, delCookie } from '../../utils/cookie';

function* loginFlow() {
  /*   redux-saga will only execute this function once.
    We will use while loop to prevent redux-saga to stop this function.
    Since we want it to keep watching the action. */
  while (true) {
    const { payload, onFail, onProgress } = yield take(LOGIN);

    try {
      // The 'call' effect accepts context/function in the first argument.
      // the rest of the arguments will be pass to the context.
      const response = yield call(apiCall, 'POST', '/auth/login', {
        data: payload,
        onUploadProgress: onProgress,
      });

      // Set the User token in order to persist the User login whenever it tries to reload the page.
      setCookie('TOKEN', response.data.items[0].token, 7);

      // Then dispatch the Action and redirect the user to the secured path.
      yield put({ type: LOGIN_SUCCESS });
      yield put(push('/dashboard'));
    } catch ({ response }) {
      const { data } = response;

      onFail(data.errors[0].context);
      yield put({ type: LOGIN_FAILED });
    }
  }
}


function* logoutFlow() {
  while (true) {
    const { onFail } = yield take(LOGOUT);

    try {
      yield call(apiCall, 'POST', '/auth/logout');

      // Delete the User token in order to persist the User not to login whenever it tries to login.
      delCookie('TOKEN');

      // Then dispatch the Action and redirect the user to the secured path.
      yield put({ type: LOGOUT_SUCCESS });
      yield put(push('/logout'));
    } catch (err) {
      onFail();
      yield put({ type: LOGOUT_FAILED });
    }
  }
}


export default function* authWatcher() {
  yield fork(loginFlow);
  yield fork(logoutFlow);
}
