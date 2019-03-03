import {

    FETCH_USERS_FAILED,
    FETCH_USERS_SUCCESS,

    FETCH_ONE_FAILED,
    FETCH_ONE_SUCCESS,

    EDIT_USER_FAILED,
    EDIT_USER_SUCCESS,

    DELETE_USER_FAILED,
    DELETE_USER_SUCCESS,

    OPEN_DELETE_MODAL,
    CLOSE_DELETE_MODAL,

    CREATE_USER_FAILED,
    CREATE_USER_SUCCESS,

    CLEAR_USER,

    SEARCH_USER_SUCCESS,
    SEARCH_USER_FAILED
} from './constants';

const initState={ //new code
    user:{
        name:'',
        age:'',
        about:'',
        address:'',
        email:'',
        gender:'',
        company:''
    },
    data:[],
    toDelete:{
        id:'',
        isModalOpen:false
    }
}


function users(state = initState, action) {
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
                    user: action.data //new code [0] => DELETED
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


            case OPEN_DELETE_MODAL:  //new code 02/28/19
                return{
                    ...state,
                    toDelete:{
                        id: action.id,
                        isModalOpen: true
                    }
                }


            case CLOSE_DELETE_MODAL:  //new code 02/28/19
                return{
                    ...state,
                    toDelete: initState.toDelete
                }


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
                    user: action.data,
                    data: state.data.filter(list => list.id !== state.toDelete.id), //new code 03/01/19
                    toDelete: initState.toDelete //new code 03/01/19
                };

            case DELETE_USER_FAILED:
                return {
                    ...state,
                    error: action.error,
                    toDelete: initState.toDelete //new code 03/01/19
                };

            case CLEAR_USER: //new code 02/27/19
                return{
                    ...state,
                    user: initState.user
                };

            case SEARCH_USER_SUCCESS:
                return{
                    ...state,
                    data: action.data
                }
            
            case SEARCH_USER_FAILED:
                return{
                    ...state,
                    error: action.err
                }

            default:
                return state;
    }
}


export default users;