import React from 'react';

const HeaderUserInfo = ({userInfo, setCurrUser, onNavigate, service}) => {
    const handleLogout = async () => {
        try {
            const result = await service.logout();
            if (result) {
                setCurrUser('');
                onNavigate('/');
            }
        } catch (e) {
        }
    }
    return (
        <div>
            <div style={{textAlign: 'right'}}>
                <span>Welcome {userInfo}</span>
                <div onClick={handleLogout} style={{cursor: 'pointer'}}>Logout
                </div>
            </div>
        </div>
    );
};

export default HeaderUserInfo;
