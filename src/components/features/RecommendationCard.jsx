import { Link } from 'react-router-dom'
import { MapPin, Star, Users, Phone, CheckCircle } from 'lucide-react'
import { Card, CardContent, Badge, Button } from '@/components/ui'
import { cn } from '@/lib/utils'

function RecommendationCard({ tradesperson, className }) {
  const {
    id,
    name,
    profession,
    location,
    recommendationCount,
    avgRating,
    isVerified,
    specialties,
    phone,
  } = tradesperson

  return (
    <Card className={cn('overflow-hidden hover:shadow-lg transition-shadow', className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <Link 
                to={`/tradesperson/${id}`}
                className="font-serif text-lg font-bold text-foreground hover:text-primary transition-colors truncate"
              >
                {name}
              </Link>
              {isVerified && (
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
              )}
            </div>
            
            {/* Profession */}
            <p className="text-sm text-muted-foreground mb-3">{profession}</p>
            
            {/* Location */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{recommendationCount} recommendations</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{avgRating.toFixed(1)}</span>
              </div>
            </div>

            {/* Specialties */}
            {specialties && specialties.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {specialties.slice(0, 3).map((specialty) => (
                  <Badge key={specialty} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {specialties.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{specialties.length - 3} more
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/tradesperson/${id}`}>
              View Profile
            </Link>
          </Button>
          {phone && (
            <Button asChild className="flex-1">
              <a href={`tel:${phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                Call
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export { RecommendationCard }
