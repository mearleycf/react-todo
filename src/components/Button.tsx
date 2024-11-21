import { ButtonHTMLAttributes } from 'react'
import './Button.css'

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonVariant = 'primary' | 'secondary' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize
  variant?: ButtonVariant
  label?: string
  disabled?: boolean
}

const sizeClasses: Record<ButtonSize, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-neon-blue hover:bg-neon-electricBlue text-neon-white border-neon-munsellBlue',
  secondary: 'bg-neon-purple hover:bg-neon-darkOrchid text-neon-white border-neon-mediumOrchid',
  danger: 'bg-neon-redOxide hover:bg-neon-scarlet text-neon-white border-neon-bittersweet',
}

const baseClasses = 'font-semibold rounded-lg shadow-md transition-colors duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2'
const disabledClasses = 'opacity-50 cursor-not-allowed'

export default function Button({
  size = 'medium',
  variant = 'primary',
  label,
  disabled = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabled ? disabledClasses : '',
    className,
  ].join(' ')

  return (
    <button disabled={disabled} className={classes} {...props}>
      {children || label}
    </button>
  )
}
