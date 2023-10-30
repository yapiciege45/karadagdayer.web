import React from 'react'

export const InputComponent = ({ onChange, value, labelText, placeholderText, isRequired = false, inputType = 'text', className = '', max = '' }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {
        labelText && <label className='text-xs font-light ml-3'>{labelText}{isRequired && <em className='text-red-500'>*</em>}</label>
      }
      <input onChange={(e) => onChange(e.target.value)} value={value} type={inputType} max={max} className='placeholder:text-xs text-xs placeholder:font-light border border-gray-400 p-2 px-4 rounded-xl focus-visible:outline-none focus-visible:border-gray-600 focus-visible:drop-shadow-md' placeholder={placeholderText} />
    </div>
  )
}
