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

export const postLogin = (authLoginService, authPageService, localStorage) => async dispatch => {
    dispatch(userLoginRequest())
    try {
        const loginResponse = await authLoginService();
        const pageResponse = await authPageService(loginResponse.name);
        await localStorage.set('token', loginResponse.token);
        dispatch(userLoginSuccess({
            userInfo: loginResponse.name,
            pageInfo: pageResponse.pages
        }));
    } catch (e) {
        console.log(e.message)
        dispatch(userLoginError({'request': e.message}));
    }
}
export const postLogout = (authLogoutService, localStorage) => async dispatch => {
    dispatch(userLogoutRequest());
    try {
        const response = await authLogoutService();
        await localStorage.clear();
        dispatch(userLogoutSuccess(response));
    } catch (e) {
        console.log(e)
    }
}