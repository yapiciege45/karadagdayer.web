import { ButtonComponent } from '@/components/shared/ButtonComponent'
import React from 'react'
import { AdminDistributorComponent } from './AdminDistributorComponent'

export const AdminDistributorPageComponent = ({ addNewDistributor, distributors, token, getDistributors }) => {
  return (
    <div className='w-full md:w-3/4 h-screen overflow-y-scroll p-5 flex flex-col'>
      <div className='w-full flex justify-end items-center'>
        <div className='w-full md:w-1/2'>
            <ButtonComponent 
                onClick={addNewDistributor}
                buttonText='+ Add New Distributor'
                className='w-auto px-10 rounded-md'
            />
        </div>
      </div>
      <div className='flex flex-col'>
        {
            distributors.map(x => (
                <AdminDistributorComponent
                    id={x.id}
                    name={x.name}
                    location={x.location}
                    img={x.img}
                    getDistributors={getDistributors}
                    token={token}
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
