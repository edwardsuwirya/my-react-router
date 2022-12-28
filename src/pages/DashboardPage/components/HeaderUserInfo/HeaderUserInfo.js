import React, {useEffect} from 'react';
import {postLogout} from "../../../../state/userCredential/userCredentialAction";
import {connect} from "react-redux";

const HeaderUserInfo = ({onNavigate, service, userState, postLogout}) => {
    useEffect(() => {
        if (!userState.userInfo) {
            onNavigate('/');
        }
    }, [userState])
    const handleLogout = () => {
        postLogout(service.logout)
    }
    return (
        <div>
            <div style={{textAlign: 'right'}}>
                <span>Welcome {userState.userInfo}</span>
                <div onClick={handleLogout} style={{cursor: 'pointer'}}>Logout
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {userState: state.userCredentialReducer}
}

const mapDispatchToProps = (dispatch) => ({
    postLogout: (authService) => dispatch(postLogout(authService))
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserInfo);
