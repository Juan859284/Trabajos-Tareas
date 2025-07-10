import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChatProvider } from './context/ChatContext.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ChatPage from './pages/ChatPage/ChatPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import './styles/global.css';
import './styles/variables.css';

function App() {
  return (
    <ChatProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </ChatProvider>
  );
}

export default App;
