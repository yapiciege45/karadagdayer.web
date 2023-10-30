"use client"
import { AdminModeratorPageComponent } from '@/components/admin/moderator/AdminModeratorPageComponent'
import { SidebarComponent } from '@/components/shared/SidebarComponent'
import { IconBuildingCommunity, IconGif, IconGift, IconShieldFilled, IconUser } from '@tabler/icons-react'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const ModeratorHomeContainer = () => {
  const [user, setUser] = useState(null)
  const [type, setType] = useState(null)
  const [token, setToken] = useState(getCookie('token'))

  const [moderators, setModerators] = useState([])

  const getModerators = async () => {
    const res = await fetch(`${process.env.API_URL}/moderator`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await res.json()

    if(data.moderators) {
      setModerators(data.moderators)
    }
  }

  useEffect(() => {
    const newUser = getCookie('user')

    const realUser = JSON.parse(newUser).user

    setUser(realUser)
    setType(JSON.parse(newUser).type)

    getModerators().catch(err => console.error(err))
  }, [])

  const addNewModerator = async () => {
    const res = await fetch(`${process.env.API_URL}/moderator/create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": "Adı",
        "surname": "Soyadı",
        "email": "email@gmail.com",
        "phone": "5555555555",
        "password": "123456"
      })
    })

    const data = await res.json()

    if(data.status == 200) {
      toast.success(data.message)

      getModerators().catch(err => console.error(err))
    } else {
      console.log(data)
    }
  }

  if(user && moderators) {
    return (
            <AdminModeratorPageComponent 
              addNewModerator={addNewModerator}
              moderators={moderators}
              token={token}
              getModerators={getModerators}
            />
      )
  }
  
}
