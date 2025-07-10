import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button onClick={handleBack} className="back-button">
          &larr; Volver
        </button>
        <h1>Mi Perfil</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-avatar-container">
          <div className="profile-avatar">
            <div className="avatar-text">Yo</div>
          </div>
        </div>
        
        <div className="profile-info">
          <div className="info-item">
            <label>Nombre:</label>
            <p>Tu Nombre</p>
          </div>
          
          <div className="info-item">
            <label>Estado:</label>
            <p>Disponible</p>
          </div>
          
          <div className="info-item">
            <label>Teléfono:</label>
            <p>+123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;