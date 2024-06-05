import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from "../components/navbar";
import notiIcon from '../images/icons8-notifications-64.png';
import settingsIcon from '../images/icons8-settings-50.png';
import menuIcon from '../images/icons8-menu-50.png';
import './manageflow.css';
import { API_ROUTES } from '../app-modules/api_routes';

const Manageflow = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [appDetails, setAppDetails] = useState(null);
    const [error, setError] = useState('');
    const { app_id } = useParams();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const fetchAppDetails = async () => {
            try {
                const response = await axios.get(`${API_ROUTES.APP_DETAILS}/${app_id}`);
                setAppDetails(response.data);
            } catch (error) {
                setError('Error fetching app details');
            }
        };

        fetchAppDetails();
    }, [app_id]);

    if (!appDetails) {
        return <p>Loading...</p>;
    }

    return (
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
                    </div>
                </header>
            </div>
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className="details-container">
                <h2>App Details</h2>
                <p><strong>App ID:</strong> {appDetails.app_id}</p>
                <p><strong>App Name:</strong> {appDetails.app_name}</p>
                <p><strong>Webhook URL:</strong> {appDetails.webhook}</p>
                <button className="manage-btn-chat-manage">Manage Chat Flow</button>
                <button className="help-btn">Help</button>
            </div>
        </div>
    );
};

export default Manageflow;