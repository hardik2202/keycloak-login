import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'test',
  clientId: 'my-client',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
