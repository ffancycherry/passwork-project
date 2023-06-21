import * as types from "./actiontype";
import axios from "axios";

const getFolders = (folders) => (
    {
        type: types.GET_FOLDERS,
        payload: folders,
    }
);

export const loadFolders = () => {
    return function (dispatch) {
        axios.get('http://localhost:5000/folders').
        then((resp) => {
            console.log("resp", resp)
            dispatch(getFolders(resp.data));
        }).catch(error => console.log(error));
    };
};