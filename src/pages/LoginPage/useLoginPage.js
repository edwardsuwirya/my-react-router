import {useEffect, useRef} from "react";
import {errorMessage} from "../../constants";
import {userLogin} from "../../state/userCredential/userCredentialAction";
import {useDispatch} from "react-redux";
import useAsync from "../../shared/hooks/useAsync";

const useLoginPage = (onNavigate, service) => {
    const [asyncReq, viewState] = useAsync();
    const dispatch = useDispatch();
    const userNameInputElement = useRef('');
    const passwordInputElement = useRef('');
    const clearForm = () => {
        userNameInputElement.current.value = '';
        passwordInputElement.current.value = '';
    }

    useEffect(() => {
        if (viewState.error) {
            clearForm();
        }
        if (viewState.data) {
            dispatch(userLogin(viewState.data));
            onNavigate('/dashboard');
        }
    }, [viewState]);

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
        await asyncReq(() => requestAuth(userData));
    }
    return {
        viewState, refs: {userNameInputElement, passwordInputElement}, handleAuth
    }
}
export default useLoginPage;