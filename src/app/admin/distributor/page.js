import { SidebarContainer } from '@/containers/SidebarContainer'
import { AdminDistributorHomeContainer } from '@/containers/admin/AdminDistributorHomeContainer'
import React from 'react'

export default function Distributor () {
  return (
    <SidebarContainer>
      <AdminDistributorHomeContainer />
    </SidebarContainer>
  )
}
