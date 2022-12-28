import {combineReducers} from 'redux';
import {userCredentialReducer} from "./userCredential/userCredentialReducer";

export const rootReducer = () => {
    return combineReducers({
        userCredentialReducer,
    })
}

