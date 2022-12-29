import styled from "styled-components";
import bg from '../../assets/bg.jpg';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const LoginWrapper = styled.div`
  display: flex;
  width: 75%;
  height: 75%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const WelcomeText2 = styled.span`
  letter-spacing: 16px;
  color:whitesmoke;
  font-size: 24px;
  margin-top: 8px;
`
export const WelcomeText1= styled.span`
  letter-spacing: 4px;
  color:whitesmoke;
  font-size: 14px;
`
export const WelcomeLoginText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: forestgreen;
  letter-spacing: 2px;
`
export const LoginActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LoginBrandImg = styled.div`
  flex-grow: 1;
  flex-direction: column;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 70%;
`

