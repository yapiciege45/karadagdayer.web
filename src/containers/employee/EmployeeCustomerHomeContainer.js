"use client"
import { AdminCustomerPageComponent } from '@/components/admin/customer/AdminCustomerPageComponent'
import { AdminEmployeePageComponent } from '@/components/admin/employee/AdminEmployeePageComponent'
import { EmployeeCustomerPageComponent } from '@/components/employee/customer/EmployeeCustomerPageComponent'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const EmployeeCustomerHomeContainer = () => {
  const [user, setUser] = useState(null)
  const [type, setType] = useState(null)
  const [token, setToken] = useState(getCookie('token'))

  const [customers, setCustomers] = useState([])
  const [packages, setPackages] = useState([])

  const getCustomers = async () => {
    const res = await fetch(`${process.env.API_URL}/customer/distributor/get`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await res.json()

    if(data.customers) {
      setCustomers([...data.customers])
    }
  }

  const getPackages = async () => {
    const res = await fetch(`${process.env.API_URL}/package/distributor`, {
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
    getPackages().catch(err => console.error(err))
  }, [])

  const addNewCustomer = async () => {
    const res = await fetch(`${process.env.API_URL}/customer/distributor/create`, {
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

    if(data.status == 200) {
      toast.success(data.message)

      getCustomers().catch(err => console.error(err))
    } else {
      console.log(data)
    }
  }

  if(user && customers && packages) {
    return (
            <EmployeeCustomerPageComponent 
              addNewCustomer={addNewCustomer}
              customers={customers}
              token={token}
              getCustomers={getCustomers}
              packages={packages}
              isAdmin={user.isAdmin}
            />
      )
  }
  
}
