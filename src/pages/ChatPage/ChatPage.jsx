import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useChat } from '../../context/ChatContext.jsx';
import ChatHeader from '../../components/ChatHeader/ChatHeader.jsx';
import Message from '../../components/Message/Message.jsx';
import MessageInput from '../../components/MessageInput/MessageInput.jsx';
import './ChatPage.css';

const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    chats, 
    messages, 
    setActiveChat,
    addMessage 
  } = useChat();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (id) {
      setActiveChat(parseInt(id));
    }
  }, [id, setActiveChat]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const chat = chats.find(c => c.id === parseInt(id));

  const handleBack = () => {
    navigate('/');
  };

  if (!chat) {
    return <div>Chat no encontrado</div>;
  }

  const handleSendMessage = (text) => {
    if (text.trim() === '') return;

    const newMessage = {
      id: Date.now(),
      text,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    addMessage(parseInt(id), newMessage);
  };

  return (
    <div className="chat-full-container">
      <div className="chat-container">
        <ChatHeader chat={chat} onBack={handleBack} />
        <div className="messages-container">
          {messages[chat.id]?.map(message => (
            <Message 
              key={message.id} 
              message={message} 
              isMe={message.sender === 'me'}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatPage;