import {
    takeLatest,
    put,
    call,
    
} from 'redux-saga/effects';


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
            const response = yield call('GET', '/users');
            yield put(fetchUsersSuccess(response.data));
        } catch(err){
            yield put(fetchUsersFailed(err));
        }

}

function* fetchOneWorker(action){
        const id = action.id;
        try{
            const response = yield call('GET', '/users?_id=' + id);
            yield put(fetchOneSuccess(response.data));
        } catch(err){
            yield put(fetchOneFailed(err));
        }
}

function* editUserWorker() {
    const id = action.id;
        try{
            const response = yield call('PUT', '/users?_id=' + id);
            yield put(editUserSuccess(response.data));
        } catch(err){
            yield put(editUserFailed(err));
        }
}

function* deleteUserWorker(action) {
    const id = action.id;
    try {
        const response = yield call('DELETE', '/users?_id=' + id);
        yield put(deleteUserSuccess(response.data));
    } catch (err) {
        yield put(deleteUserFailed(err));
    }
}

function* createUserWorker() {
    try{
        const response = yield call('POST', 'users');
        yield put(createUserSuccess(response.data));
    }catch(err){
        yield put(createUserFailed(err));
    }
}

export default function* usersWatcher(){
    yield takeLatest(FETCH_USERS, fetchUsersWorker);
    yield takeLatest(FETCH_ONE, fetchOneWorker);
    yield takeLatest(EDIT_USER, editUserWorker);
    yield takeLatest(DELETE_USER, deleteUserWorker);
    yield takeLatest(CREATE_USER, createUserWorker);
}
