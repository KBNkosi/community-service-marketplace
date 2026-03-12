import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, MapPin } from 'lucide-react'
import { Button, Input } from '../ui'
import { cn } from '../../lib/utils'

function SearchBar({ variant = 'default', className }) {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (location) params.set('location', location)
    navigate(`/search?${params.toString()}`)
  }

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className={cn('w-full', className)}>
        <div className="flex flex-col md:flex-row gap-3 p-3 bg-card rounded-2xl shadow-lg border">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="What service do you need?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 h-12 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
            />
          </div>
          <div className="flex-1 relative border-t md:border-t-0 md:border-l pt-3 md:pt-0 md:pl-3">
            <MapPin className="absolute left-4 md:left-7 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Your neighborhood"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-12 h-12 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
            />
          </div>
          <Button type="submit" size="lg" className="h-12 px-8">
            <Search className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Search</span>
          </Button>
        </div>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex gap-2', className)}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      <Button type="submit">
        Search
      </Button>
    </form>
  )
}

export { SearchBar }
