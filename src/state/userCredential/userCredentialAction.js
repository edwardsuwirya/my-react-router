import {action} from "../../constants";

export const userLogin = (user) => {
    return {
        type: action.LOGIN,
        payload: {
            user
        }
    }
}
export const userLogout = () => {
    return {
        type: action.LOGOUT
    }
}