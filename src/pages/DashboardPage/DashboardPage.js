import HeaderLogo from "./components/HeaderLogo";
import HeaderUserInfo from "./components/HeaderUserInfo";

const DashboardPage = ({onNavigate, service}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '24px'}}>
            <HeaderLogo/>
            <HeaderUserInfo onNavigate={onNavigate} service={service}/>
        </div>
    )
}

export default DashboardPage;