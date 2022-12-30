import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const DashboardMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  background-image: linear-gradient(130deg, rgba(34,139,34,0.9) 60%, rgba(245,245,245,0) 100%);
  align-items: flex-start;
  position: relative;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 16px;
  margin-top: 32px;
`
export const DashboardContentContainer = styled.div`
  padding: 32px;
`