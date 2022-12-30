import React from 'react';
import {Logo} from "./HeaderLogoStyle";
import enigma from '../../../../assets/image/enigma.png';

const HeaderLogo = () => {
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            <Logo src={enigma} alt={'enigma-logo'}/>
            <div style={{
                borderBottom: '1px solid lightgrey',
                width: '100%'
            }}></div>
        </div>
    );
};

export default HeaderLogo;
