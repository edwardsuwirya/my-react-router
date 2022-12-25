import FormInput from "../../shared/components/formInput/FormInput";
import useLoginPage from "./useLoginPage";
import FormButton from "../../shared/components/formButton/FormButton";

const LoginPage = ({onNavigate, service}) => {
    const {
        viewState, userName, password, setUserName, setPassword, handleAuth
    } = useLoginPage({onNavigate, service})
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <FormInput id='userName'
                       label='User Name'
                       value={userName}
                       onValueChange={setUserName}
                       disabled={viewState.isLoading}
                       error={viewState.error}
            />
            <FormInput id='password'
                       label='Password'
                       type='password'
                       value={password}
                       onValueChange={setPassword}
                       disabled={viewState.isLoading}
                       error={viewState.error}
            />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <FormButton id={'buttonLogin'} onClick={handleAuth} label={'Sign In'} disabled={viewState.isLoading}/>
                {viewState.error &&
                    <span style={{color: 'red'}}>{viewState.error.login}</span>}
            </div>
        </div>
    )
}

export default LoginPage;