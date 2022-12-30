import React, {useEffect} from 'react';
import {postLogout} from "../../../../state/userCredential/userCredentialAction";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {NAVIGATION} from "../../../../constants";
import {LogoutLink, UserInfoContainer} from "./HeaderUserInfoStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HeaderUserInfo = ({service, userState, postLogout}) => {
    const onNavigate = useNavigate();
    useEffect(() => {
        if (!userState.userInfo) {
            onNavigate(NAVIGATION.INDEX.path);
        }
    }, [userState])
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
