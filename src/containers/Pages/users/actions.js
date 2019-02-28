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

    CLEAR_USER
} from './constants';



export function fetchUsers() {
    return {
        type: FETCH_USERS
    }
}

export function fetchUsersSuccess(data) {
    return {
        type: FETCH_USERS_SUCCESS,
        data
    }
}

export function fetchUsersFailed(error) {
    return {
        type: FETCH_USERS_FAILED,
        error
    }
}



export function fetchOne (id) {
    return {
        type: FETCH_ONE,
        id
    }
}

export function fetchOneSuccess (data) {
    return {
        type: FETCH_ONE_SUCCESS,
        data
    }
}

export function fetchOneFailed (error) {
    return{
        type: FETCH_ONE_FAILED,
        error
    }
}



export function editUser (id, data){
    return{
        type: EDIT_USER,
        id,
        data
    }
}

export function editUserSuccess(data) {
    return{
        type: EDIT_USER_SUCCESS,
        data
    }
}

export function editUserFailed(error) {
    return{
        type: EDIT_USER_FAILED,
        error
    }
}



export function deleteUser(id) {
    return {
        type: DELETE_USER,
        id
    }
}

export function deleteUserSuccess(data) {
    return {
        type: DELETE_USER_SUCCESS,
        data
    }
}

export function deleteUserFailed(error) {
    return {
        type: DELETE_USER_FAILED,
        error
    }
}



export function createUser() {
    return {
        type: CREATE_USER
    }
}

export function createUserSuccess(data) {
    return {
        type: CREATE_USER_SUCCESS,
        data
    }
}

export function createUserFailed(error) {
    return {
        type: CREATE_USER_FAILED,
        error
    }
}

export function clearUser(){
    return{
        type: CLEAR_USER
    }
}