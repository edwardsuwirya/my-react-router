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
export const userLoginError = (error) => {
    return {
        type: ACTION.LOGIN_ERROR,
        payload: {
            error
        }
    }
}
const userLogoutRequest = () => {
    return {
        type: ACTION.LOGOUT_REQUEST
    }
}
const userLogoutSuccess = () => {
    return {
        type: ACTION.LOGOUT_SUCCESS,
    }
}

export const postLogin = (authLoginService) => async dispatch => {
    dispatch(userLoginRequest())
    try {
        const response = await authLoginService();
        dispatch(userLoginSuccess(response));
    } catch (e) {
        dispatch(userLoginError(e));
    }
}
export const postLogout = (authLogoutService) => async dispatch => {
    dispatch(userLogoutRequest())
    try {
        const response = await authLogoutService();
        dispatch(userLogoutSuccess(response));
    } catch (e) {
        console.log(e)
    }
}