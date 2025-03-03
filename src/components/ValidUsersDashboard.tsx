import keycloak from "../keycloak"

const ValidUsersDashboard = () => {
  return (
    <div>ValidUsersDashboard <p onClick={()=>keycloak.logout()}>logout</p></div>
  )
}

export default ValidUsersDashboard