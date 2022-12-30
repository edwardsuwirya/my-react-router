import useLoginPage from "./useLoginPage";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import {
    InstagramText,
    LoginActionWrapper,
    LoginBottomImage,
    LoginBrandImg,
    LoginContainer,
    LoginForm,
    LoginFormWrapper,
    LoginWrapper,
    SignUpLink,
    SignUpText,
    SignUpWrapper,
    SocMedWrapper,
    WelcomeLoginText,
    WelcomeText1,
    WelcomeText2,
} from "./LoginPageStyle";

import instagram from "../../assets/image/instagram.png";
import tree from "../../assets/image/tree.png"

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
                    <SocMedWrapper>
                        <img src={instagram} width={36} height={36} alt={'instagram'}/>
                        <InstagramText>enigmacamp</InstagramText>
                    </SocMedWrapper>
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
                            <SignUpWrapper>
                                <SignUpText>Don't have an account ?</SignUpText> <SignUpLink>Sign Up</SignUpLink>
                            </SignUpWrapper>
                        </LoginActionWrapper>
                    </LoginForm>
                    <LoginBottomImage src={tree}/>

                </LoginFormWrapper>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default LoginPage;