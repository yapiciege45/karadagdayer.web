import React from 'react'

export const ButtonComponent = ({ onClick, buttonText, className = '', type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className={`w-full p-3 flex justify-center text-white bg-blue-500 items-center rounded-2xl font-bold ${className}`}>
      {buttonText}
    </button>
  )
}
