import { ButtonComponent } from '@/components/shared/ButtonComponent'
import React from 'react'
import { AdminDistributorComponent, AdminPackageComponent } from './AdminPackageComponent'

export const AdminPackagePageComponent = ({ addNewPackage, packages, token, getPackages }) => {

  if(packages) {
    return (
      <div className='w-full md:w-3/4 h-screen overflow-y-scroll p-5 flex flex-col'>
        <div className='w-full flex justify-end items-center'>
          <div className='w-full md:w-1/2'>
              <ButtonComponent 
                  onClick={addNewPackage}
                  buttonText='+ Add New Package'
                  className='w-auto px-10 rounded-md'
              />
          </div>
        </div>
        <div className='flex flex-col'>
          {
              packages.map(x => (
                  <AdminPackageComponent
                      key={x.id}
                      id={x.id}
                      title={x.title}
                      description={x.description}
                      icon={x.icon}
                      price={x.price}
                      main={x.main}
                      package_features={x.package_features}
                      getPackages={getPackages}
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
  
}
