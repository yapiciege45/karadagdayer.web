import React, { forwardRef } from 'react'

export const HiddenInputComponent = forwardRef(({ onChange, value = '', type = 'text' }, ref) => {
  return (
    <input ref={ref} type={type} className='text-sm md:text-lg w-auto focus-visible:outline-none' onChange={(e) => onChange(e.target.value)} value={value} />
  )
})
