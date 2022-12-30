import styled from "styled-components";

export const UserInfoContainer = styled.div`
  position: absolute;
  bottom: 64px;
  left: 16px;
`

export const LogoutLink = styled.span`
  color: ${props => props.theme.textWhite};
  font-weight: bolder;
  cursor: pointer;
`