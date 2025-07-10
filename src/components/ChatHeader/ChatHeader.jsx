import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatHeader.css';

const ChatHeader = ({ chat }) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="chat-header">
      <button className="back-button" onClick={handleBack} aria-label="Volver">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>
        </svg>
      </button>
      <div className="avatar-container">
        <img src={chat.avatar} alt={chat.name} className="avatar" />
        <div className={`status-indicator ${chat.status === 'en línea' ? 'online' : 'offline'}`}></div>
      </div>
      <div className="chat-info">
        <h2 className="chat-name">{chat.name}</h2>
        <p className="chat-status">{chat.status}</p>
      </div>
      <div className="header-actions">
        <button aria-label="Video">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
          </svg>
        </button>
        <button aria-label="Menú">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;