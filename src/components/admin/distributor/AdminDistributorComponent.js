"use client"
import { ButtonComponent } from '@/components/shared/ButtonComponent'
import { InputComponent } from '@/components/shared/InputComponent'
import { IconChevronDown } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AdminDistributorComponent = ({ id, token, name = '', location = '', img = '', getDistributors }) => {

    const [changableName, setChangableName] = useState(name)
    const [changableLocation, setChangableLocation] = useState(location)
    const [changableImg, setChangableImg] = useState(img)

    const [isOpen, setIsOpen] = useState(false)

    const deleteDistributor = async () => {
        const res = await fetch(`${process.env.API_URL}/distributor/delete/${id}`, {
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

    const updateDistributor = async () => {
        
        const res = await fetch(`${process.env.API_URL}/distributor/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: changableName,
                    location: changableLocation,
                })
            })
        

        const data = await res.json()

        console.log(data)

        if(data.status == 200) {
            toast.success(data.message)
            getDistributors().catch(err => console.error(err))
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
                    
                    <p className='ml-2'>{changableName}</p>
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
                            onChange={setChangableLocation}
                            value={changableLocation}
                            labelText='Location'
                            placeholderText='Location'
                            className='mt-5 md:mt-0'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <ButtonComponent 
                            onClick={deleteDistributor}
                            buttonText='Delete'
                            className='bg-red-500'
                        />
                    </div>
                    <div className='w-full mt-2 md:mt-0 md:w-[49%]'>
                        <ButtonComponent 
                            onClick={updateDistributor}
                            buttonText='Update'
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}
