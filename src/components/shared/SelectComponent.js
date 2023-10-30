import React from 'react'

export const SelectComponent = ({ onChange, options, value, labelText, placeholderText, isRequired = false, className = '' }) => {

    return (
        <div className={`flex flex-col w-full ${className}`}>
          <label className='text-xs font-light ml-3'>{labelText}{isRequired && <em className='text-red-500'>*</em>}</label>
          <select onChange={(e) => onChange(e.target.value)} value={value} className='placeholder:text-xs text-xs placeholder:font-light border border-gray-400 p-2 px-4 rounded-xl focus-visible:outline-none focus-visible:border-gray-600 focus-visible:drop-shadow-md' placeholder={placeholderText}>
            {
                options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))
            }
          </select>
        </div>
      )
}
