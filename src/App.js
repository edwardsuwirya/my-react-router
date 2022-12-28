import './App.css';
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import {useState} from "react";

const App = (props) => {
    const {services} = props;
    const [page, setPage] = useState('/');

    let Component;
    let compProps = {};

    switch (page) {
        case "/dashboard":
            Component = DashboardPage;
            compProps = {
                ...compProps,
                service: {logout: services.authService.doLogout}
            }
            break;
        default:
            Component = LoginPage;
            compProps = {
                ...compProps,
                service: {auth: services.authService.doAuth}
            }
            break;
    }

    return (
        <Component onNavigate={setPage} {...compProps}/>
    );
}

export default App;
