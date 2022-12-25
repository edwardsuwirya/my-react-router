import useViewState from "../../shared/useViewState";
import {useState} from "react";
import {errorMessage} from "../../shared/constants";

const useLoginPage = ({onNavigate, service}) => {
    const authService = service[0];
    const {viewState, setLoading, setError} = useViewState();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const clearForm = () => {
        setUserName('');
        setPassword('');
    }
    const handleAuth = async () => {
        setLoading();
        if (userName !== '' && password !== '') {
            try {
                const userInfo = await authService.doAuth({userName, password});
                onNavigate(userInfo);
            } catch (e) {
                console.log(e)
                clearForm();
                setError({...viewState.error, login: errorMessage.invalidLogin})
            }
        } else {
            let errors = {}
            if (password === '') {
                errors = {...errors, password: errorMessage.emptyPassword}
            }
            if (userName === '') {
                errors = {...errors, userName: errorMessage.emptyUserName}
            }
            setError({...errors})
        }
    }
    return {
        viewState, userName, password, setUserName, setPassword, handleAuth
    }
}
export default useLoginPage;