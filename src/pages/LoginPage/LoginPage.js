import useLoginPage from "./useLoginPage";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

const LoginPage = ({onNavigate, service}) => {
    const {
        viewState, refs, handleAuth
    } = useLoginPage(onNavigate, service)
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <FormInput id='userName'
                       label='User Name'
                       inputRef={refs.userNameInputElement}
                       disabled={viewState.isLoading}
                       error={viewState.error}
            />
            <FormInput id='password'
                       label='Password'
                       type='password'
                       inputRef={refs.passwordInputElement}
                       disabled={viewState.isLoading}
                       error={viewState.error}
            />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <FormButton id={'buttonLogin'} onClick={handleAuth} label={'Sign In'}
                            disabled={viewState.isLoading}/>
                {viewState.error &&
                    <span style={{color: 'red'}}>{viewState.error.login}</span>}
            </div>
        </div>
    )
}

export default LoginPage;