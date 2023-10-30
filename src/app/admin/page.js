import { SidebarContainer } from "@/containers/SidebarContainer";
import { AdminHomeContainer } from "@/containers/admin/AdminHomeContainer";

export default function Admin() {
  return (
    <SidebarContainer>
      <AdminHomeContainer />
    </SidebarContainer>
  )
}
