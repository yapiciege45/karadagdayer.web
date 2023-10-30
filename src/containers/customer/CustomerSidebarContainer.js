"use client"
import React, { useEffect, useState } from 'react'
import { IconUser } from '@tabler/icons-react';
import { SidebarComponent } from '@/components/shared/SidebarComponent';
import { getCookie } from 'cookies-next';


export const CustomerSidebarContainer = ({ children }) => {

  const [user, setUser] = useState(null)
  const [type, setType] = useState(null)

  useEffect(() => {
    const newUser = getCookie('user')

    const realUser = JSON.parse(newUser).user

    setUser(realUser)
    setType(JSON.parse(newUser).type)
  }, [])

  if(user) {
    return (
        <div className='flex'>
            <SidebarComponent 
                    pp={user.img}
                    type={type}
                    fullName={user.name + ' ' + user.surname}
                    links={
                      [
                        {
                          link: '/customer',
                          icon: <IconUser size={24} color='black' />,
                          mobile_icon: <IconUser size={20} color='white' />,
                          name: 'Profile',
                          mobileIsShown: false
                        },
                      ]
                    }
                />
            {children} 
        </div>
      )
  }

  
}
