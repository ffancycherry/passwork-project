import Api from "./api";
import axios from 'axios';

export const LOAD_USERS_LOADING = 'REDUX_THUNK_LOAD_FOLDERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_THUNK_LOAD_FOLDERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_THUNK_LOAD_FOLDERS_ERROR';

export const loadFolders = () => dispatch => {
    dispatch({ type: LOAD_USERS_LOADING});
    Api.getFolders()
    .then(response => response.text())
    .then(
        data => dispatch({ type: LOAD_USERS_SUCCESS, data}),
        error => dispatch({ type: LOAD_USERS_ERROR, error: error.message || 'oops error!'})
    )
};
