// ACTION TYPES
// This declared variables below are 'constants' type for actions.
// It is highly recommended to use 'const' to declare action types.
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';


// ACTION
// This is the action that will be dispatch...
// 'payload' is the data that will be pass to your reducer.
export const authDispatcher = dispatch => ({
  login: (payload, onFail, onProgress) => dispatch({
    type: LOGIN,
    payload,
    onFail,
    onProgress,
  }),
});

export const logout = onFail => ({
  type: LOGOUT,
  onFail,
});
