import React from 'react';
import './Message.css';

const Message = ({ message, isMe }) => {
  return (
    <div className={`message ${isMe ? 'me' : 'other'}`}>
      <div className="message-content">
        <p>{message.text}</p>
        <span className="message-time">{message.time}</span>
      </div>
    </div>
  );
};

export default Message;