import { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/utils'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded text-sm font-medium transition'

  const variants = {
    default: 'bg-yellow-500 text-black hover:bg-yellow-400',
    outline: 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  )
}
