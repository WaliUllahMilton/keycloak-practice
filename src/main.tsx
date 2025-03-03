import { createRoot } from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import App from './App';
import   './index.css'
const initOptions = {
  onLoad: 'login-required',
};

createRoot(document.getElementById('root')!).render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={initOptions}
  >
    <App />
  </ReactKeycloakProvider>
);