import {ACTION} from "../../constants";

const userLoginRequest = () => {
    return {
        type: ACTION.LOGIN_REQUEST
    }
}
const userLoginSuccess = (user) => {
    return {
        type: ACTION.LOGIN_SUCCESS,
        payload: {
            user: user.userInfo
        }
    }
}
const userLoginError = (error) => {
    return {
        type: ACTION.LOGIN_ERROR,
        payload: {
            error
        }
    }
}
export const userLogout = () => {
    return {
        type: ACTION.LOGOUT
    }
}

export const postLogin = (authService) => async dispatch => {
    dispatch(userLoginRequest())
    try {
        const response = await authService();
        dispatch(userLoginSuccess(response));
    } catch (e) {
        dispatch(userLoginError(e));
    }

}