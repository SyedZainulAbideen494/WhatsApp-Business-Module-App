import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/navbar";
import notiIcon from '../images/icons8-notifications-64.png';
import settingsIcon from '../images/icons8-settings-50.png';
import menuIcon from '../images/icons8-menu-50.png';
import './addflow.css';
import { API_ROUTES } from '../app-modules/api_routes';

const AddFlow = () => {
    const [appId, setAppId] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // useHistory hook

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleAddApp = async () => {
        const localStorageToken = localStorage.getItem('token'); // Fetch the token from local storage
        if (!localStorageToken) {
            setError('Local storage token is missing');
            return;
        }

        try {
            const response = await axios.post(API_ROUTES.addFlow, { appId, token, localStorageToken });
            setError('');
            console.log(response.data.message);
            navigate('/flow'); // Redirect to /flow on success
        } catch (error) {
            setError(error.response?.data?.error || 'Error adding app');
        }
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
                        </div>
                    </header>
                </div>
                <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                <div className="create-flow-container">
                    <h2>Create Flow</h2>
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Enter existing App ID" 
                            className="flow-input" 
                            value={appId} 
                            onChange={(e) => setAppId(e.target.value)} 
                        /><br/>
                        <input 
                            type="text" 
                            placeholder="Enter your App Token" 
                            className="flow-input" 
                            value={token} 
                            onChange={(e) => setToken(e.target.value)} 
                        /><br/>
                        <button className="create-flow-btn" onClick={handleAddApp}>
                            <i className="fas fa-plus"></i> Add
                        </button>
                    </div>
                    {error && <p className="error-msg">{error}</p>}
                    <p className="or-text">or</p>
                    <button className="auto-create-btn">
                        Auto Create New App
                    </button>
                    <p className="note">Note: To auto create an app it might take upto 24 hours.</p>
                </div>
            </div>
        </Fragment>
    );
}

export default AddFlow;