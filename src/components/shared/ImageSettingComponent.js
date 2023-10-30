"use client"
import React, { useRef } from 'react'
import { HiddenInputComponent } from './HiddenInputComponent'
import { IconPencil } from '@tabler/icons-react'
import Link from 'next/link'

export const ImageSettingComponent = ({ onChange, value = '', name, className = '', editable = true }) => {

    const input = useRef(null)

  return (
    <div className={`w-full flex justify-between py-2 border-b border-separate ${className}`}>
        <p className='text-sm md:text-lg font-bold'>{name}</p>
        <div className='flex items-center'>
            {
                editable ? (
                    <>
                        <input type="file" name="image" onChange={e => onChange(e.target.files[0])}/>
                        {
                            !(value == null || value == '') && (
                                <p className='ml-3'>(Image is uploaded)</p>
                            )
                        }
                    </>
                ) : (
                    <>
                        <p className='text-sm md:text-lg'>{name} verified</p>
                        <p className='ml-3'>(Image is uploaded)</p>
                    </>
                )
            }
        </div>
    </div>
  )
}
