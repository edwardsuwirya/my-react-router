import HeaderLogo from "./components/HeaderLogo";
import HeaderUserInfo from "./components/HeaderUserInfo";
import {Link, Outlet} from "react-router-dom";
import {NAVIGATION} from "../../constants";

const DashboardPage = ({onNavigate, service}) => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '24px'}}>
                <HeaderLogo/>
                <HeaderUserInfo onNavigate={onNavigate} service={service}/>
            </div>
            <div>
                <Link to={NAVIGATION.COURSE_ROUTE}>Course</Link>
                <Link to={NAVIGATION.COURSE_TYPE_ROUTE}>Course Type</Link>
                <Outlet/>
            </div>
        </>
    )
}

export default DashboardPage;