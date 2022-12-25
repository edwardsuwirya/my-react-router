const authService = () => {
    const registeredUser = {
        userName: 'enigma',
        password: '123'
    }
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
    return {doAuth}
}

export default authService;
