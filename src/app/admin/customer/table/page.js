import { SidebarContainer } from '@/containers/SidebarContainer'
import { AdminCustomerHomeContainer } from '@/containers/admin/AdminCustomerHomeContainer'
import { AdminCustomerTableContainer } from '@/containers/admin/AdminCustomerTableContainer'

export default function AdminCustomerTable () {
  return (
    <SidebarContainer>
      <AdminCustomerTableContainer />
    </SidebarContainer>
  )
}