import {ACTION} from "../../constants";

const userCredentialInitState = {
    isLoading: false, userInfo: '', error: null
}

export const userCredentialReducer = (state = userCredentialInitState, action) => {
    switch (action.type) {
        case ACTION.LOGIN_REQUEST:
            return {isLoading: true, userInfo: '', error: null}
        case ACTION.LOGIN_SUCCESS:
            return {isLoading: false, userInfo: action.payload.user, error: null}
        case ACTION.LOGIN_ERROR:
            return {isLoading: false, userInfo: '', error: action.payload.error}
        case ACTION.LOGOUT:
            return {...state, userInfo: ''}
        default:
            return state
    }
}
