import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  const buttonStyle = {
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    color: '#333333',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    isAuthenticated && (
      <button onClick={() => logout()} style={buttonStyle}>
        登出
      </button>
    )
  );
};

export default LogoutButton;
