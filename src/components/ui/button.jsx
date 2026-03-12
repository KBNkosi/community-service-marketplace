import { cn } from '@/lib/utils'

const buttonVariants = {
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-muted hover:text-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-muted hover:text-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  },
  sizes: {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-lg px-8',
    icon: 'h-10 w-10',
  },
}

function Button({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children,
  ...props 
}) {
  return (
    <button
      className={cn(
        buttonVariants.base,
        buttonVariants.variants[variant],
        buttonVariants.sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button, buttonVariants }
