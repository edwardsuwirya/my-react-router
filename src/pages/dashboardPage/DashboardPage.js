const DashboardPage = ({onNavigate, userInfo}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '24px'}}>
            <span>EnigmaCamp</span>
            <div style={{textAlign: 'right'}}>
                <span>Welcome {userInfo}</span>
                <div onClick={onNavigate} style={{cursor: 'pointer'}}>Logout</div>
            </div>
        </div>
    )
}

export default DashboardPage;