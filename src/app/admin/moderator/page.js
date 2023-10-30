import { SidebarContainer } from "@/containers/SidebarContainer";
import { ModeratorHomeContainer } from "@/containers/admin/AdminModeratorHomeContainer";

export default function Admin() {
  return (
    <SidebarContainer>
      <ModeratorHomeContainer />
    </SidebarContainer>
  )
}
