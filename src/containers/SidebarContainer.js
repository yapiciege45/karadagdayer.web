"use client"
import React, { useEffect, useState } from 'react'
import { IconBuildingCommunity, IconGift, IconListDetails, IconShieldFilled, IconTableHeart, IconUser } from '@tabler/icons-react';
import { SidebarComponent } from '@/components/shared/SidebarComponent';
import { getCookie } from 'cookies-next';


export const SidebarContainer = ({ children }) => {

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
                          link: '/admin',
                          icon: <IconUser size={24} color='black' />,
                          mobile_icon: <IconUser size={20} color='white' />,
                          name: 'Profile',
                          mobileIsShown: false
                        },
                        {
                            link: '/admin/moderator',
                            icon: <IconShieldFilled size={24} color='black' />,
                            mobile_icon: <IconShieldFilled size={20} color='white' style={{color: 'white'}} />,
                            name: 'Moderators',
                            mobileIsShown: false
                        },
                        {
                            link: '/admin/distributor',
                            icon: <IconBuildingCommunity size={24} color='black' />,
                            mobile_icon: <IconBuildingCommunity size={20} color='white' style={{color: 'white'}} />,
                            name: 'Distributors',
                            mobileIsShown: true
                        },
                        {
                            link: '/admin/employee',
                            icon: <IconUser size={24} color='black' />,
                            mobile_icon: <IconUser size={20} color='white' style={{color: 'white'}} />,
                            name: 'Employees',
                            mobileIsShown: true
                        },
                        {
                            link: '/admin/package',
                            icon: <IconGift size={24} color='black' />,
                            mobile_icon: <IconGift size={20} color='white' style={{color: 'white'}} />,
                            name: 'Packages',
                            mobileIsShown: false
                        },
                        {
                            link: '/admin/customer',
                            icon: <IconUser size={24} color='black' />,
                            mobile_icon: <IconUser size={20} color='white' style={{color: 'white'}} />,
                            name: 'Customers',
                            mobileIsShown: true
                        },
                        {
                            link: '/admin/customer/table',
                            icon: <IconTableHeart size={24} color='black' />,
                            mobile_icon: <IconTableHeart size={20} color='white' style={{color: 'white'}} />,
                            name: 'Customers Table',
                            mobileIsShown: false
                        },
                        {
                            link: '/admin/log',
                            icon: <IconListDetails size={24} color='black' />,
                            mobile_icon: <IconListDetails size={20} color='white' style={{color: 'white'}} />,
                            name: 'Logs',
                            mobileIsShown: false
                        }
                      ]
                    }
                />
            {children} 
        </div>
      )
  }

  
}
