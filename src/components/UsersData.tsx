import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"
import UserRowData from "./UserRowData"
  
function UsersData() {
  return (
    <div className="max-w-[700px] mx-auto mt-20" >
        <Table>
  <TableCaption>all the user information</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>email</TableHead>
      <TableHead>phone number</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <UserRowData name="Wali Ullah Milton" email="zbc@gmail.com" phone="0277897498"/>
    <UserRowData name="Leo messi" email="zsas@gmail.com" phone="74658765"/>
    <UserRowData name="Lamine yamal" email="lamine@gmail.com" phone="546456575"/>
    <UserRowData name="Raphinia" email="ra@gmail.com" phone="53253646"/>
    <UserRowData name="Lewandoski" email="jsdhuysvd@gmail.com" phone="8655744535"/>
  </TableBody>
</Table>

    </div>
  )
}

export default UsersData