import {
    takeLatest,
    put,
    call,
    all,
    select
} from 'redux-saga/effects';

import qs from 'query-string';

import {Toast} from '../../../components/Base';
import apiCall from '../../../utils/ApiService';

import {

    FETCH_USERS,
    FETCH_ONE,
    EDIT_USER,
    DELETE_USER,
    CREATE_USER,
    SEARCH_USER,
    FILTER_ITEMS

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
    createUserFailed,
    searchUserSuccess,
    searchUserFailed,
    filterItemsSuccess,
    filterItemsFailed

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
            yield Toast.show({ message:"Yatta desu!! (Successfully Edited!)" + response.name, intent:'success'});//new code 02/28/19
        } catch(err){
            yield put(editUserFailed(err));
            yield Toast.show({ message: ">_< Failed to Edit!!", intent: 'danger' });//new code 02/28/19
        }
}

function* deleteUserWorker(action) {
    const id = action.id;
    try {
        const response = yield call(apiCall, 'DELETE', '/users/' + id); //new code
        yield put(deleteUserSuccess(response));
        yield Toast.show({ message: "Yatta desu!! (Success!)", intent: 'success' });//new code 02/28/19
    } catch (err) {
        yield put(deleteUserFailed(err));
        yield Toast.show({ message: ">_< Failed to Delete!!", intent: 'danger' });//new code 02/28/19
    }
}

function* createUserWorker(action) {
    try{
        const response = yield call(apiCall, 'POST', '/users',{
            data: action.data
        });
        yield put(createUserSuccess(response));
    }catch(err){
        yield put(createUserFailed(err));
    }
}

function* searchUserWorker(action){
    try{
        const response = yield call(apiCall, 'GET', 'users?=q' + action.query);
        yield put(searchUserSuccess(response));
    }catch(err){
        yield put(searchUserFailed(err));
    }
}

function* filterItemsWorker(action) { //new code 03/05/19
    try{
        const {name, value} = action; //destructure
        const filters = yield select(({users}) => {// select is like mapStateToProps
            return{
                ...users.filters, //spread - reuse or spread yung laman ng object
                [name]: value //computed key
            }
        });

        const stringifiedFilters = qs.stringify(filters); //object to url = stringify, from url to object = parse
        const response = yield call(apiCall, "GET", `/users?${stringifiedFilters}`); //data

        yield put(filterItemsSuccess(response, filters));
    }catch(err){
        yield put(filterItemsFailed(err));
    }
}

 function* usersWatcher(){
    yield takeLatest(FETCH_USERS, fetchUsersWorker);
    yield takeLatest(FETCH_ONE, fetchOneWorker);
    yield takeLatest(EDIT_USER, editUserWorker);
    yield takeLatest(DELETE_USER, deleteUserWorker);
    yield takeLatest(CREATE_USER, createUserWorker);
    yield takeLatest(SEARCH_USER, searchUserWorker);
    yield takeLatest(FILTER_ITEMS, filterItemsWorker);
}
 export default usersWatcher;