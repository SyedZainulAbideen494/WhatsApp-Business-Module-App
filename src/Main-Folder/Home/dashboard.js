import React, { Fragment } from "react";
import './home.css';
import Navbar from "./navbar";
import notiIcon from '../images/icons8-notifications-64.png';
import settingsIcon from '../images/icons8-settings-50.png';
import profilePic from '../images/icons8-user-profile-48.png'; // Add the profile picture

const Dashboard = () => {
    return (
        <Fragment>
            <div className="div_main_dashboard">
                <div className="div_navbar_dashboard">
                    <Navbar />
                </div>
                <div className="dashboard_header_container">
                    <header className="dashboard_header">
                        <h1>Dashboard</h1>
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
                {/* Other dashboard content can go here */}
            </div>
        </Fragment>
    );
}

export default Dashboard;