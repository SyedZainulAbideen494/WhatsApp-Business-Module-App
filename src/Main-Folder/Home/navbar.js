import React, { useState } from "react";
import './home.css';
import dashboardImg from '../images/icons8-dashboard-50.png';
import flowImg from '../images/icons8-flow-chart-50.png';
import addFlowImg from '../images/icons8-add-50.png';
import logoutImg from '../images/icons8-logout-50.png';
import helpImg from '../images/icons8-help-50.png';
import menuIcon from '../images/icons8-menu-50.png';
import profilePic from '../images/icons8-user-profile-48.png';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
    const [activeButton, setActiveButton] = useState(window.location.pathname);

    const handleButtonClick = (path) => {
        setActiveButton(path);
        window.history.pushState({}, '', path);
    };

    return (
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
                <button className={activeButton === '/profile' ? 'active' : ''} onClick={() => handleButtonClick('/profile')}>
                    <img src={profilePic} alt="Profile" />
                    My Profile
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
    );
}

export default Navbar;