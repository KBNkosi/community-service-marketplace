import { useParams, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle, 
  Star, 
  Users, 
  Calendar,
  MessageSquare 
} from 'lucide-react'
import { Button, Card, CardContent, Badge } from '@/components/ui'
import { sampleTradespeople } from '@/lib/sample-data'

function TradespersonDetail() {
  const { id } = useParams()
  const tradesperson = sampleTradespeople.find(p => p.id === id)

  if (!tradesperson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="py-16 text-center">
            <h1 className="font-serif text-2xl font-bold text-foreground mb-4">
              Tradesperson Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The profile you are looking for does not exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/search">Browse All Providers</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const {
    name,
    profession,
    location,
    phone,
    email,
    recommendationCount,
    avgRating,
    isVerified,
    specialties,
    bio,
    recommendations,
  } = tradesperson

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="bg-muted border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/search" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Avatar Placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-primary">
                      {name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                        {name}
                      </h1>
                      {isVerified && (
                        <CheckCircle className="h-6 w-6 text-secondary" />
                      )}
                    </div>

                    <p className="text-lg text-muted-foreground mb-3">{profession}</p>

                    <div className="flex items-center gap-1 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{location}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="font-medium">{recommendationCount}</span>
                        <span className="text-sm text-muted-foreground">recommendations</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-lg">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{avgRating.toFixed(1)}</span>
                        <span className="text-sm text-muted-foreground">average</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">{bio}</p>

                {/* Specialties */}
                {specialties && specialties.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-foreground mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h2 className="font-serif text-xl font-bold text-foreground">
                    Community Recommendations
                  </h2>
                </div>

                <div className="space-y-6">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <span className="text-sm font-medium">{rec.author.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{rec.author}</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {new Date(rec.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < rec.rating
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{rec.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">Contact</h3>
                
                <div className="space-y-4 mb-6">
                  {phone && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <a href={`tel:${phone}`} className="font-medium text-foreground hover:text-primary">
                          {phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {email && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <a href={`mailto:${email}`} className="font-medium text-foreground hover:text-primary break-all">
                          {email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {phone && (
                    <Button asChild className="w-full">
                      <a href={`tel:${phone}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  )}
                  {email && (
                    <Button asChild variant="outline" className="w-full">
                      <a href={`mailto:${email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Verification Badge */}
            {isVerified && (
              <Card className="bg-secondary/10 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Community Verified</h4>
                      <p className="text-sm text-muted-foreground">
                        This tradesperson has been recommended by multiple verified community members.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradespersonDetail
