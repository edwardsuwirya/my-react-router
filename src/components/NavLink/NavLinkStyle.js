import {Link} from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyle = styled(Link)`
  color: ${props => props.theme.textWhite};
  text-decoration: none;
`