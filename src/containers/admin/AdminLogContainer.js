"use client"
import { AdminLogComponent } from '@/components/admin/log/AdminLogComponent'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'

export const AdminLogContainer = () => {
  const [token, setToken] = useState(getCookie('token'))

  const [logs, setLogs] = useState([])

  const getLogs = async () => {
    const res = await fetch(`${process.env.API_URL}/admin/log`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await res.json()

    console.log(data)

    if(data.logs) {
      setLogs(data.logs)

    }
  }

  useEffect(() => {
    getLogs().catch(err => console.error(err))
  }, [])

  if(logs) {
    return (
        <AdminLogComponent 
            logs={logs}
        />
      )
  }
  
}
