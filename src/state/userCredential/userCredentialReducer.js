import {ACTION} from "../../constants";

const userCredentialInitState = {
    isLoading: false, userInfo: null, error: null
}

export const userCredentialReducer = (state = userCredentialInitState, action) => {
    switch (action.type) {
        case ACTION.LOGIN_REQUEST:
            return {...state, error: null, isLoading: true}
        case ACTION.LOGOUT_REQUEST:
            return {...state, isLoading: true}
        case ACTION.LOGIN_SUCCESS:
            return {...state, isLoading: false, userInfo: action.payload.user}
        case ACTION.LOGIN_ERROR:
            return {...state, isLoading: false, error: action.payload.error}
        case ACTION.LOGOUT_SUCCESS:
            return {...state, isLoading: false, userInfo: null, error: null}
        default:
            return state
    }
}
