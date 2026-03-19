import { Search } from 'lucide-react'
import { Button, Input } from '../ui'

// Step 1: SearchBar with hero variant support
function SearchBar({ onSearch, placeholder = "Search...", className, variant = 'default' }) {
  if (variant === 'hero') {
    return (
      <form onSubmit={(e) => e.preventDefault()} className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-3 p-3 bg-card rounded-2xl shadow-lg border">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={placeholder}
              onChange={(e) => onSearch(e.target.value)}
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

  // Default variant (simplified version)
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="pl-10"
      />
    </div>
  )
}

export { SearchBar }
