import {ACTION} from "../../constants";

const userCredentialInitState = {
    data: null
}

export const userCredentialReducer = (state = userCredentialInitState, action) => {
    switch (action.type) {
        case ACTION.LOGIN_SUCCESS:
            return {
                ...state, data: action.payload.data
            }
        case ACTION.LOGOUT_SUCCESS:
            return {data: null}
        default:
            return state
    }
}
