import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeycloakContext } from './KeycloakProvider';

function CallbackPage() {
  const keycloak = useContext(KeycloakContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (keycloak.authenticated) {
      navigate('/home', { replace: true });
    } else {
      keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
        if (authenticated) {
          navigate('/home', { replace: true });
        } else {
          navigate('/', { replace: true });
        }
      });
    }
  }, [keycloak, navigate]);

  return <div>Loading...</div>;
}

export default CallbackPage;
