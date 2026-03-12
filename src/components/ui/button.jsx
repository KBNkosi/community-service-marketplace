import { cn } from '../../lib/utils'

// Simple Button component for consistent styling across the app
function Button({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children,
  ...props 
}) {
  // Define base styles for all buttons
  const baseStyles = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  // Define variant styles
  const variants = {
    default: 'bg-terracotta text-white hover:bg-terracotta/90',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    ghost: 'hover:bg-gray-100 hover:text-gray-900',
  }
  
  // Define size styles
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-lg px-8',
    icon: 'h-10 w-10',
  }

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
