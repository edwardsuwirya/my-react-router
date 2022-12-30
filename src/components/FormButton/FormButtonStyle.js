import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${props => props.theme.main};;
  color: ${props => props.theme.textWhite};;
  padding: 8px;
  border-radius: 16px;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`

export const ButtonLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 24px;
`