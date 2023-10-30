import { ButtonComponent } from '@/components/shared/ButtonComponent'
import { IconChevronDown } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import { AdminModeratorComponent } from './AdminModeratorComponent'

export const AdminModeratorPageComponent = ({ addNewModerator, moderators, token, getModerators }) => {
  return (
    <div className='w-full md:w-3/4 h-screen overflow-y-scroll p-5 flex flex-col'>
      <div className='w-full flex justify-end items-center'>
        <div className='w-full md:w-1/2'>
          <ButtonComponent 
              onClick={addNewModerator}
              buttonText='+ Add New Moderator'
              className='px-10 rounded-md'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        {
            moderators.map(x => (
                <AdminModeratorComponent
                    id={x.id}
                    name={x.name}
                    surname={x.surname}
                    img={x.img}
                    email={x.email}
                    phone={x.phone}
                    phoneCode={x.phone_code}
                    token={token}
                    getModerators={getModerators}
                />
            ))
        }
      </div>
      <div className='flex md:hidden'>
        <div className='h-16 w-full'></div>
      </div>
    </div>
  )
}
