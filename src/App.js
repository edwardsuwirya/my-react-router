import './App.css';
import LoginPage from "./pages/loginPage/LoginPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import {useState} from "react";

const App = (props) => {
    const {services} = props;
    const [currUser, setCurrUser] = useState('');
    const [page, setPage] = useState(0);

    const handleGoToDashboard = (user) => {
        setCurrUser(user.userInfo);
        setPage(1);
    }

    const handleLogout = () => {
        setCurrUser('');
        setPage(0);
    }
    return (
        <>
            {page === 0 && <LoginPage onNavigate={handleGoToDashboard} service={[services.authService]}/>}
            {page === 1 && <DashboardPage onNavigate={handleLogout} userInfo={currUser}/>}
        </>
    );
}

export default App;
