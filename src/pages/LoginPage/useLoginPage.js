import useViewState from "../../shared/hooks/useViewState";
import {useRef} from "react";
import {errorMessage} from "../../constants";
import {userLogin} from "../../state/userCredential/userCredentialAction";
import {useDispatch} from "react-redux";

const useLoginPage = (onNavigate, service) => {
    const {viewState, setLoading, setError} = useViewState();
    const dispatch = useDispatch()
    const userNameInputElement = useRef('');
    const passwordInputElement = useRef('');
    const clearForm = () => {
        userNameInputElement.current.value = '';
        passwordInputElement.current.value = '';
    }
    const handleAuth = async () => {
        setLoading();
        const userData = {
            userName: userNameInputElement.current?.value,
            password: passwordInputElement.current?.value,
        };
        if (userData.userName && userData.password) {
            try {
                const user = await service.auth(userData);
                dispatch(userLogin(user.userInfo));
                onNavigate('/dashboard');
            } catch (e) {
                clearForm();
                setError({...viewState.error, login: errorMessage.invalidLogin})
            }
        } else {
            let errors = {}
            if (userData.password === '') {
                errors = {...errors, password: errorMessage.emptyPassword}
            }
            if (userData.userName === '') {
                errors = {...errors, userName: errorMessage.emptyUserName}
            }
            setError({...errors})
        }
    }
    return {
        viewState, refs: {userNameInputElement, passwordInputElement}, handleAuth
    }
}
export default useLoginPage;