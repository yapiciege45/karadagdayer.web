"use client"
import { LoginComponent } from '@/components/login/LoginComponent'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const LoginContainer = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formSubmit = async () => {
      const res = await fetch(`${process.env.API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
      })

      const data = await res.json()

      if(data.status == 403) {
          toast.error('Login informations are not true!')
          return
      }

      toast.success('Login is successfull.')

      setCookie('token', data.token)

      router.push(`/${data.type}`)
    }  

  return (
    <LoginComponent
      router={router}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      formSubmit={formSubmit}
    />
  )
}
