import {combineReducers} from 'redux';
import folderReducers from './reducer';

export default combineReducers({
    data: folderReducers,
});