"use client"
import { ButtonComponent } from '@/components/shared/ButtonComponent'
import { InputComponent } from '@/components/shared/InputComponent'
import { IconChevronDown } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AdminModeratorComponent = ({ id, token, name = '', surname = '', img = '', email = '', password = '', phoneCode = '', phone = '', getModerators }) => {

    const [changableName, setChangableName] = useState(name)
    const [changableSurname, setChangableSurname] = useState(surname)
    const [changableImg, setChangableImg] = useState(img)
    const [changableEmail, setChangableEmail] = useState(email)
    const [changablePassword, setChangablePassword] = useState(password)
    const [changablePhoneCode, setChangablePhoneCode] = useState(phoneCode)
    const [changablePhone, setChangablePhone] = useState(phone)

    const [isOpen, setIsOpen] = useState(false)

    const deleteModerator = async () => {
        const res = await fetch(`${process.env.API_URL}/moderator/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await res.json()

        if(data.status == 200) {
            toast.success(data.message)
            window.location.reload()
        } else {
            console.log(data)
        }
    }

    const updateModerator = async () => {
        let res;
        if(password == '') {
            res = await fetch(`${process.env.API_URL}/moderator/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: changableName,
                    surname: changableSurname,
                    email: changableEmail,
                    phone_code: changablePhoneCode,
                    phone: changablePhone
                })
            })
        } else {
            res = await fetch(`${process.env.API_URL}/moderator/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: changableName,
                    surname: changableSurname,
                    email: changableEmail,
                    phone_code: changablePhoneCode,
                    phone: changablePhone,
                    password: changablePassword
                })
            })
        }
        

        const data = await res.json()

        if(data.status == 200) {
            toast.success(data.message)
            getModerators().catch(err => console.error(err))
        } else {
            console.log(data)
        }
    }

  return (
    <div className='w-full p-3 flex flex-col overflow-hidden border rounded-xl mt-5'>
            <div className='flex justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div className='flex items-center'>
                    {
                        (changableImg == '' || !changableImg) ? (
                            <Image 
                                width={32}
                                height={32}
                                src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}
                                className='rounded-full ml-5 md:ml-0'
                            />
                        ) : (
                            <Image 
                                width={32}
                                height={32}
                                src={changableImg}
                                className='rounded-full ml-5 md:ml-0'
                            />
                        )
                    }
                    
                    <p className='ml-2'>{changableName + ' ' + changableSurname}</p>
                </div>
                <IconChevronDown size={32} color='gray' />
            </div>
            <div className={`flex flex-col justify-between overflow-hidden mt-5 ${!isOpen && 'max-h-0 mt-0'}`}>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangableName}
                            value={changableName}
                            labelText='Name'
                            placeholderText='Name'
                        />
                    </div>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangableSurname}
                            value={changableSurname}
                            labelText='Surname'
                            placeholderText='Surname'
                            className='mt-5 md:mt-0'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangableEmail}
                            value={changableEmail}
                            labelText='Email'
                            placeholderText='Email'
                            inputType='email'
                        />
                    </div>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangablePassword}
                            value={changablePassword}
                            labelText='Password'
                            placeholderText='Password'
                            inputType='password'
                            className='mt-5 md:mt-0'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangablePhoneCode}
                            value={changablePhoneCode}
                            labelText='Phone Code'
                            placeholderText='Phone Code'
                        />
                    </div>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangablePhone}
                            value={changablePhone}
                            labelText='Phone'
                            placeholderText='Phone'
                            className='mt-5 md:mt-0'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <ButtonComponent 
                            onClick={deleteModerator}
                            buttonText='Delete'
                            className='bg-red-500'
                        />
                    </div>
                    <div className='w-full mt-2 md:mt-0 md:w-[49%]'>
                        <ButtonComponent 
                            onClick={updateModerator}
                            buttonText='Update'
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}
