import React from 'react';
import {postLogout} from "../../../../state/userCredential/userCredentialAction";
import {connect} from "react-redux";
import {LogoutLink, UserInfoContainer} from "./HeaderUserInfoStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HeaderUserInfo = ({service, userState, postLogout}) => {
    const handleLogout = () => {
        postLogout(service.doLogout);
    }
    return (
        <UserInfoContainer>
            <LogoutLink onClick={handleLogout}>
                <FontAwesomeIcon icon={['fas', 'user-graduate']}
                                 style={{color: 'white'}}/> Logout {userState.userInfo?.user}
            </LogoutLink>
        </UserInfoContainer>
    );
};

const mapStateToProps = state => {
    return {userState: state.userCredentialReducer}
}

const mapDispatchToProps = (dispatch) => ({
    postLogout: (authService) => dispatch(postLogout(authService))
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserInfo);
