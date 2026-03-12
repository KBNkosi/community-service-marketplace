import { Link } from 'react-router-dom'
import { 
  Wrench, 
  Droplets, 
  Zap, 
  Hammer, 
  PaintBucket, 
  Thermometer, 
  TreeDeciduous, 
  Shield 
} from 'lucide-react'
import { cn } from '../../lib/utils'

const categories = [
  { id: 'handyman', name: 'Handyman', icon: Wrench, color: 'bg-terracotta/10 text-terracotta' },
  { id: 'plumber', name: 'Plumber', icon: Droplets, color: 'bg-blue-500/10 text-blue-600' },
  { id: 'electrician', name: 'Electrician', icon: Zap, color: 'bg-yellow-500/10 text-yellow-600' },
  { id: 'builder', name: 'Builder', icon: Hammer, color: 'bg-orange-500/10 text-orange-600' },
  { id: 'painter', name: 'Painter', icon: PaintBucket, color: 'bg-purple-500/10 text-purple-600' },
  { id: 'hvac', name: 'HVAC', icon: Thermometer, color: 'bg-cyan-500/10 text-cyan-600' },
  { id: 'landscaper', name: 'Landscaper', icon: TreeDeciduous, color: 'bg-sage/10 text-sage' },
  { id: 'security', name: 'Security', icon: Shield, color: 'bg-slate-500/10 text-slate-600' },
]

function CategoryGrid({ className }) {
  return (
    <div className={cn('grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4', className)}>
      {categories.map((category) => {
        const Icon = category.icon
        return (
          <Link
            key={category.id}
            to={`/search?category=${category.id}`}
            className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-card border hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110',
              category.color
            )}>
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-foreground text-center">
              {category.name}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export { CategoryGrid, categories }
