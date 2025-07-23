import { useKeycloak } from "@react-keycloak/web";

function AppSidebar() {
  const { keycloak } = useKeycloak();
  console.log(keycloak.tokenParsed?.realm_access?.roles)
  // console.log(keycloak.hasRealmRole(""))
  return (
    <div className='absolute  top-0 left-0 px-4 h-screen bg-amber-600'>
      <div className="text-xl py-4 text-white flex flex-col gap-4">
        <p className={`border px-4 rounded-md border-gray-950 ${keycloak.hasRealmRole("ROLE_SUPER_ADMIN") ? "bg-transparent" : "bg-black "}`}>Admin</p>
        <p className={`border px-4 rounded-md border-gray-950 ${keycloak.hasRealmRole("Editor") ? "bg-transparent" : "bg-black "}`}>Editor</p>
        <p className={`border px-4 rounded-md border-gray-950 ${keycloak.hasRealmRole("viewer") ? "bg-transparent" : "bg-black "}`}>Viewer</p>
      </div>
        <p 
        className='text-white border text-xl px-4 bg-red-700 rounded-md border-white'
        onClick={()=> keycloak.logout()}>logout</p>
         {/* <div className='flex gap-6 items-center'>
         <p>roles:</p>
           {
            
          roles.length >0 && roles.map((role)=>{
            return(
              <p key={role}>{role}</p>
            )
          })
        }
         </div> */}
        </div>
  )
}

export default AppSidebar