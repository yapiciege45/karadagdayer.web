import { ModeratorHomeContainer } from "@/containers/moderator/ModeratorHomeContainer";
import { ModeratorSidebarContainer } from "@/containers/moderator/ModeratorSidebarContainer";

export default function Admin() {
  return (
    <ModeratorSidebarContainer>
      <ModeratorHomeContainer />
    </ModeratorSidebarContainer>
  )
}
