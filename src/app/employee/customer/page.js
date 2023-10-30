import { EmployeeCustomerHomeContainer } from '@/containers/employee/EmployeeCustomerHomeContainer'
import { EmployeeSidebarContainer } from '@/containers/employee/EmployeeSidebarContainer'
import React from 'react'

export default function Customer () {
  return (
    <EmployeeSidebarContainer>
      <EmployeeCustomerHomeContainer />
    </EmployeeSidebarContainer>
  )
}