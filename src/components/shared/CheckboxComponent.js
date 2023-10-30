import React from 'react'

export const CheckboxComponent = ({ onChange, onClick, value, labelText, id, isRequired = false, className = '' }) => {
  return (
    <div className={`flex flex-col w-full items-start ${className}`}>
      <label className='text-xs font-light ml-3'>{labelText}{isRequired && <em className='text-red-500'>*</em>}</label>
      <input onClick={() => onChange(!value)} type='checkbox' checked={value} className='ml-3 placeholder:text-xs text-xs placeholder:font-light border border-gray-400 p-2 px-4 rounded-xl focus-visible:outline-none focus-visible:border-gray-600 focus-visible:drop-shadow-md' />
    </div>
  )
}
