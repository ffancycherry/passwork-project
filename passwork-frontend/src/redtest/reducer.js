import * as types from "./actiontype";

const initialState = {
    folders: [],
    folder: {},
    loading: true,
};

const folderReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FOLDERS:
            return {
                ...state,
                folders: action.payload,
                loading: false,
            }
        default:
            return state;
    }
};

export default folderReducers;