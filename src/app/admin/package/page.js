import { SidebarContainer } from '@/containers/SidebarContainer'
import { AdminPackageHomeContainer } from '@/containers/admin/AdminPackageHomeContainer'
import React from 'react'

export default function Package () {
  return (
    <SidebarContainer>
      <AdminPackageHomeContainer />
    </SidebarContainer>
  )
}
