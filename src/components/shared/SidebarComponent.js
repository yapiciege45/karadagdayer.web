"use client"
import { IconLogout, IconMenu2, IconX } from '@tabler/icons-react'
import { deleteCookie } from 'cookies-next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const SidebarComponent = ({ pp, type, fullName, links = [] }) => {

  const [mobileNav, setMobileNav] = useState(false)

  const router = useRouter()

  const logout = () => {
    deleteCookie('token')
    deleteCookie('user')
    router.push('/')
  }

  return (
    <>
      <div className='w-5/12 md:w-1/4 h-screen overflow-y-scroll bg-gray-100 border-r border-gray-300 drop-shadow-md hidden md:flex flex-col p-5'>
        <div className='flex flex-col items-center w-full'>
          {
            pp ? (
              <Image 
                width={128}
                height={128}
                src={pp}
                className='rounded-full'
              />
            ) : (
              <Image 
                width={128}
                height={128}
                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}
                className='rounded-full'
              />
            )
          }
          <p className='mt-3 text-2xl font-bold'>{fullName}</p>
          <p className='uppercase'>{type}</p>
        </div>
        <div className='flex flex-col mt-3 justify-between h-[85vh]'>
          <div className='flex flex-col'>
            {
              links.map(link => (
                <Link href={link.link} key={link.name} className='flex items-center border-b p-3 hover:bg-gray-200 transition-all cursor-pointer'>
                  {link.icon}
                  <p className='ml-3'>{link.name}</p>
                </Link>
              ))
            }
          </div>
          <div onClick={() => logout()} className='flex items-center p-3 hover:bg-gray-200 transition-all cursor-pointer'>
            <IconLogout size={32} color='red' />
            <p className='ml-3'>Çıkış Yap</p>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 flex justify-around items-center md:hidden bg-blue-700 border-t border-t-white h-16 w-full'>
        {
          links.filter(x => x.mobileIsShown == true).map(link => (
            <Link href={link.link} key={link.name} className='flex flex-col items-center'>
              {link.mobile_icon}
              <p className='text-white text-sm mt-1'>{link.name}</p>
            </Link>
          ))
        }  
        <div className='flex flex-col items-center' onClick={() => setMobileNav(true)}>
          <IconMenu2 size={20} color='white' />
          <p className='text-white text-sm mt-1'>Menu</p>
        </div>
      </div>
      <div className={`w-full h-screen bg-white fixed flex flex-col md:hidden items-center top-0 ${mobileNav ? 'left-0' : 'left-[-1000px]'} transition-all`}>
        <div className='w-full h-screen overflow-y-scroll relative flex flex-col p-3'>
          <IconX size={24} color='black' className='absolute top-5 right-5' onClick={() => setMobileNav(false)} />
          <div className='flex flex-col items-center mt-5'>
            {
              pp ? (
                <Image 
                  width={64}
                  height={64}
                  src={pp}
                  className='rounded-full'
                />
              ) : (
                <Image 
                  width={64}
                  height={64}
                  src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}
                  className='rounded-full'
                />
              )
            }
            <p className='mt-3 text-2xl font-bold'>{fullName}</p>
            <p className='uppercase'>{type}</p>
          </div>
          <div className='flex flex-col mt-3 h-[85vh]'>
            {
              links.map(link => (
                <Link href={link.link} key={link.name} className='flex items-center border-b p-3 hover:bg-gray-200 transition-all cursor-pointer'>
                  {link.icon}
                  <p className='ml-3'>{link.name}</p>
                </Link>
              ))
            }
          </div>
          <div onClick={() => logout()} className='flex items-center p-3 hover:bg-gray-200 transition-all cursor-pointer'>
            <IconLogout size={32} color='red' />
            <p className='ml-3'>Çıkış Yap</p>
          </div>
        </div>
      </div>
    </>
  )
}
