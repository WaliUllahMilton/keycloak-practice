
import { useKeycloak } from "@react-keycloak/web";
import { TableHead, TableRow } from "./ui/table"
import { MdDelete,MdEdit } from "react-icons/md";

type UserRowProps = {
  name : string,
  email : string,
  phone : string
}
function UserRowData({name,email,phone}:UserRowProps) {
    const { keycloak } = useKeycloak();

  
  return (
    <TableRow>
    <TableHead className="w-[100px]">{name}</TableHead>
    <TableHead>{email}</TableHead>
    <TableHead>{phone}</TableHead>
    {
      keycloak.hasRealmRole("ROLE_SUPER_ADMIN") || keycloak.hasRealmRole("EDITOR") ? 
      <TableHead className="text-right flex items-center justify-end gap-6">
         <MdEdit/><MdDelete/>
      </TableHead>
      :       
      <TableHead className="text-right flex items-center justify-end gap-6">
        view only
      </TableHead>

    }
  </TableRow>
  )
}

export default UserRowData
