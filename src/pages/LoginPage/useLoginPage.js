import {useEffect, useRef} from "react";
import {errorMessage, NAVIGATION} from "../../constants";
import {postLogin, userLoginError} from "../../state/userCredential/userCredentialAction";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useDeps} from "../../utils/hooks/useDeps";

const useLoginPage = () => {
    const {services, localstorage} = useDeps();
    const onNavigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(state => {
        // console.log('loading', state.loadingReducer.login);
        // console.log('data', state.userCredentialReducer.data);
        // console.log('error', state.loadingReducer.errorReducer.error);
        return {isLoading: state.loadingReducer.login, ...state.userCredentialReducer, error: state.errorReducer.login}
    });
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
        if (userState.data) {
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
            dispatch(postLogin(() => services.authService.doAuth(userData), services.authService.doGetAuthPage, localstorage))
        }
    }
    return {
        userState, refs: {userNameInputElement, passwordInputElement}, handleAuth
    }
}
export default useLoginPage;