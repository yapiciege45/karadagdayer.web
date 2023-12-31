"use client"
import { ButtonComponent } from '@/components/shared/ButtonComponent'
import { CheckboxComponent } from '@/components/shared/CheckboxComponent'
import { InputComponent } from '@/components/shared/InputComponent'
import { SelectComponent } from '@/components/shared/SelectComponent'
import { IconChevronDown } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const EmployeeCustomerComponent = ({ isAdmin = false, passport, passport_verify, packages, id, token, proxy, diploma, criminal_record, proxy_verify, diploma_verify, criminal_record_verify, session_date, company_setup_date, session_end_date, name = '', img = '', surname = '', address, debt, payment, company_name = '', email = '', password = '', phoneCode = '', phone = '', distributorId, packageId, getCustomers }) => {
    
    const [changableName, setChangableName] = useState(name)
    const [changableSurname, setChangableSurname] = useState(surname)
    const [changableEmail, setChangableEmail] = useState(email)
    const [changableCompanyName, setChangableCompanyName] = useState(company_name)
    const [changableAddress, setChangableAddress] = useState(address)
    const [changableDebt, setChangableDebt] = useState(debt)
    const [changablePayment, setChangablePayment] = useState(payment)
    const [changablePassword, setChangablePassword] = useState(password)
    const [changablePhoneCode, setChangablePhoneCode] = useState(phoneCode)
    const [changableProxy, setChangableProxy] = useState(proxy)
    const [changablePassport, setChangablePassport] = useState(passport)
    const [changableDiploma, setChangableDiploma] = useState(diploma)
    const [changableCriminalRecord, setChangableCriminalRecord] = useState(criminal_record)
    const [changableSessionDate, setChangableSessionDate] = useState(session_date)
    const [changableSessionEndDate, setChangableSessionEndDate] = useState(session_end_date)
    const [changableCompanySetupDate, setChangableCompanySetupDate] = useState(company_setup_date)
    const [changableProxyVerify, setChangableProxyVerify] = useState(proxy_verify)
    const [changablePassportVerify, setChangablePassportVerify] = useState(passport_verify)
    const [changableDiplomaVerify, setChangableDiplomaVerify] = useState(diploma_verify)
    const [changableCriminalRecordVerify, setChangableCriminalRecordVerify] = useState(criminal_record_verify)
    const [changablePhone, setChangablePhone] = useState(phone)
    const [changablePackageId, setChangablePackageId] = useState(packageId)
    const [changableImg, setChangableImg] = useState(img)

    packages = packages.map(x => ({
        value: x.id,
        label: x.title
    }))

    packages.push({
        value: null,
        label: 'None'
    })

    const [isOpen, setIsOpen] = useState(false)

    const sqlDateToJsDate = (date) => {
        let convertedDate = date

        if(date && date.length > 16) {
            convertedDate = date.slice(0,16)
        }
        return convertedDate
    }

    const jsDateToSqlDate = (date) => {
        if(date.length == 16) {
            let convertedDate = date + ':00'

            console.log(convertedDate)

            return convertedDate
        }
    }

    const updateSessionDate = (date) => {
        setChangableSessionDate(jsDateToSqlDate(date))
    }

    const getSessionDate = () => {
        return sqlDateToJsDate(changableSessionDate)
    }

    const updateSessionEndDate = (date) => {
        setChangableSessionEndDate(jsDateToSqlDate(date))
    }

    const getSessionEndDate = () => {
        return sqlDateToJsDate(changableSessionEndDate)
    }

    const updateCompanySetupDate = (date) => {
        setChangableSessionDate(jsDateToSqlDate(date))
    }

    const getCompanySetupDate = () => {
        return sqlDateToJsDate(changableCompanySetupDate)
    }

    const updateCustomer = async () => {

        let res;
        if(password == '') {
            res = await fetch(`${process.env.API_URL}/customer/distributor/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: changableName,
                    surname: changableSurname,
                    email: changableEmail,
                    phone_code: changablePhoneCode,
                    phone: changablePhone,
                    password: changablePassword,
                    company_name: changableCompanyName,
                    address: changableAddress,
                    payment: changablePayment,
                    debt: changableDebt,
                    distributorId: changableDistributorId,
                    session_date: changableSessionDate,
                    session_end_date: changableSessionEndDate,
                    company_setup_date: changableCompanySetupDate,
                    proxy_verify: changableProxyVerify,
                    passport_verify: changablePassportVerify,
                    diploma_verify: changableDiplomaVerify,
                    criminal_record_verify: changableCriminalRecordVerify,
                })
            })
        } else {
            res = await fetch(`${process.env.API_URL}/customer/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: changableName,
                    surname: changableSurname,
                    email: changableEmail,
                    password: changablePassword,
                    phone_code: changablePhoneCode,
                    phone: changablePhone,
                    company_name: changableCompanyName,
                    address: changableAddress,
                    payment: changablePayment,
                    debt: changableDebt,
                    distributorId: changableDistributorId,
                    session_date: changableSessionDate,
                    session_end_date: changableSessionEndDate,
                    company_setup_date: changableCompanySetupDate,
                    proxy_verify: changableProxyVerify,
                    passport_verify: changablePassportVerify,
                    diploma_verify: changableDiplomaVerify,
                    criminal_record_verify: changableCriminalRecordVerify,
                })
            })
        }
        

        const data = await res.json()

        if(data.status == 200) {
            toast.success(data.message)
            getCustomers().catch(err => console.error(err))
        } else {
            console.log(data)
        }
    }

  return (
    <div className='w-full p-3 flex flex-col overflow-hidden border rounded-xl mt-5'>
            <div className='flex justify-between cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div className='flex items-center'>
                    {
                        (changableImg == '' || !changableImg) ? (
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
                                src={changableImg}
                                className='rounded-full ml-5 md:ml-0'
                            />
                        )
                    }
                    
                    <p className='ml-2'>{changableName + ' ' + changableSurname}</p>
                </div>
                <IconChevronDown size={32} color='gray' />
            </div>
            <div className={`flex flex-col justify-between overflow-hidden mt-5 ${!isOpen && 'max-h-0 mt-0'}`}>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='w-full'>
                        <SelectComponent 
                            onChange={setChangablePackageId}
                            value={changablePackageId}
                            labelText='Package'
                            placeholderText='Package'
                            options={packages}
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangableName}
                            value={changableName}
                            labelText='Name'
                            placeholderText='Name'
                        />
                    </div>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangableSurname}
                            value={changableSurname}
                            labelText='Surname'
                            placeholderText='Surname'
                            className='mt-5 md:mt-0'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangableEmail}
                            value={changableEmail}
                            labelText='Email'
                            inputType='email'
                            placeholderText='Email'
                        />
                    </div>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangablePassword}
                            value={changablePassword}
                            labelText='Password'
                            placeholderText='Password'
                            className='mt-5 md:mt-0'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangablePhoneCode}
                            value={changablePhoneCode}
                            labelText='Phone Code'
                            placeholderText='Phone Code'
                        />
                    </div>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangablePhone}
                            value={changablePhone}
                            labelText='Phone'
                            placeholderText='Phone'
                            className='mt-5 md:mt-0'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangableCompanyName}
                            value={changableCompanyName}
                            labelText='Company Name'
                            placeholderText='Company Name'
                        />
                    </div>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={setChangableAddress}
                            value={changableAddress}
                            labelText='Address'
                            placeholderText='Address'
                            className='mt-5 md:mt-0'
                        />
                    </div>
                </div>
                {
                    isAdmin && (
                        <div className='flex flex-wrap justify-between items-center mt-5'>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setChangableDebt}
                                    value={changableDebt}
                                    labelText='Debt'
                                    inputType='number'
                                    placeholderText='Debt'
                                />
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <InputComponent 
                                    onChange={setChangablePayment}
                                    value={changablePayment}
                                    labelText='Payment'
                                    placeholderText='Payment'
                                    inputType='number'
                                    className='mt-5 md:mt-0'
                                />
                            </div>
                        </div>
                    )
                }
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={updateSessionDate}
                            value={getSessionDate()}
                            labelText='Session Date'
                            inputType='datetime-local'
                            placeholderText='Session Date'
                            max="2099-06-30T16:30"
                        />
                    </div>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={updateSessionEndDate}
                            value={getSessionEndDate()}
                            labelText='Session End Date'
                            inputType='datetime-local'
                            placeholderText='Session End Date'
                            max="2099-06-30T16:30"
                        />
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full md:w-[49%]'>
                        <InputComponent 
                            onChange={updateCompanySetupDate}
                            value={getCompanySetupDate()}
                            labelText='Company Setup Date'
                            inputType='datetime-local'
                            placeholderText='Company Setup Date'
                            max="2099-06-30T16:30"
                        />
                    </div>
                    <div className='w-full flex justify-between items-center md:w-[49%]'>
                        <CheckboxComponent 
                            onChange={setChangableProxyVerify}
                            value={changableProxyVerify}
                            labelText='Proxy'
                        />
                        {
                            changableProxy ? (
                                <Link className='text-xs w-1/2 text-blue-500' href={`/${changableProxy}`} target='_blank'>(View)</Link>
                            ) : (
                                <p className='text-xs w-1/2 text-blue-500'>(Not Uploaded)</p>
                            )
                        }
                        
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full flex justify-between items-center md:w-[49%]'>
                        <CheckboxComponent 
                            onChange={setChangableDiplomaVerify}
                            value={changableDiplomaVerify}
                            labelText='Diploma'
                        />
                        {
                            changableDiploma ? (
                                <Link className='text-xs w-1/2 text-blue-500' href={`/${changableDiploma}`} target='_blank'>(View)</Link>
                            ) : (
                                <p className='text-xs w-1/2 text-blue-500'>(Not Uploaded)</p>
                            )
                        }
                    </div>
                    <div className='w-full flex justify-between items-center md:w-[49%]'>
                        <CheckboxComponent 
                            onChange={setChangableCriminalRecordVerify}
                            value={changableCriminalRecordVerify}
                            labelText='Criminal Record'
                        />
                        {
                            changableCriminalRecord ? (
                                <Link className='text-xs w-1/2 text-blue-500' href={`/${changableCriminalRecord}`} target='_blank'>(View)</Link>
                            ) : (
                                <p className='text-xs w-1/2 text-blue-500'>(Not Uploaded)</p>
                            )
                        }
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full flex justify-between items-center md:w-[49%]'>
                        <CheckboxComponent 
                            onChange={setChangablePassportVerify}
                            value={changablePassportVerify}
                            labelText='Passport'
                        />
                        {
                            changablePassport ? (
                                <Link className='text-xs w-1/2 text-blue-500' href={`/${changablePassport}`} target='_blank'>(View)</Link>
                            ) : (
                                <p className='text-xs w-1/2 text-blue-500'>(Not Uploaded)</p>
                            )
                        }
                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center mt-5'>
                    <div className='w-full mt-2 md:mt-0'>
                        <ButtonComponent 
                            onClick={updateCustomer}
                            buttonText='Update'
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}
