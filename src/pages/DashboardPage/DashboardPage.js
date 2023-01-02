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

const DashboardPage = () => {
    const userState = useSelector(state => {
        return state.userCredentialReducer
    });

    const elem = userState.data?.pageInfo.map((p) => {
        return <NavLink key={p} path={NAVIGATION[p].path} label={NAVIGATION[p].label} icon={NAVIGATION[p].icon}/>
    })
    return (
        <DashboardContainer>
            <DashboardMenuContainer>
                <HeaderLogo/>
                <MenuContainer>
                    {elem}
                </MenuContainer>
                <HeaderUserInfo/>
            </DashboardMenuContainer>
            <DashboardContentContainer>
                <Outlet/>
            </DashboardContentContainer>
        </DashboardContainer>
    )
}

export default DashboardPage;

