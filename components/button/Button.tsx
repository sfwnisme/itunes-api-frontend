import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type Props = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: 'default' | 'ghost'
} & ButtonProps

export default function Button({ children, type = 'button', variant = 'ghost', ...props }: Props) {
  const variants: Record<string, string> = {
    default: " cursor-pointer bg-transparent text-slate-400 hover:text-slate-50 p-1 rounded-sm hover:bg-slate-700 transition-all duration-300",
    ghost: " cursor-pointer bg-transparent text-slate-500 hover:text-slate-50 p-1 rounded-sm transition-all duration-300",
  }
  return (
    <button type={type} className={props.className + ' ' + variants[variant]} {...props}>{children}</button>
  )
}