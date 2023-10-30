import { ButtonComponent } from '@/components/shared/ButtonComponent'
import { HiddenInputComponent } from '@/components/shared/HiddenInputComponent'
import { SettingComponent } from '@/components/shared/SettingComponent'
import Image from 'next/image'
import React from 'react'

export const AdminHomePageComponent = ({ user, type, name, setName, surname, setSurname, email, setEmail, phone, setPhone, phoneCode, setPhoneCode, save }) => {
  return (
    <div className='w-full md:w-3/4 h-screen overflow-y-scroll p-5'>
      <div className='flex items-center w-full flex-col md:flex-row'>
        {
          user.img ? (
            <Image 
              width={96}
              height={96}
              src={user.img}
              className='rounded-full ml-5 md:ml-0'
            />
          ) : (
            <Image 
              width={96}
              height={96}
              src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}
              className='rounded-full ml-5 md:ml-0'
            />
          )
        }
        <div className='flex flex-col items-center md:items-start ml-5 mt-3 md:mt-0'>
          <p>{name + ' ' + surname}</p>
          <p className='uppercase'>{type}</p>
        </div>
      </div>
      <div className='flex flex-col mt-8'>
        <SettingComponent 
          name='Name'
          onChange={setName}
          value={name}
          type='text'
        />
        <SettingComponent 
          name='Surname'
          onChange={setSurname}
          value={surname}
          type='text'
          className='mt-5'
        />
        <SettingComponent 
          name='E-mail'
          onChange={setEmail}
          value={email}
          type='email'
          className='mt-5'
        />
        <SettingComponent 
          name='Phone Code'
          onChange={setPhoneCode}
          value={phoneCode}
          type='text'
          className='mt-5'
        />
        <SettingComponent 
          name='Phone'
          onChange={setPhone}
          value={phone}
          type='text'
          className='mt-5'
        />
      </div>
      <ButtonComponent
        onClick={save}
        buttonText='Save Changes'
        className='mt-8'
      />
      <div className='flex md:hidden'>
        <div className='h-16 w-full'></div>
      </div>
    </div>
  )
}
