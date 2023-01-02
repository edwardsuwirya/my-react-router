import React from 'react';
import {postLogout} from "../../../../state/userCredential/userCredentialAction";
import {connect} from "react-redux";
import {LogoutLink, UserInfoContainer} from "./HeaderUserInfoStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDeps} from "../../../../utils/hooks/useDeps";

const HeaderUserInfo = ({userState, postLogout}) => {
    const {services, localstorage} = useDeps();
    const handleLogout = () => {
        postLogout(services.authService.doLogout, localstorage);
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
    postLogout: (authService, localStorage) => dispatch(postLogout(authService, localStorage))
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserInfo);
