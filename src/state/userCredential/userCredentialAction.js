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
            user: user.userInfo,
            page: user.pageInfo
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

export const postLogin = (authLoginService, authPageService) => async dispatch => {
    dispatch(userLoginRequest())
    try {
        const loginResponse = await authLoginService();
        const pageResponse = await authPageService(loginResponse);
        dispatch(userLoginSuccess({
            userInfo: loginResponse.userInfo,
            pageInfo: pageResponse.userPage
        }));

    } catch (e) {
        console.log(e)
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