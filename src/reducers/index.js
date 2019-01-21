import { combineReducers } from 'redux';
import login from "./login";
import admin from './admin';


const rootReducer = combineReducers({
    login,
    admin
});

export default rootReducer;