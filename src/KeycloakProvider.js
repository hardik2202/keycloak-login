import React, { useEffect, useState, createContext } from 'react';
import keycloak from './keycloak';
import Loading from './Loading';

export const KeycloakContext = createContext();

const KeycloakProvider = ({ children }) => {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'check-sso' }).then(authenticated => {
      setKeycloakInitialized(true);
      if (!authenticated) {
        keycloak.login();
      }
    }).catch(error => {
      console.error('Keycloak initialization failed', error);
    });
  }, []);

  if (!keycloakInitialized) {
    return <Loading />;
  }

  return (
    <KeycloakContext.Provider value={keycloak}>
      {children}
    </KeycloakContext.Provider>
  );
};

export default KeycloakProvider;
