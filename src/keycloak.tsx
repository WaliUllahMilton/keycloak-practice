import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url:"http://localhost:8080/", // Keycloak server URL
  realm: 'learning', // Realm name
  clientId: 'myClient', // Client ID
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;