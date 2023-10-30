"use client"
import React, { useRef } from 'react'
import { HiddenInputComponent } from './HiddenInputComponent'
import { IconPencil } from '@tabler/icons-react'

export const SettingComponent = ({ onChange, value = '', type = 'text', name, className = '', editable = true }) => {

    const input = useRef(null)

    const focusInput = () => {
        input.current.focus()
    }

  return (
    <div className={`w-full flex justify-between py-2 border-b border-separate ${className}`}>
        <p className='text-sm md:text-lg font-bold'>{name}</p>
        <div className='flex items-center'>
            {
                editable ? (
                    <>
                        <IconPencil size={24} color='black' className='mr-3 cursor-pointer' onClick={focusInput} />
                        <HiddenInputComponent 
                            ref={input}
                            onChange={onChange}
                            value={value}
                            type={type}
                        />
                    </>
                ) : (
                    <p className='text-sm md:text-lg'>{value}</p>
                )
            }
            
        </div>
    </div>
  )
}
