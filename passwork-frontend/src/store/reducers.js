import {combineReducers} from 'redux';
import treeReducer from './treereducer';
import apiReducer from './apireduer';

export default combineReducers({
    tree: treeReducer,
    api: apiReducer,
});