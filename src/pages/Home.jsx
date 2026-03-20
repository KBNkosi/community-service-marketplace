import { Link } from 'react-router-dom'
import { ArrowRight, Users, Shield, MessageSquare, Star } from 'lucide-react'
import { Button, Card, CardContent, Badge } from '../components/ui'
import { SearchBar, CategoryGrid, RecommendationCard } from '../components/features'
import { sampleTradespeople } from '../lib/sample-data'

// Statistics to display on the home page
const stats = [
  { label: 'Trusted Tradespeople', value: '500+' },
  { label: 'Happy Neighbors', value: '2,000+' },
  { label: 'Recommendations', value: '5,000+' },
  { label: 'Neighborhoods', value: '25+' },
]

// Key features of the platform
const features = [
  {
    icon: Users,
    title: 'Community-Driven',
    description: 'Only real neighbors can recommend. No paid listings, no fake reviews.',
  },
  {
    icon: Shield,
    title: 'Trust Verified',
    description: 'Tradespeople are validated through multiple community endorsements.',
  },
  {
    icon: MessageSquare,
    title: 'Genuine Stories',
    description: 'Read real experiences from people in your neighborhood.',
  },
]

function Home() {
  const topTradespeople = sampleTradespeople.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-cream to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              Trusted by 2,000+ neighbors
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Find Trusted Local Tradespeople
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Skip the guesswork. Discover skilled handymen, plumbers, electricians, and more—recommended by your real neighbors.
            </p>
          </div>

          <SearchBar variant="hero" className="max-w-3xl mx-auto" />

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <div className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Browse by Service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the right professional for your project
            </p>
          </div>

          <CategoryGrid />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Why NeighborTrust?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe the best recommendations come from people you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top Recommendations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                Top Recommendations
              </h2>
              <p className="text-muted-foreground">
                Highly endorsed professionals in your area
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/search">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topTradespeople.map((person) => (
              <RecommendationCard key={person.id} tradesperson={person} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/search">
                View All Recommendations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Star className="w-8 h-8 text-primary-foreground/80" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Know a Great Tradesperson?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Help your neighbors find quality service. Share your positive experiences and strengthen our community.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/add-recommendation">
              Share a Recommendation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home
