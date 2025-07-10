import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-avatar" onClick={() => navigate('/profile')}>
          <div className="avatar-text">Yo</div>
          <div className="status-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;