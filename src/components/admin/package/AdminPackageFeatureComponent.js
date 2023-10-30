"use client"
import { ButtonComponent } from '@/components/shared/ButtonComponent'
import { InputComponent } from '@/components/shared/InputComponent'
import { IconTrash } from '@tabler/icons-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const AdminPackageFeatureComponent = ({ title = '', id, deletePacketFeature, token, getPackages }) => {

    const [changableTitle, setChangableTitle] = useState(title)

    const updatePacketFeature = async () => {
        
        const res = await fetch(`${process.env.API_URL}/package/feature/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: changableTitle
                })
            })
        

        const data = await res.json()

        console.log(data)

        if(data.status == 200) {
            toast.success(data.message)
        } else {
            console.log(data)
        }
    }

  return (
    <div className='flex flex-wrap justify-between items-center mt-5'>
        <div className='w-[70%] md:w-[49%]'>
        <InputComponent 
            onChange={setChangableTitle}
            value={changableTitle}
            labelText='Title'
            placeholderText='Title'
        />
        </div>
        <div className='w-[29%] md:w-[24%]' onClick={() => deletePacketFeature(id)}>
            <IconTrash size={24} color='red' />
        </div>
        <div className='w-full md:w-[24%] mt-5 md:mt-0'>
            <ButtonComponent 
                onClick={updatePacketFeature}
                buttonText='Save'
                className='px-10 rounded-md'
            />
        </div>
    </div>
  )
}
