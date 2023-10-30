import { SidebarContainer } from '@/containers/SidebarContainer'
import { AdminEmployeeHomeContainer } from '@/containers/admin/AdminEmployeeHomeContainer'
import { AdminLogContainer } from '@/containers/admin/AdminLogContainer'
import React from 'react'

export default function Log () {
  return (
    <SidebarContainer>
      <AdminLogContainer />
    </SidebarContainer>
  )
}
