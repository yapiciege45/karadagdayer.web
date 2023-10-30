import { SidebarContainer } from '@/containers/SidebarContainer'
import { AdminEmployeeHomeContainer } from '@/containers/admin/AdminEmployeeHomeContainer'
import React from 'react'

export default function Employee () {
  return (
    <SidebarContainer>
      <AdminEmployeeHomeContainer />
    </SidebarContainer>
  )
}
