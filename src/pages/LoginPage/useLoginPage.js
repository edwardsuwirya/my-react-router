import {useEffect, useRef} from "react";
import {errorMessage} from "../../constants";
import {postLogin} from "../../state/userCredential/userCredentialAction";
import {useDispatch, useSelector} from "react-redux";

const useLoginPage = (onNavigate, service) => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.userCredentialReducer)
    const userNameInputElement = useRef('');
    const passwordInputElement = useRef('');
    const clearForm = () => {
        userNameInputElement.current.value = '';
        passwordInputElement.current.value = '';
    }

    useEffect(() => {
        if (userState.error) {
            clearForm();
        }
        if (userState.userInfo) {
            onNavigate('/dashboard');
        }
    }, [userState]);

    const requestAuth = (userData) => {
        let errors = {}
        if (userData.password === '') {
            errors = {...errors, password: errorMessage.emptyPassword}
        }
        if (userData.userName === '') {
            errors = {...errors, userName: errorMessage.emptyUserName}
        }
        if (Object.keys(errors).length > 0) {
            return Promise.reject(errors)
        } else {
            return service.auth(userData);
        }

    }
    const handleAuth = async () => {
        const userData = {
            userName: userNameInputElement.current?.value, password: passwordInputElement.current?.value,
        };
        dispatch(postLogin(() => requestAuth(userData)))
    }
    return {
        userState, refs: {userNameInputElement, passwordInputElement}, handleAuth
    }
}
export default useLoginPage;