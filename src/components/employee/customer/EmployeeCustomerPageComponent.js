import { ButtonComponent } from '@/components/shared/ButtonComponent'
import React from 'react'
import { AdminCustomerComponent, AdminDistributorComponent, AdminEmployeeComponent, EmployeeCustomerComponent } from './EmployeeCustomerComponent'

export const EmployeeCustomerPageComponent = ({ isAdmin, addNewCustomer, customers, token, getCustomers, packages }) => {
  return (
    <div className='w-full md:w-3/4 h-screen overflow-y-scroll p-5 flex flex-col'>
      <div className='w-full flex justify-end items-center'>
        <div className='w-full md:w-1/2'>
            <ButtonComponent 
                onClick={addNewCustomer}
                buttonText='+ Add New Customer'
                className='w-auto px-10 rounded-md'
            />
        </div>
      </div>
      <div className='flex flex-col'>
        {
            customers.map((x, index) => (
                <EmployeeCustomerComponent
                    id={x.id}
                    key={index}
                    name={x.name}
                    surname={x.surname}
                    img={x.img}
                    email={x.email}
                    phone={x.phone}
                    phoneCode={x.phone_code}
                    token={token}
                    getCustomers={getCustomers}
                    distributorId={x.distributorId}
                    packageId={x.packageId}
                    packages={packages}
                    proxy={x.proxy}
                    diploma={x.diploma}
                    criminal_record={x.criminal_record}
                    proxy_verify={x.proxy_verify}
                    diploma_verify={x.diploma_verify}
                    criminal_record_verify={x.criminal_record_verify}
                    debt={x.debt}
                    payment={x.payment}
                    session_date={x.session_date}
                    session_end_date={x.session_end_date}
                    company_setup_date={x.company_setup_date}
                    company_name={x.company_name}
                    address={x.address}
                    isAdmin={isAdmin}
                    passport={x.passport}
                    passport_verify={x.passport_verify}
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
