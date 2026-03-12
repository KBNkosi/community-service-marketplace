import { cn } from '../../lib/utils'

// Simple Badge component for displaying status or category labels
function Badge({ className, variant = 'default', ...props }) {
  // Define base styles for all badges
  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
  
  // Define variant styles
  const variants = {
    default: 'border-transparent bg-terracotta text-white',
    secondary: 'border-transparent bg-gray-100 text-gray-800',
    success: 'border-transparent bg-green-100 text-green-800',
    outline: 'text-gray-800 border-gray-300',
  }

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
