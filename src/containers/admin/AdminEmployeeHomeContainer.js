"use client"
import { AdminEmployeePageComponent } from '@/components/admin/employee/AdminEmployeePageComponent'
import { SidebarComponent } from '@/components/shared/SidebarComponent'
import { IconBuildingCommunity, IconGift, IconShieldFilled, IconUser } from '@tabler/icons-react'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AdminEmployeeHomeContainer = () => {
  const [user, setUser] = useState(null)
  const [type, setType] = useState(null)
  const [token, setToken] = useState(getCookie('token'))

  const [employees, setEmployees] = useState([])
  const [distributors, setDistributors] = useState([])

  const getEmployees = async () => {
    const res = await fetch(`${process.env.API_URL}/employee`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await res.json()

    if(data.employees) {
      setEmployees(data.employees)
    }
  }

  const getDistributors = async () => {
    const res = await fetch(`${process.env.API_URL}/distributor`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
  
      const data = await res.json()
  
      if(data.distributors) {
        setDistributors(data.distributors)
      }
  }

  useEffect(() => {
    const newUser = getCookie('user')

    const realUser = JSON.parse(newUser).user

    setUser(realUser)
    setType(JSON.parse(newUser).type)

    getEmployees().catch(err => console.error(err))
    getDistributors().catch(err => console.error(err))
  }, [])

  const addNewEmployee = async () => {
    const res = await fetch(`${process.env.API_URL}/employee/create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "isAdmin": false,
        "name": "Name",
        "surname": "Surname",
        "email": "employee@gmail.com",
        "password": "123456",
        "phone_code": 90,
        "phone": "5555555555"
      })
    })

    const data = await res.json()

    if(data.status == 200) {
      toast.success(data.message)

      getEmployees().catch(err => console.error(err))
    } else {
      console.log(data)
    }
  }

  if(user && employees && distributors) {
    return (
            <AdminEmployeePageComponent 
              addNewEmployee={addNewEmployee}
              employees={employees}
              token={token}
              getEmployees={getEmployees}
              distributors={distributors}
            />
      )
  }
  
}
