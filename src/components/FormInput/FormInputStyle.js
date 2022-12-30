import styled from "styled-components";

export const StyledInput = styled.input`
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 5px solid ${props => props.theme.main};
  background-color: ${props => props.theme.textWhite};
  padding: 12px;
  letter-spacing: 1px;
  border-radius: 2px;

  ::placeholder, ::-webkit-input-placeholder {
    color: ${props => props.theme.textPlaceholder};
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.textPlaceholder};
  }

  :focus {
    outline: ${props => props.theme.textPlaceholder};
  }
`


export const StyledErrorLabel = styled.span`
  color: ${props => props.theme.textError};
  font-size: 12px;
  margin: 4px;
  font-style: italic;
`

export const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`