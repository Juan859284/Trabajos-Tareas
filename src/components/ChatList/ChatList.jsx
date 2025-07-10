import React from 'react';
import ChatItem from '../ChatItem/ChatItem';
import './ChatList.css';

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div className="chat-list">
      {chats.map(chat => (
        <ChatItem 
          key={chat.id} 
          chat={chat} 
          onSelect={onSelectChat} 
        />
      ))}
    </div>
  );
};

export default ChatList;