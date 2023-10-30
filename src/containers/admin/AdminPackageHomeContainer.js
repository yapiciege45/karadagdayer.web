"use client"
import { AdminModeratorPageComponent } from '@/components/admin/moderator/AdminModeratorPageComponent'
import { AdminPackagePageComponent } from '@/components/admin/package/AdminPackagePageComponent'
import { SidebarComponent } from '@/components/shared/SidebarComponent'
import { IconBuildingCommunity, IconGift, IconShieldFilled, IconUser } from '@tabler/icons-react'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AdminPackageHomeContainer = () => {
  const [user, setUser] = useState(null)
  const [type, setType] = useState(null)
  const [token, setToken] = useState(getCookie('token'))

  const [packages, setPackages] = useState([])

  const getPackages = async () => {
    const res = await fetch(`${process.env.API_URL}/package`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    

    const data = await res.json()

    if(data.packages) {
      setPackages([...data.packages])
    }
  }

  useEffect(() => {
    const newUser = getCookie('user')

    const realUser = JSON.parse(newUser).user

    setUser(realUser)
    setType(JSON.parse(newUser).type)

    getPackages().catch(err => console.error(err))
  }, [])

  const addNewPackage = async () => {
    const res = await fetch(`${process.env.API_URL}/package/create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "title": "Title",
        "description": "Description",
        "price": 0,
        "main": 0,
      })
    })

    const data = await res.json()

    console.log(data)

    if(data.status == 200) {
      toast.success(data.message)

      getPackages().catch(err => console.error(err))
    } else {
      console.log(data)
    }
  }

  if(user && packages) {
    return (
            <AdminPackagePageComponent 
              addNewPackage={addNewPackage}
              packages={packages}
              token={token}
              getPackages={getPackages}
            />
      )
  }
  
}
