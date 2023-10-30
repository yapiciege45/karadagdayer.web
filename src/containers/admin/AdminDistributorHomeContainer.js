"use client"
import { AdminDistributorPageComponent } from '@/components/admin/distributor/AdminDistributorPageComponent'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const AdminDistributorHomeContainer = () => {
  const [token, setToken] = useState(getCookie('token'))

  const [distributors, setDistributors] = useState([])

  const getDistributors = async () => {
    const res = await fetch(`${process.env.API_URL}/distributor`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await res.json()


    if(data.distributors) {
      setDistributors(data.distributors)
    }
  }

  useEffect(() => {
    getDistributors().catch(err => console.error(err))
  }, [])

  const addNewDistributor = async () => {
    const res = await fetch(`${process.env.API_URL}/distributor/create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": "Example Dist.",
        "location": "Budva",
      })
    })

    const data = await res.json()

    if(data.status == 200) {
      toast.success(data.message)

      getDistributors().catch(err => console.error(err))
    } else {
      console.log(data)
    }
  }

  if(distributors) {
    return (
            <AdminDistributorPageComponent 
              addNewDistributor={addNewDistributor}
              distributors={distributors}
              token={token}
              getDistributors={getDistributors}
            />
      )
  }
  
}
