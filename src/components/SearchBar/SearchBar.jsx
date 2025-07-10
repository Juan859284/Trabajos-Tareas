import React from 'react';
import { useChat } from '../../context/ChatContext.jsx';
import './SearchBar.css'; 

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useChat();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar chats..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;