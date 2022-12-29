import HeaderLogo from "./components/HeaderLogo";
import HeaderUserInfo from "./components/HeaderUserInfo";
import {Link, Outlet} from "react-router-dom";
import {NAVIGATION} from "../../constants";
import {useSelector} from "react-redux";

const DashboardPage = ({onNavigate, service}) => {
    const userState = useSelector(state => state.userCredentialReducer);

    const elem = userState.userInfo?.pages.map((p) => {
        return <Link key={p} to={NAVIGATION[p].path}>{NAVIGATION[p].label}</Link>
    })
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '24px'}}>
                <HeaderLogo/>
                <HeaderUserInfo onNavigate={onNavigate} service={service}/>
            </div>
            <div>
                {elem}
                <Outlet/>
            </div>
        </>
    )
}

export default DashboardPage;