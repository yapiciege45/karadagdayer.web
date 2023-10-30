import { SidebarContainer } from '@/containers/SidebarContainer'
import { AdminCustomerHomeContainer } from '@/containers/admin/AdminCustomerHomeContainer'
import { ModeratorCustomerHomeContainer } from '@/containers/moderator/ModeratorCustomerHomeContainer'
import React from 'react'

export default function Distributor () {
  return (
    <SidebarContainer>
      <AdminCustomerHomeContainer />
    </SidebarContainer>
  )
}