import { cn } from '@/lib/utils'

const badgeVariants = {
  base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  variants: {
    default: 'border-transparent bg-primary text-primary-foreground',
    secondary: 'border-transparent bg-secondary text-secondary-foreground',
    destructive: 'border-transparent bg-destructive text-destructive-foreground',
    outline: 'text-foreground',
  },
}

function Badge({ className, variant = 'default', ...props }) {
  return (
    <div
      className={cn(
        badgeVariants.base,
        badgeVariants.variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
