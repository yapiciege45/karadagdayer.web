import { SidebarContainer } from '@/containers/SidebarContainer'
import { AdminCustomerHomeContainer } from '@/containers/admin/AdminCustomerHomeContainer'
import { ModeratorCustomerHomeContainer } from '@/containers/moderator/ModeratorCustomerHomeContainer'
import { ModeratorSidebarContainer } from '@/containers/moderator/ModeratorSidebarContainer'
import React from 'react'

export default function Customer () {
  return (
    <ModeratorSidebarContainer>
      <ModeratorCustomerHomeContainer />
    </ModeratorSidebarContainer>
  )
}