import React from 'react';
import {userLogout} from "../../../../state/userCredential/userCredentialAction";
import {connect} from "react-redux";

const HeaderUserInfo = ({onNavigate, service, user, userLogout}) => {
    const handleLogout = async () => {
        try {
            const result = await service.logout();
            if (result) {
                userLogout();
                onNavigate('/');
            }
        } catch (e) {
        }
    }
    return (
        <div>
            <div style={{textAlign: 'right'}}>
                <span>Welcome {user.userInfo}</span>
                <div onClick={handleLogout} style={{cursor: 'pointer'}}>Logout
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {user: state.userCredentialReducer}
}

const mapDispatchToProps = {
    userLogout
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserInfo);
