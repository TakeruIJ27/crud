import {

    FETCH_USERS_FAILED,
    FETCH_USERS_SUCCESS,

    FETCH_ONE_FAILED,
    FETCH_ONE_SUCCESS,

    EDIT_USER_FAILED,
    EDIT_USER_SUCCESS,

    DELETE_USER_FAILED,
    DELETE_USER_SUCCESS,

    CREATE_USER_FAILED,
    CREATE_USER_SUCCESS,

} from './constants';


function users(state = {}, action) {
    switch(action.type) {

            case FETCH_USERS_SUCCESS:
                return {
                    ...state,
                    data: action.data
                };

            case FETCH_USERS_FAILED:
                return {
                    ...state,
                    error: action.error
                };


            case FETCH_ONE_SUCCESS:
                return{
                    ...state,
                    user: action.data
                };

            case FETCH_ONE_FAILED:
                return{
                    ...state,
                    error: action.error
                };


            case EDIT_USER_SUCCESS:
                return{
                    ...state,
                    user: action.data
                };

            case EDIT_USER_FAILED:
                return{
                    ...state,
                    error: action.error
                };


            case CREATE_USER_SUCCESS:
                return {
                    ...state,
                    user: action.data
                };

            case CREATE_USER_FAILED:
                return {
                    ...state,
                    error: action.error
                };  
                
                
            case DELETE_USER_SUCCESS:
                return {
                    ...state,
                    user: action.data
                };

            case DELETE_USER_FAILED:
                return {
                    ...state,
                    error: action.error
                };


            default:
                return state;
    }
}


export default users;