import HeaderLogo from "./components/HeaderLogo";
import HeaderUserInfo from "./components/HeaderUserInfo";

const DashboardPage = ({setCurrUser, onNavigate, userInfo, service}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '24px'}}>
            <HeaderLogo/>
            <HeaderUserInfo userInfo={userInfo} setCurrUser={setCurrUser} onNavigate={onNavigate} service={service}/>
        </div>
    )
}

export default DashboardPage;