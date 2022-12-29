import registeredUser from '../sample/user.json';
import authorizedPage from '../sample/user_page.json';

const authService = () => {
    const doAuth = ({userName, password}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userName === registeredUser.userName && password === registeredUser.password) {
                    resolve({userInfo: userName})
                } else {
                    reject({'request': 'unauthorized'});
                }
            }, 2000)
        })
    }
    const doGetAuthPage = (userName) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({userPage: authorizedPage.pages})
            }, 1000)
        })
    }
    const doLogout = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, 1000)
        })
    }
    return {doAuth, doLogout, doGetAuthPage}
}

export default authService;
