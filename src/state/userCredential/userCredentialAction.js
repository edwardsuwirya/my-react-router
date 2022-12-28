import {ACTION} from "../../constants";

export const userLogin = (user) => {
    return {
        type: ACTION.LOGIN,
        payload: {
            user: user.userInfo
        }
    }
}
export const userLogout = () => {
    return {
        type: ACTION.LOGOUT
    }
}