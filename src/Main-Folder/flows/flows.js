import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from "../components/navbar";
import notiIcon from '../images/icons8-notifications-64.png';
import settingsIcon from '../images/icons8-settings-50.png';
import menuIcon from '../images/icons8-menu-50.png';
import './flow.css';
import { API_ROUTES } from '../app-modules/api_routes';

const Flows = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [apps, setApps] = useState([]);
  const [error, setError] = useState('');

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchApps = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Token not found in local storage');
        return;
      }

      try {
        const response = await axios.post(API_ROUTES.fetchUserApps, { token });
        setApps(response.data.apps);
      } catch (error) {
        setError(error.response?.data?.error || 'Error fetching apps');
      }
    };

    fetchApps();
  }, []);

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
        <div className="apps-container">
      <h2>Your Apps</h2>
      {error && <p className="error-msg">{error}</p>}
      <ul>
        {apps.map(app => (
          <li key={app.app_id}>
            <h3>{app.app_name}</h3>
            <p>ID: {app.app_id}</p>
            <Link to={`/app/manage/${app.app_id}`} className="manage-btn">Manage</Link>
          </li>
        ))}
      </ul>
    </div>
      </div>
    </Fragment>
  );
};

export default Flows;