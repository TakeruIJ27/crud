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

    OPEN_DELETE_MODAL,
    CLOSE_DELETE_MODAL,

    FILTER_ITEMS,
    FILTER_ITEMS_SUCCESS,
    FILTER_ITEMS_FAILED,

    CREATE_USER,
    CREATE_USER_FAILED,
    CREATE_USER_SUCCESS,

    CLEAR_USER,

    SEARCH_USER,
    SEARCH_USER_SUCCESS,
    SEARCH_USER_FAILED
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


export function openDeleteModal(id){
    return{
        type: OPEN_DELETE_MODAL,
        id
    }
}

export function closeDeleteModal(){
    return{
        type: CLOSE_DELETE_MODAL
    }
}


export function createUser(data) {
    return {
        type: CREATE_USER,
        data
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

export function searchUser(query) { //new code 03/01/19
    return{
        type: SEARCH_USER,
        query
    }
}

export function searchUserSuccess(data) { //new code 03/01/19
    return{
        type: SEARCH_USER_SUCCESS,
        data
    }
}

export function searchUserFailed(err) { //new code 03/01/19
    return{
        type: SEARCH_USER_FAILED,
        err
    }
}


export function filterItems(name, value) { //new code 03/05/19
    return {
        type: FILTER_ITEMS,
        name,
        value
    }
}

export function filterItemsSuccess(data, filter) {//new code 03/05/19
    return{
        type: FILTER_ITEMS_SUCCESS,
        data,
        filter
    }
}

export function filterItemsFailed(err) {//new code 03/05/19
    return{
        type: FILTER_ITEMS_FAILED,
        err
    }
}