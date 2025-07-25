import { useKeycloak } from '@react-keycloak/web';
import ValidUsersDashboard from '../components/ValidUsersDashboard';
import { useEffect, useState } from 'react';
import UsersData from '../components/UsersData';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function Home() {
  const { keycloak, initialized } = useKeycloak();
  const [roles,setRoles] = useState<string[] | undefined>([])
  // console.log()

  useEffect(()=>{
    setRoles(keycloak.tokenParsed?.realm_access?.roles)
  },[keycloak.tokenParsed?.realm_access?.roles])
  if(roles){
    return (
      <div>
        <UsersData/>
      </div>
    )
  }
  console.log(roles)
  if (!initialized) {
    console.log(initialized)
    return <div>Loading...</div>;
  }
  if (keycloak.authenticated) {
    console.log(keycloak.idTokenParsed)
    return (
      <div>
        <ValidUsersDashboard/>
      </div>
    );
  } else {
    keycloak.login();
    return <div>Redirecting to login...</div>;
  }
}

export default Home;