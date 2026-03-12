import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, X, SlidersHorizontal } from 'lucide-react'
import { Button, Card, CardContent, Badge, Input, Label } from '@/components/ui'
import { SearchBar, RecommendationCard, categories } from '@/components/features'
import { sampleTradespeople, neighborhoods } from '@/lib/sample-data'
import { cn } from '@/lib/utils'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const query = searchParams.get('q') || ''
  const selectedCategory = searchParams.get('category') || ''
  const selectedLocation = searchParams.get('location') || ''

  const filteredTradespeople = useMemo(() => {
    return sampleTradespeople.filter((person) => {
      const matchesQuery = !query || 
        person.name.toLowerCase().includes(query.toLowerCase()) ||
        person.profession.toLowerCase().includes(query.toLowerCase()) ||
        person.specialties.some(s => s.toLowerCase().includes(query.toLowerCase()))
      
      const matchesCategory = !selectedCategory || person.category === selectedCategory
      const matchesLocation = !selectedLocation || person.location === selectedLocation

      return matchesQuery && matchesCategory && matchesLocation
    })
  }, [query, selectedCategory, selectedLocation])

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    setSearchParams(newParams)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const hasActiveFilters = query || selectedCategory || selectedLocation

  const FilterPanel = ({ className }) => (
    <div className={cn('space-y-6', className)}>
      {/* Search Input */}
      <div>
        <Label className="text-sm font-medium mb-2 block">Search</Label>
        <Input
          type="text"
          placeholder="Name or specialty..."
          value={query}
          onChange={(e) => updateFilter('q', e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Category</Label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => updateFilter('category', selectedCategory === cat.id ? '' : cat.id)}
            >
              {cat.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Neighborhood</Label>
        <div className="flex flex-wrap gap-2">
          {neighborhoods.map((location) => (
            <Badge
              key={location}
              variant={selectedLocation === location ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => updateFilter('location', selectedLocation === location ? '' : location)}
            >
              {location}
            </Badge>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="ghost" className="w-full" onClick={clearFilters}>
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted border-b py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-6">
            Find Service Providers
          </h1>
          <SearchBar className="max-w-2xl" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-6 flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </h2>
                <FilterPanel />
              </CardContent>
            </Card>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">{filteredTradespeople.length}</span> service providers found
              </p>
              <Button 
                variant="outline" 
                className="lg:hidden"
                onClick={() => setShowMobileFilters(true)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {query && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {query}
                    <X 
                      className="h-3 w-3 cursor-pointer" 
                      onClick={() => updateFilter('q', '')}
                    />
                  </Badge>
                )}
                {selectedCategory && (
                  <Badge variant="secondary" className="gap-1">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <X 
                      className="h-3 w-3 cursor-pointer" 
                      onClick={() => updateFilter('category', '')}
                    />
                  </Badge>
                )}
                {selectedLocation && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedLocation}
                    <X 
                      className="h-3 w-3 cursor-pointer" 
                      onClick={() => updateFilter('location', '')}
                    />
                  </Badge>
                )}
              </div>
            )}

            {/* Results Grid */}
            {filteredTradespeople.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredTradespeople.map((person) => (
                  <RecommendationCard key={person.id} tradesperson={person} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-16 text-center">
                  <p className="text-muted-foreground mb-4">
                    No service providers found matching your criteria.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setShowMobileFilters(false)} 
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-card p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-lg">Filters</h2>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowMobileFilters(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <FilterPanel />
            <Button 
              className="w-full mt-6"
              onClick={() => setShowMobileFilters(false)}
            >
              Show Results
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
