import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: forestgreen;
  color: white;
  padding: 8px;
  border-radius: 16px;
  border: none;
  letter-spacing: 2px;
`

export const StyledInput = styled.input`
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left: 5px solid forestgreen;
  background-color: cornsilk;
  padding: 12px;
  letter-spacing: 1px;
  border-radius: 2px;

  ::placeholder, ::-webkit-input-placeholder {
    color: lightgrey;
  }

  :-ms-input-placeholder {
    color: lightgrey;
  }

  :focus {
    outline: lightgrey;
  }
`


export const StyledErrorLabel = styled.span`
  color: tomato;
  font-size: 12px;
  margin: 4px;
  font-style: italic;
`

export const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`