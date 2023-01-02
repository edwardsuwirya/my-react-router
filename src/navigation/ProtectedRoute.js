import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {NAVIGATION} from "../constants";
import DashboardPage from "../pages/DashboardPage";

const ProtectedRoute = ({service, localStorage}) => {
    const userState = useSelector(state => state.userCredentialReducer);
    return userState.userInfo !== null ? <DashboardPage service={service} localStorage={localStorage}/> :
        <Navigate to={NAVIGATION.INDEX.path} replace/>;
};

export default ProtectedRoute;
