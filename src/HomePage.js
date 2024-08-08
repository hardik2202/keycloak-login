import React, { useContext } from 'react';
import { KeycloakContext } from './KeycloakProvider';

function HomePage() {
  const keycloak = useContext(KeycloakContext);

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome! You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
