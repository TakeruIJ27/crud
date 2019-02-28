import {
    takeLatest,
    put,
    call
} from 'redux-saga/effects';
import apiCall from '../../../utils/ApiService';


import {

    FETCH_USERS,
    FETCH_ONE,
    EDIT_USER,
    DELETE_USER,
    CREATE_USER

} from './constants';

import {

    fetchUsersSuccess,
    fetchUsersFailed,
    fetchOneSuccess,
    fetchOneFailed,
    editUserSuccess,
    editUserFailed,
    deleteUserSuccess,
    deleteUserFailed,
    createUserSuccess,
    createUserFailed

} from './actions';


function* fetchUsersWorker(){

        try {
            const response = yield call(apiCall, 'GET', '/users');
            yield put(fetchUsersSuccess(response));
        } catch(err){
            yield put(fetchUsersFailed(err));
        }

}

function* fetchOneWorker(action){
        const id = action.id;
        try{
            const response = yield call(apiCall, 'GET', '/users/' + id); //new code
            yield put(fetchOneSuccess(response));
        } catch(err){
            yield put(fetchOneFailed(err));
        }
}

function* editUserWorker(action) {
    const id = action.id;
        try{
            const response = yield call(apiCall, 'PUT', '/users/' + id, {
                data: action.data //new code
            });
            yield put(editUserSuccess(response));
        } catch(err){
            yield put(editUserFailed(err));
        }
}

function* deleteUserWorker(action) {
    const id = action.id;
    try {
        const response = yield call(apiCall, 'DELETE', '/users/' + id); //new code
        yield put(deleteUserSuccess(response));
    } catch (err) {
        yield put(deleteUserFailed(err));
    }
}

function* createUserWorker() {
    try{
        const response = yield call(apiCall, 'POST', 'users');
        yield put(createUserSuccess(response));
    }catch(err){
        yield put(createUserFailed(err));
    }
}
 function* usersWatcher(){
    yield takeLatest(FETCH_USERS, fetchUsersWorker);
    yield takeLatest(FETCH_ONE, fetchOneWorker);
    yield takeLatest(EDIT_USER, editUserWorker);
    yield takeLatest(DELETE_USER, deleteUserWorker);
    yield takeLatest(CREATE_USER, createUserWorker);
}
 export default usersWatcher;