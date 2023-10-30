"use client"
import { AdminCustomerTableComponent } from '@/components/admin/customer/AdminCustomerTableComponent'
import { getCustomers } from '@/lib/getCustomers'
import React, { useState, useEffect } from 'react'

export const AdminCustomerTableContainer = () => {

  const [search, setSearch] = useState('')
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers(search).then(x => {
      console.log(x)
      setCustomers(x)
    })
  }, [])

  useEffect(() => {
    getCustomers(search).then(x => {
      console.log(x)
      setCustomers(x)
    })
  }, [search])

  return (
    <AdminCustomerTableComponent 
      search={search}
      setSearch={setSearch}
      customers={customers}
    />
  )
}
