import {combineReducers} from 'redux';
import {userCredentialReducer} from "./userCredential/userCredentialReducer";
import {coursesReducer} from "./courses/coursesReducer";

export const rootReducer = () => {
    return combineReducers({
        userCredentialReducer,
        coursesReducer
    })
}

