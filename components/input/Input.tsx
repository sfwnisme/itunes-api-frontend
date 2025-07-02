import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

function Input({ ...props }: InputProps) {
  return (
    <input type="text" placeholder="Search" className="w-full p-2 rounded-md border-1 border-slate-600 focus-visible:outline-none  focus-visible:border-blue-600" {...props} />
  )
}

export default Input 