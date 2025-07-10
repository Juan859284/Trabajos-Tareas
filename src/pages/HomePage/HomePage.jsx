import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../../context/ChatContext.jsx';
import Sidebar from '../../components/SideBar/SideBar.jsx';
import ChatList from '../../components/ChatList/ChatList.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { filteredChats, setActiveChat } = useChat();
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 850);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectChat = (chatId) => {
    setActiveChat(parseInt(chatId));
    navigate(`/chat/${chatId}`);
  };

  return (
    <div className="app-container">
      {!isMobileView && <Sidebar />}
      
      <div className="main-content">
        <div className="chat-list-container">
          <div className="header">
            <div className="header-top">
              <h1>Chats</h1>
              {isMobileView && (
                <div className="user-circle" onClick={() => navigate('/profile')}>
                  <div className="avatar-text">Yo</div>
                  <div className="status-indicator"></div>
                </div>
              )}
            </div>
            <div className="search-bar-container">
              <SearchBar />
            </div>
          </div>
          <ChatList chats={filteredChats} onSelectChat={handleSelectChat} />
        </div>
        
        {!isMobileView && (
          <div className="welcome-screen">
            <div className="welcome-content">
              <h1>WhatsApp Clone</h1>
              <p>Selecciona un chat para comenzar una conversación</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;