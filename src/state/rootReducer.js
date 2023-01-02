import {combineReducers} from 'redux';
import {userCredentialReducer} from "./userCredential/userCredentialReducer";
import {coursesReducer} from "./courses/coursesReducer";
import {loadingReducer} from "./commonReducers/loadingReducer";
import {errorReducer} from "./commonReducers/errorReducer";

export const rootReducer = () => {
    return combineReducers({
        loadingReducer,
        errorReducer,
        userCredentialReducer,
        coursesReducer
    })
}

