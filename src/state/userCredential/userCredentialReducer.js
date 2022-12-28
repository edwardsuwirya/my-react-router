import {ACTION} from "../../constants";

const userCredentialInitState = {
    userInfo: ''
}

export const userCredentialReducer = (state = userCredentialInitState, action) => {
    switch (action.type) {
        case ACTION.LOGIN:
            console.log('rdx', action)
            return {...state, userInfo: action.payload.user}
        case ACTION.LOGOUT:
            return {...state, userInfo: ''}
        default:
            return state
    }
}
