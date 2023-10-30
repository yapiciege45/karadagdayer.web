import { InputComponent } from '@/components/shared/InputComponent'
import { IconUserCircle } from '@tabler/icons-react'
import Link from 'next/link'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React from 'react'

export const AdminCustomerTableComponent = ({ search, setSearch, customers }) => {

  const userBodyTemplate = ({ name, surname, company_name }) => {
    return (
      <div className='flex items-center'>
        <IconUserCircle size={48} color='gray' />
        <div className='flex flex-col ml-2'>
          <p className='text-md '>{name + ' ' + surname}</p>
          <p className='text-sm font-light'>{company_name}</p>
        </div>
      </div>
    )
  }

  const phoneBodyTemplate = ({ phone, phone_code }) => {
    return (
      <p className='text-sm font-light'>{ '+' + phone_code + phone }</p>
    )
  }

  const debtBodyTemplate = ({ debt }) => {
    return (
      <p className='text-sm font-light'>{ '€' + debt }</p>
    )
  }

  const paymentBodyTemplate = ({ payment }) => {
    return (
      <p className='text-sm font-light'>{ '€' + payment }</p>
    )
  }

  const passportBodyTemplate = ({ passport, passport_verify }) => {
    return (
      <div className={`flex w-full h-full justify-center items-center ${passport_verify ? 'bg-green-800' : 'bg-red-800'}`}>
        {
          passport ? (
            <Link className={`text-sm font-light text-white`} href={`/${passport}`} target='_blank'>(View)</Link>
          ) : (
            <p className='text-sm font-light text-white'>None</p>
          )
        }
        
      </div>
    )
  }

  const proxyBodyTemplate = ({ proxy, proxy_verify }) => {
    return (
      <div className={`flex w-full h-full justify-center items-center ${proxy_verify ? 'bg-green-800' : 'bg-red-800'}`}>
      {
        proxy ? (
          <Link className={`text-sm font-light text-white`} href={`/${proxy}`} target='_blank'>(View)</Link>
        ) : (
          <p className='text-sm font-light text-white'>None</p>
        )
      }
      </div>
    )
  }

  const diplomaBodyTemplate = ({ diploma, diploma_verify }) => {
    return (
      <div className={`flex w-full h-full justify-center items-center ${diploma_verify ? 'bg-green-800' : 'bg-red-800'}`}>
      {
        diploma ? (
          <Link className={`text-sm font-light text-white`} href={`/${diploma}`} target='_blank'>(View)</Link>
        ) : (
          <p className='text-sm font-light text-white'>None</p>
        )
      }
      </div>
    )
  }

  const criminalRecordBodyTemplate = ({ criminal_record, criminal_record_verify }) => {
    return (
      <div className={`flex w-full h-full justify-center items-center ${criminal_record_verify ? 'bg-green-800' : 'bg-red-800'}`}>
      {
        criminal_record ? (
          <Link className={`text-sm font-light text-white`} href={`/${criminal_record}`} target='_blank'>(View)</Link>
        ) : (
          <p className='text-sm font-light text-white'>None</p>
        )
      }
      </div>
    )
  }

  const sessionDateBodyTemplate = ({ session_date }) => {
    if(session_date) {
      const date = new Date(session_date);

      const options = { year: 'numeric', month: 'long', day: 'numeric'};
      const formattedDate = date.toLocaleString('tr-TR', options);

      return (
        <p className='text-sm font-light'>{formattedDate}</p>
      )
    } else {
      return (
        <p className='text-sm font-light'>None</p>
      )
    }
  }

  const sessionEndDateBodyTemplate = ({ session_end_date }) => {
    if(session_end_date) {
      const date = new Date(session_end_date);

      const options = { year: 'numeric', month: 'long', day: 'numeric'};
      const formattedDate = date.toLocaleString('tr-TR', options);

      return (
        <p className='text-sm font-light'>{formattedDate}</p>
      )
    } else {
      return (
        <p className='text-sm font-light'>None</p>
      )
    }
  }

  const companySetupDateBodyTemplate = ({ company_setup_date }) => {
    if(company_setup_date) {
      const date = new Date(company_setup_date);

      const options = { year: 'numeric', month: 'long', day: 'numeric'};
      const formattedDate = date.toLocaleString('tr-TR', options);

      return (
        <p className='text-sm font-light'>{formattedDate}</p>
      )
    } else {
      return (
        <p className='text-sm font-light'>None</p>
      )
    }
  }

  return (
    <div className="p-5 h-screen overflow-y-scroll flex flex-col w-full">
      <div className="w-full md:w-1/3">
        <InputComponent 
          onChange={setSearch}
          value={search}
          placeholderText='Search'
        />
      </div>
      <div className='mt-5'>
        <DataTable value={customers} tableStyle={{ minWidth: '50rem' }}>
          <Column field="id" header="ID"></Column>
          <Column field="name" body={userBodyTemplate} style={{minWidth: '250px'}} header="User"></Column>
          <Column field="session_date" body={sessionDateBodyTemplate} style={{minWidth: '250px'}} header="Session Date"></Column>
          <Column field="session_end_date" body={sessionEndDateBodyTemplate} style={{minWidth: '250px'}} header="Session End Date"></Column>
          <Column field="company_setup_date" body={companySetupDateBodyTemplate} style={{minWidth: '250px'}} header="Company Setup Date"></Column>
          <Column field="phone" body={phoneBodyTemplate} style={{minWidth: '250px'}} header="Phone"></Column>
          <Column field="email" bodyClassName='text-sm font-light' style={{minWidth: '200px'}} header="Email"></Column>
          <Column field="address" bodyClassName='text-sm font-light' style={{minWidth: '200px'}} header="Address"></Column>
          <Column field="debt" body={debtBodyTemplate} style={{minWidth: '125px'}} header="Debt"></Column>
          <Column field="payment" body={paymentBodyTemplate} style={{minWidth: '125px'}} header="Payment"></Column>
          <Column field="passport" body={passportBodyTemplate} style={{minWidth: '200px'}} header="Passport"></Column>
          <Column field="proxy" body={proxyBodyTemplate} style={{minWidth: '200px'}} header="Proxy"></Column>
          <Column field="diploma" body={diplomaBodyTemplate} style={{minWidth: '200px'}} header="Diploma"></Column>
          <Column field="criminal_record" body={criminalRecordBodyTemplate} style={{minWidth: '200px'}} header="Criminal Record"></Column>
          <Column field="package.title" style={{minWidth: '200px'}} header="Package"></Column>
          <Column field="distributor.name" style={{minWidth: '200px'}} header="Distributor"></Column>
        </DataTable>
      </div>
    </div>
  )
}
