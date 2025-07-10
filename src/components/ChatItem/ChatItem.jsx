import React from 'react';
import './ChatItem.css';

const ChatItem = ({ chat, onSelect }) => {
  const handleClick = () => {
    onSelect(chat.id);
  };
  
  return (
    <div className="chat-item" onClick={handleClick}>
      <div className="avatar-container">
        <img src={chat.avatar} alt={chat.name} className="avatar" />
        <div className={`status-indicator ${chat.status === 'en línea' ? 'online' : 'offline'}`}></div>
      </div>
      <div className="chat-info">
        <div className="chat-header">
          <h3 className="chat-name">{chat.name}</h3>
          <span className="chat-time">{chat.timestamp}</span>
        </div>
        <div className="chat-preview">
          <p className="last-message">{chat.lastMessage}</p>
          {chat.unread > 0 && (
            <div className="unread-count">{chat.unread}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;