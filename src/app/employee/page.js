import { EmployeeHomeContainer } from "@/containers/employee/EmployeeHomeContainer";
import { EmployeeSidebarContainer } from "@/containers/employee/EmployeeSidebarContainer";
import { ModeratorHomeContainer } from "@/containers/moderator/ModeratorHomeContainer";
import { ModeratorSidebarContainer } from "@/containers/moderator/ModeratorSidebarContainer";

export default function Admin() {
  return (
    <EmployeeSidebarContainer>
      <EmployeeHomeContainer />
    </EmployeeSidebarContainer>
  )
}
