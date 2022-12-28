import registeredUser from '../sample/user.json';

const authService = () => {
    const doAuth = ({userName, password}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userName === registeredUser.userName && password === registeredUser.password) {
                    resolve({userInfo: userName})
                } else {
                    reject('unauthorized');
                }
            }, 3000)
        })
    }
    const doLogout = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, 1000)
        })
    }
    return {doAuth, doLogout}
}

export default authService;
