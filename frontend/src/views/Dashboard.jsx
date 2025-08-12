import React from 'react';
import '../components/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="sidebar">
      <div className="logo-section text-center">
        <img src="logo.png" alt="Logo" className="logo" />
        <h4>U-Recover</h4>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <button className="nav-link active">
            <i className="bi bi-grid-fill"></i> Dashboard
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <i className="bi bi-house-fill"></i> Home
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <i className="bi bi-person-fill"></i> Profile
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <i className="bi bi-bell-fill"></i> Notifications <span className="badge">5</span>
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <i className="bi bi-journal-text"></i> Resources
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <i className="bi bi-chat-dots-fill"></i> Chat Box
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <i className="bi bi-headset"></i> Counselling
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            <i className="bi bi-gear-fill"></i> Account Setting
          </button>
        </li>
      </ul>
      <div className="user-section text-center">
        <img src="user.jpg" alt="User" className="user-avatar" />
        <h6>@jennywilson</h6>
      </div>
    </div>
  );
};

export default Dashboard;


