import HeaderLogo from "./components/HeaderLogo";
import HeaderUserInfo from "./components/HeaderUserInfo";
import {NAVIGATION} from "../../constants";
import {useSelector} from "react-redux";
import {
    DashboardContainer,
    DashboardContentContainer,
    DashboardMenuContainer,
    MenuContainer
} from "./DashboardPageStyle";
import NavLink from "../../components/NavLink";
import {Outlet} from "react-router-dom";

const DashboardPage = ({onNavigate, service, localStorage}) => {
    const userState = useSelector(state => state.userCredentialReducer);

    const elem = userState.userInfo?.pages.map((p) => {
        return <NavLink key={p} path={NAVIGATION[p].path} label={NAVIGATION[p].label} icon={NAVIGATION[p].icon}/>
    })
    return (
        <DashboardContainer>
            <DashboardMenuContainer>
                <HeaderLogo/>
                <MenuContainer>
                    {elem}
                </MenuContainer>
                <HeaderUserInfo onNavigate={onNavigate} service={service} localStorage={localStorage}/>
            </DashboardMenuContainer>
            <DashboardContentContainer>
                <Outlet/>
            </DashboardContentContainer>
        </DashboardContainer>
    )
}

export default DashboardPage;

