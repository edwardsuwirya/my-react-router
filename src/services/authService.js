import {SERVICE} from "../constants";

const authService = ({doPost, doGet}) => {
    const doAuth = async ({userName, password}) => {
        return await doPost({
            url: SERVICE.LOGIN, data: {
                userName: userName,
                password: password
            }
        })
    }
    const doGetAuthPage = async (userName) => {
        return await doGet({
            url: `${SERVICE.USER_PAGES}?user=` + userName
        })
    }
    const doLogout = async () => {
        return await doPost({
            url: SERVICE.LOGOUT
        })
    }
    return {doAuth, doLogout, doGetAuthPage}
}

export default authService;
