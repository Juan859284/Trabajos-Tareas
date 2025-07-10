import React, { createContext, useState, useContext, useEffect } from 'react';

import fryAvatar from '../assets/avatars/fry.png';
import leelaAvatar from '../assets/avatars/leela.png';
import benderAvatar from '../assets/avatars/bender.png';
import farnsworthAvatar from '../assets/avatars/farnsworth.png';
import zoidbergAvatar from '../assets/avatars/zoidberg.png';


const ChatContext = createContext();


const initialChats = [
  {
    id: 1,
    name: 'Fry',
    avatar: fryAvatar,
    status: 'en línea',
    lastMessage: 'Estoy hambriento...',
    timestamp: '10:30 AM',
    unread: 0
  },
  {
    id: 2,
    name: 'Leela',
    avatar: leelaAvatar,
    status: 'en línea',
    lastMessage: 'Tenemos una nueva misión',
    timestamp: '9:15 AM',
    unread: 3
  },
  {
    id: 3,
    name: 'Bender',
    avatar: benderAvatar,
    status: 'desconectado',
    lastMessage: '¡Muerde mi trasero metálico!',
    timestamp: 'Ayer',
    unread: 0
  },
  {
    id: 4,
    name: 'Farnsworth',
    avatar: farnsworthAvatar,
    status: 'en línea',
    lastMessage: '¡Buenas noticias, todos!',
    timestamp: 'Ayer',
    unread: 1
  },
  {
    id: 5,
    name: 'Zoidberg',
    avatar: zoidbergAvatar,
    status: 'desconectado',
    lastMessage: '¿Por qué no?',
    timestamp: 'La semana pasada',
    unread: 0
  }
];


const initialMessages = {
  1: [
    { id: 1, text: 'Hola, ¿qué tal?', sender: 'me', time: '10:25 AM' },
    { id: 2, text: '¡Hola! Estoy bien, ¿y tú?', sender: 'Fry', time: '10:26 AM' },
    { id: 3, text: 'Estoy hambriento...', sender: 'Fry', time: '10:30 AM' },
  ],
  2: [
    { id: 1, text: 'Tenemos una nueva misión', sender: 'Leela', time: '9:15 AM' },
    { id: 2, text: '¿De qué se trata?', sender: 'me', time: '9:16 AM' },
    { id: 3, text: 'Debemos entregar un paquete en Marte', sender: 'Leela', time: '9:20 AM' },
    { id: 4, text: '¡Suena peligroso!', sender: 'me', time: '9:22 AM' },
  ],
  3: [
    { id: 1, text: '¡Muerde mi trasero metálico!', sender: 'Bender', time: 'Ayer' },
    { id: 2, text: 'Bender, eso no es apropiado', sender: 'me', time: 'Ayer' },
    { id: 3, text: '¡Ja ja ja!', sender: 'Bender', time: 'Ayer' },
  ],
  4: [
    { id: 1, text: '¡Buenas noticias, todos!', sender: 'Farnsworth', time: 'Ayer' },
    { id: 2, text: '¿Qué noticias, profesor?', sender: 'me', time: 'Ayer' },
    { id: 3, text: 'He inventado un dispositivo que...', sender: 'Farnsworth', time: 'Ayer' },
  ],
  5: [
    { id: 1, text: '¿Por qué no?', sender: 'Zoidberg', time: 'La semana pasada' },
    { id: 2, text: '¿Por qué no qué, Zoidberg?', sender: 'me', time: 'La semana pasada' },
    { id: 3, text: '¡Exactamente!', sender: 'Zoidberg', time: 'La semana pasada' },
  ]
};


export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChat, setActiveChat] = useState(null);

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addMessage = (chatId, message) => {
    setMessages(prev => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), message]
    }));

    setChats(prevChats => prevChats.map(chat => {
      if (chat.id === chatId) {
        return { ...chat, lastMessage: message.text, timestamp: 'Ahora mismo' };
      }
      return chat;
    }));
  };

  return (
    <ChatContext.Provider value={{
      chats,
      messages,
      filteredChats,
      activeChat,
      setActiveChat,
      addMessage,
      searchTerm,
      setSearchTerm
    }}>
      {children}
    </ChatContext.Provider>
  );
};


export const useChat = () => useContext(ChatContext);
