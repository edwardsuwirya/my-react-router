import React from 'react';
import {NavLinkStyle} from "./NavLinkStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavLink = ({path, label, icon}) => {
    return (
        <NavLinkStyle to={path}>
            <FontAwesomeIcon icon={['fas', icon]} style={{color: 'white'}}/> {label}
        </NavLinkStyle>
    );
};

export default NavLink;
