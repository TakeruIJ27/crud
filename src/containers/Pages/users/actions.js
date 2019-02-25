import {

FETCH_USERS,
FETCH_USERS_FAILED,
FETCH_USERS_SUCCESS,

FETCH_ONE,
FETCH_ONE_FAILED,
FETCH_ONE_SUCCESS,

EDIT_USER,
EDIT_USER_FAILED,
EDIT_USER_SUCCESS,

DELETE_USER,
DELETE_USER_FAILED,
DELETE_USER_SUCCESS,

CREATE_USER,
CREATE_USER_FAILED,
CREATE_USER_SUCCESS,

} from './constants';




function fetchUsers() {
    return {
        type: FETCH_USERS
    }
}

function fetchUsersSuccess(data) {
    return {
        type: FETCH_USERS_SUCCESS,
        data
    }
}

function fetchUsersFailed(error) {
    return {
        type: FETCH_USERS_FAILED,
        error
    }
}



function fetchOne (id) {
    return {
        type: FETCH_ONE,
        id
    }
}

function fetchOneSuccess (data) {
    return {
        type: FETCH_ONE_SUCCESS,
        data
    }
}

function fetchOneFailed (error) {
    return{
        type: FETCH_ONE_FAILED,
        error
    }
}



function editUser (id){
    return{
        type: EDIT_USER,
        id
    }
}

function editUserSuccess(data) {
    return{
        type: EDIT_USER_SUCCESS,
        data
    }
}

function editUserFailed(error) {
    return{
        type: EDIT_USER_FAILED,
        error
    }
}



function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    }
}

function deleteUserSuccess(data) {
    return {
        type: DELETE_USER_SUCCESS,
        data
    }
}

function deleteUserFailed(error) {
    return {
        type: DELETE_USER_FAILED,
        error
    }
}



function createUser() {
    return {
        type: CREATE_USER
    }
}

function createUserSuccess(data) {
    return {
        type: CREATE_USER_SUCCESS,
        data
    }
}

function createUserFailed(error) {
    return {
        type: CREATE_USER_FAILED,
        error
    }
}