import { ButtonComponent } from '@/components/shared/ButtonComponent'
import React from 'react'
import { AdminDistributorComponent, AdminEmployeeComponent } from './AdminEmployeeComponent'

export const AdminEmployeePageComponent = ({ addNewEmployee, employees, token, getEmployees, distributors }) => {
  return (
    <div className='w-full md:w-3/4 h-screen overflow-y-scroll p-5 flex flex-col'>
      <div className='w-full flex justify-end items-center'>
        <div className='w-full md:w-1/2'>
            <ButtonComponent 
                onClick={addNewEmployee}
                buttonText='+ Add New Employee'
                className='w-auto px-10 rounded-md'
            />
        </div>
      </div>
      <div className='flex flex-col'>
        {
            employees.map((x, index) => (
                <AdminEmployeeComponent
                    id={x.id}
                    key={index}
                    isAdmin={x.isAdmin}
                    name={x.name}
                    surname={x.surname}
                    img={x.img}
                    email={x.email}
                    phone={x.phone}
                    phoneCode={x.phone_code}
                    token={token}
                    getEmployees={getEmployees}
                    distributorId={x.distributorId}
                    distributors={distributors}
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
