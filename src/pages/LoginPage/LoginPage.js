import useLoginPage from "./useLoginPage";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

const LoginPage = ({service}) => {
    const {
        userState, refs, handleAuth
    } = useLoginPage(service)
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <FormInput id='userName'
                       label='User Name'
                       inputRef={refs.userNameInputElement}
                       disabled={userState.isLoading}
                       error={userState.error}
            />
            <FormInput id='password'
                       label='Password'
                       type='password'
                       inputRef={refs.passwordInputElement}
                       disabled={userState.isLoading}
                       error={userState.error}
            />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <FormButton id={'buttonLogin'} onClick={handleAuth} label={'Sign In'}
                            disabled={userState.isLoading}/>
                {userState.error &&
                    <span style={{color: 'red'}}>{userState.error.request}</span>}
            </div>
        </div>
    )
}

export default LoginPage;