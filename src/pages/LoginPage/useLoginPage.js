import {useEffect, useRef} from "react";
import {errorMessage, NAVIGATION} from "../../constants";
import {postLogin, userLoginError} from "../../state/userCredential/userCredentialAction";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const useLoginPage = (service) => {
    const onNavigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(state => state.userCredentialReducer);
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
            onNavigate(NAVIGATION.HOME_ROUTE.path);
        }
    }, [userState]);

    const handleAuth = () => {
        const userData = {
            userName: userNameInputElement.current?.value, password: passwordInputElement.current?.value,
        };
        let errors = {}
        if (userData.password === '') {
            errors = {...errors, password: errorMessage.emptyPassword}
        }
        if (userData.userName === '') {
            errors = {...errors, userName: errorMessage.emptyUserName}
        }
        if (Object.keys(errors).length > 0) {
            dispatch(userLoginError(errors));
        } else {
            dispatch(postLogin(() => service.doAuth(userData), service.doGetAuthPage))
        }
    }
    return {
        userState, refs: {userNameInputElement, passwordInputElement}, handleAuth
    }
}
export default useLoginPage;