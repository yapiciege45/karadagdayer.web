"use client"
import { AdminCustomerPageComponent } from '@/components/admin/customer/AdminCustomerPageComponent'
import { AdminEmployeePageComponent } from '@/components/admin/employee/AdminEmployeePageComponent'
import { SidebarComponent } from '@/components/shared/SidebarComponent'
import { IconBuildingCommunity, IconGift, IconShieldFilled, IconUser } from '@tabler/icons-react'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AdminCustomerHomeContainer = () => {
  const [user, setUser] = useState(null)
  const [type, setType] = useState(null)
  const [token, setToken] = useState(getCookie('token'))

  const [customers, setCustomers] = useState([])
  const [distributors, setDistributors] = useState([])
  const [packages, setPackages] = useState([])

  const getCustomers = async () => {
    const res = await fetch(`${process.env.API_URL}/customer`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await res.json()

    if(data.customers) {
      setCustomers(data.customers)
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

  const getPackages = async () => {
    const res = await fetch(`${process.env.API_URL}/package`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
  
      const data = await res.json()
  
      if(data.packages) {
        setPackages(data.packages)
      }
  }

  useEffect(() => {
    const newUser = getCookie('user')

    const realUser = JSON.parse(newUser).user

    setUser(realUser)
    setType(JSON.parse(newUser).type)

    getCustomers().catch(err => console.error(err))
    getDistributors().catch(err => console.error(err))
    getPackages().catch(err => console.error(err))
  }, [])

  const addNewCustomer = async () => {
    const res = await fetch(`${process.env.API_URL}/customer/create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": "Name",
        "surname": "Surname",
        "email": "customer@gmail.com",
        "password": "123456",
        "phone_code": 90,
        "phone": "5555555555"
      })
    })

    const data = await res.json()

    console.log(data)

    if(data.status == 200) {
      toast.success(data.message)

      getCustomers().catch(err => console.error(err))
    } else {
      console.log(data)
    }
  }

  if(user && customers && distributors && packages) {
    return (
            <AdminCustomerPageComponent 
              addNewCustomer={addNewCustomer}
              customers={customers}
              token={token}
              getCustomers={getCustomers}
              distributors={distributors}
              packages={packages}
            />
      )
  }
  
}
