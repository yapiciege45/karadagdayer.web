"use client"
import { EmployeeHomePageComponent } from '@/components/employee/home/EmployeeHomePageComponent'
import { ModeratorHomePageComponent } from '@/components/moderator/home/ModeratorHomePageComponent'
import { getCookie } from 'cookies-next'
import React, { useEffect, useState } from 'react'

export const EmployeeHomeContainer = () => {
  const [user, setUser] = useState(null)
  const [type, setType] = useState(null)
  const [token, setToken] = useState(getCookie('token'))

  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [phoneCode, setPhoneCode] = useState()
  const [phone, setPhone] = useState()
  const [img, setImg] = useState()

  useEffect(() => {
    const newUser = getCookie('user')

    const realUser = JSON.parse(newUser).user

    setUser(realUser)
    setType(JSON.parse(newUser).type)

    setName(realUser.name)
    setSurname(realUser.surname)
    setEmail(realUser.email)
    setPhoneCode(realUser.phone_code)
    setPhone(realUser.phone)
    setImg(realUser.img)
  }, [])

  const saveChanges = async() => {
    const res = await fetch(`${process.env.API_URL}/employee/update-me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        phoneCode,
        phone
      })
    })

    const data = await res.json()
  }
  

  if(user) {
    return (
          <EmployeeHomePageComponent 
            user={user}
            type={type}
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            phoneCode={phoneCode}
            setPhoneCode={setPhoneCode}
            setImg={setImg}
            img={img}
            save={saveChanges}
          />
    )
  }
}
