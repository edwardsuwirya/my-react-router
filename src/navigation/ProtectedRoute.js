import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {NAVIGATION} from "../constants";
import DashboardPage from "../pages/DashboardPage";

const ProtectedRoute = () => {
    const userState = useSelector(state => state.userCredentialReducer);
    return userState.data !== null ? <DashboardPage/> : <Navigate to={NAVIGATION.INDEX.path} replace/>;
};

export default ProtectedRoute;
