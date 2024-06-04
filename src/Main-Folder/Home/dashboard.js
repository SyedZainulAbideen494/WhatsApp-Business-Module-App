import React, { Fragment, useState } from "react";
import './home.css';
import notiIcon from '../images/icons8-notifications-64.png';
import settingsIcon from '../images/icons8-settings-50.png';
import profilePic from '../images/icons8-user-profile-48.png';
import dashboardImg from '../images/icons8-dashboard-50.png';
import flowImg from '../images/icons8-flow-chart-50.png';
import addFlowImg from '../images/icons8-add-50.png';
import logoutImg from '../images/icons8-logout-50.png';
import helpImg from '../images/icons8-help-50.png';
import menuIcon from '../images/icons8-menu-50.png';

const Dashboard = () => {
    const [activeButton, setActiveButton] = useState(window.location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleButtonClick = (path) => {
        setActiveButton(path);
        window.history.pushState({}, '', path);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Fragment>
            <div className="div_main_dashboard">
                <div className="dashboard_header_container">
                    <header className="dashboard_header">
                        <div className="header_left">
                        <img src={menuIcon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
                            <h1>Dashboard</h1>
                        </div>
                        <div className="header_search">
                            <input type="text" placeholder="Search..." className="search_input" />
                        </div>
                        <div className="header_buttons">
                            <button className="header_button">
                                <img src={settingsIcon} alt="Settings" />
                            </button>
                            <button className="header_button">
                                <img src={notiIcon} alt="Notifications" />
                            </button>
                            <button className="header_button">
                                <img src={profilePic} alt="Profile" className="profile_pic" />
                            </button>
                        </div>
                    </header>
                </div>
                <div className={`navbar-container ${isMenuOpen ? 'open' : ''}`}>
                    <div className="navbar-header">
                        <h2>Amute</h2>
                        <img src={menuIcon} alt="Close Menu" className="menu-icon-close" onClick={toggleMenu} />
                    </div>
                    <div className="navbar-buttons">
                        <button className={activeButton === '/dashboard' ? 'active' : ''} onClick={() => handleButtonClick('/dashboard')}>
                            <img src={dashboardImg} alt="Dashboard" />
                            Dashboard
                        </button>
                        <button className={activeButton === '/flows' ? 'active' : ''} onClick={() => handleButtonClick('/flows')}>
                            <img src={flowImg} alt="Flows" />
                            Flows
                        </button>
                        <button className={activeButton === '/add-flow' ? 'active' : ''} onClick={() => handleButtonClick('/add-flow')}>
                            <img src={addFlowImg} alt="Add Flow" />
                            Add Flow
                        </button>
                        <button className={activeButton === '/logout' ? 'active' : ''} onClick={() => handleButtonClick('/logout')}>
                            <img src={logoutImg} alt="Logout" />
                            Logout
                        </button>
                        <button className={activeButton === '/help' ? 'active' : ''} onClick={() => handleButtonClick('/help')}>
                            <img src={helpImg} alt="Help" />
                            Help
                        </button>
                    </div>
                    <div className="navbar-footer">
                        <p>&copy; 2024 Amute</p>
                    </div>
                </div>
                {/* Other dashboard content can go here */}
            </div>
        </Fragment>
    );
}

export default Dashboard;