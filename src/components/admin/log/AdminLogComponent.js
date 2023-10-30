"use client"
import { SelectComponent } from '@/components/shared/SelectComponent'
import React, { useEffect, useState } from 'react'

export const AdminLogComponent = ({ logs }) => {

  const [type, setType] = useState('all')
  const [filteredLogs, setFilteredLogs] = useState(logs)

  useEffect(() => {
    if(type != 'all') {
      setFilteredLogs(logs.filter(x => x.type == type))
    } else {
      setFilteredLogs(logs)
    }
  }, [type])

  const types = [
    {
      value: 'all',
      label: 'All'
    },
    {
      value: 'auth',
      label: 'Authentication'
    },
    {
      value: 'create',
      label: 'Create'
    },
    {
      value: 'delete',
      label: 'Delete'
    },
    {
      value: 'update',
      label: 'Update'
    },
    {
      value: 'list',
      label: 'List'
    }
  ]

  return (
    <div className='w-full md:w-3/4 h-screen overflow-y-scroll p-5 flex flex-col'>
      <div className='w-full flex justify-end items-center'>
        <div className='w-full md:w-1/2'>
          <SelectComponent
            onChange={setType}
            value={type}
            labelText='Type'
            placeholderText='Type' 
            options={types}
          />
        </div>
      </div>
      <div className='flex flex-col'>
        {
            filteredLogs.map(x => (
                <div className='p-3 bg-gray-100 mt-3 rounded-md border'>
                  <p className='text-xs text-black font-bold'>{x.message}</p>
                </div>
            ))
        }
      </div>
      <div className='flex md:hidden'>
        <div className='h-16 w-full'></div>
      </div>
    </div>
  )
}
