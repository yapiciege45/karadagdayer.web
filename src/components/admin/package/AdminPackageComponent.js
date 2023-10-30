"use client"
import { ButtonComponent } from '@/components/shared/ButtonComponent'
import { CheckboxComponent } from '@/components/shared/CheckboxComponent'
import { InputComponent } from '@/components/shared/InputComponent'
import { PacketFeatureInputComponent } from '@/components/shared/PacketFeatureInputComponent'
import { IconChevronDown, IconPlus, IconTrash } from '@tabler/icons-react'
import Image from 'next/image'
import { Input } from 'postcss'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AdminPackageFeatureComponent } from './AdminPackageFeatureComponent'

export const AdminPackageComponent = ({ id, token, title = '', description = 'Example', icon = '', price = 0, main, package_features = [], getPackages }) => {

    const [changableTitle, setChangableTitle] = useState(title)
    const [changableDescription, setChangableDescription] = useState(description)
    const [changableIcon, setChangableIcon] = useState(icon)
    const [changablePrice, setChangablePrice] = useState(price)
    const [changableMain, setChangableMain] = useState(main)
    const [changablePackageFeatures, setChangablePackageFeatures] = useState(package_features)

    const [isOpen, setIsOpen] = useState(false)

    const deletePackage = async () => {
        const res = await fetch(`${process.env.API_URL}/package/delete/${id}`, {
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

    const updatePackage = async () => {
        
        const res = await fetch(`${process.env.API_URL}/package/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: changableTitle,
                    description: changableDescription,
                    icon: changableIcon,
                    price: changablePrice,
                    main: changableMain,
                    package_features: changablePackageFeatures
                })
            })
        

        const data = await res.json()

        console.log(data)

        if(data.status == 200) {
            toast.success(data.message)
            getPackages().catch(err => console.log(err))
        } else {
            console.log(data)
        }
    }

    const addPacketFeature = async (id) => {
        const res = await fetch(`${process.env.API_URL}/package/feature/create/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "title": "Example Title",
                "description": "Example Description"
            })
        })

        const data = await res.json()

        if(data.status == 200) {
            toast.success(data.message)
            window.location.reload()
        } else {
            console.log(data)
        }
    }

    const deletePacketFeature = async (id) => {
        const res = await fetch(`${process.env.API_URL}/package/feature/delete/${id}`, {
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

    if(changablePackageFeatures) {
        return (
            <div className='w-full p-3 flex flex-col overflow-hidden border rounded-xl mt-5'>
                    <div className='flex justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <div className='flex items-center'>
                            {
                                (changableIcon == '' || !changableIcon) ? (
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
                                        src={changableIcon}
                                        className='rounded-full ml-5 md:ml-0'
                                    />
                                )
                            }
                            
                            <p className='ml-2'>{changableTitle}</p>
                        </div>
                        <IconChevronDown size={32} color='gray' />
                    </div>
                    <div className={`flex flex-col justify-between overflow-hidden mt-5 ${!isOpen && 'max-h-0 mt-0'}`}>
                        <div className='flex flex-wrap justify-between items-center'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setChangableTitle}
                                    value={changableTitle}
                                    labelText='Title'
                                    placeholderText='Title'
                                />
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setChangableDescription}
                                    value={changableDescription}
                                    labelText='Description'
                                    placeholderText='Description'
                                    className='mt-5 md:mt-0'
                                />
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between items-center mt-5'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setChangablePrice}
                                    value={changablePrice}
                                    labelText='Price'
                                    inputType='number'
                                    placeholderText='Price'
                                />
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <CheckboxComponent 
                                    onChange={setChangableMain}
                                    value={changableMain}
                                    labelText='Is Main Package'
                                    className='mt-5 md:mt-0'
                                />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                            <p>Features</p>
                            <div onClick={() => addPacketFeature(id)}>
                                <IconPlus size={24} color='green' />
                            </div>
                        </div>
                            {
                                changablePackageFeatures.map(x => (
                                    <AdminPackageFeatureComponent 
                                        key={x.id}
                                        title={x.title}
                                        token={token}
                                        id={x.id}
                                        deletePacketFeature={deletePacketFeature}
                                    />
                                ))
                            }
                        <div className='flex flex-wrap justify-between items-center mt-5'>
                            <div className='w-full md:w-[49%]'>
                                <ButtonComponent 
                                    onClick={deletePackage}
                                    buttonText='Delete'
                                    className='bg-red-500'
                                />
                            </div>
                            <div className='w-full mt-2 md:mt-0 md:w-[49%]'>
                                <ButtonComponent 
                                    onClick={updatePackage}
                                    buttonText='Update'
                                />
                            </div>
                        </div>
                    </div>
                </div>
          )
    }

  
}
