import useLoginPage from "./useLoginPage";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import {
    LoginActionWrapper,
    LoginBrandImg,
    LoginContainer,
    LoginForm,
    LoginFormWrapper,
    LoginWrapper,
    WelcomeLoginText,
    WelcomeText1,
    WelcomeText2,
} from "./LoginPageStyle";

const LoginPage = ({service}) => {
    const {
        userState, refs, handleAuth
    } = useLoginPage(service)
    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginBrandImg>
                    <WelcomeText1>Nice to see you again</WelcomeText1>
                    <WelcomeText2>WELCOME BACK</WelcomeText2>
                </LoginBrandImg>
                <LoginFormWrapper>
                    <LoginForm>
                        <WelcomeLoginText>Login Account</WelcomeLoginText>
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
                        <LoginActionWrapper>
                            <FormButton id={'buttonLogin'} onClick={handleAuth} label={'Sign In'}
                                        disabled={userState.isLoading}/>
                            {userState.error &&
                                <span style={{color: 'red'}}>{userState.error.request}</span>}
                        </LoginActionWrapper>
                    </LoginForm>
                </LoginFormWrapper>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default LoginPage;