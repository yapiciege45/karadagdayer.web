import { CustomerHomeContainer } from "@/containers/customer/CustomerHomeContainer";
import { CustomerSidebarContainer } from "@/containers/customer/CustomerSidebarContainer";
import { EmployeeHomeContainer } from "@/containers/employee/EmployeeHomeContainer";

export default function Admin() {
  return (
    <CustomerSidebarContainer>
      <CustomerHomeContainer />
    </CustomerSidebarContainer>
  )
}
