import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {NAVIGATION} from "../constants";

const ProtectedRoute = () => {
    const userState = useSelector(state => state.userCredentialReducer);
    return userState.userInfo !== null ? <Outlet/> : <Navigate to={NAVIGATION.INDEX.path} replace/>;
};

export default ProtectedRoute;
