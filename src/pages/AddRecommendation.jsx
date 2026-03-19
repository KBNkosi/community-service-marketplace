import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Star, Loader2 } from 'lucide-react'
import { Button, Card, CardContent, Input, Label, Textarea, Select, Badge } from '../components/ui'
import { categories } from '../components/features'
import { neighborhoods } from '../lib/sample-data'
import { cn } from '../lib/utils'

const initialFormData = {
  tradespersonName: '',
  category: '',
  phone: '',
  email: '',
  neighborhood: '',
  specialties: '',
  recommendationText: '',
  rating: 0,
  relationship: '',
  projectType: '',
}

function AddRecommendation() {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.tradespersonName.trim()) {
      newErrors.tradespersonName = 'Name is required'
    }
    if (!formData.category) {
      newErrors.category = 'Please select a category'
    }
    if (!formData.neighborhood) {
      newErrors.neighborhood = 'Please select a neighborhood'
    }
    if (!formData.recommendationText.trim().length < 50) {
      newErrors.recommendationText = 'Minimum 50 characters required'
    }
    if (formData.rating === 0) {
      newErrors.rating = 'Please provide a rating'
    }
    if (!formData.relationship) {
      newErrors.relationship = 'Please describe how you found them'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }))
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-foreground mb-3">
              Thank You!
            </h1>
            <p className="text-muted-foreground mb-6">
              Your recommendation has been submitted and will help neighbors find trusted service providers.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild>
                <Link to="/search">Browse Providers</Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setFormData(initialFormData)
                  setIsSuccess(false)
                }}
              >
                Add Another Recommendation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="bg-muted border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-3">
              Recommend a Tradesperson
            </h1>
            <p className="text-muted-foreground">
              Help your neighbors find quality service by sharing your positive experience.
            </p>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tradesperson Info */}
                <div className="space-y-4">
                  <h2 className="font-semibold text-lg text-foreground border-b pb-2">
                    Tradesperson Information
                  </h2>
                  
                  <div>
                    <Label htmlFor="tradespersonName">Full Name *</Label>
                    <Input
                      id="tradespersonName"
                      placeholder="Enter their full name"
                      value={formData.tradespersonName}
                      onChange={(e) => handleChange('tradespersonName', e.target.value)}
                      className={cn(errors.tradespersonName && 'border-destructive')}
                    />
                    {errors.tradespersonName && (
                      <p className="text-sm text-destructive mt-1">{errors.tradespersonName}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Service Category *</Label>
                      <Select
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleChange('category', e.target.value)}
                        className={cn(errors.category && 'border-destructive')}
                      >
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                      </Select>
                      {errors.category && (
                        <p className="text-sm text-destructive mt-1">{errors.category}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="neighborhood">Service Area *</Label>
                      <Select
                        id="neighborhood"
                        value={formData.neighborhood}
                        onChange={(e) => handleChange('neighborhood', e.target.value)}
                        className={cn(errors.neighborhood && 'border-destructive')}
                      >
                        <option value="">Select neighborhood</option>
                        {neighborhoods.map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </Select>
                      {errors.neighborhood && (
                        <p className="text-sm text-destructive mt-1">{errors.neighborhood}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email (optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialties">Specialties (optional)</Label>
                    <Input
                      id="specialties"
                      placeholder="e.g., Kitchen remodeling, Emergency repairs"
                      value={formData.specialties}
                      onChange={(e) => handleChange('specialties', e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground mt-1">Separate multiple specialties with commas</p>
                  </div>
                </div>

                {/* Your Experience */}
                <div className="space-y-4">
                  <h2 className="font-semibold text-lg text-foreground border-b pb-2">
                    Your Experience
                  </h2>

                  <div>
                    <Label htmlFor="relationship">How did you find them? *</Label>
                    <Select
                      id="relationship"
                      value={formData.relationship}
                      onChange={(e) => handleChange('relationship', e.target.value)}
                      className={cn(errors.relationship && 'border-destructive')}
                    >
                      <option value="">Select an option</option>
                      <option value="neighbor">Neighbor recommendation</option>
                      <option value="family">Family referral</option>
                      <option value="friend">Friend referral</option>
                      <option value="repeat">Used them before</option>
                      <option value="local">Local business</option>
                      <option value="other">Other</option>
                    </Select>
                    {errors.relationship && (
                      <p className="text-sm text-destructive mt-1">{errors.relationship}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="projectType">Type of Work</Label>
                    <Input
                      id="projectType"
                      placeholder="e.g., Bathroom renovation, Electrical panel upgrade"
                      value={formData.projectType}
                      onChange={(e) => handleChange('projectType', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Your Rating *</Label>
                    <div className="flex items-center gap-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleChange('rating', star)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={cn(
                              'h-8 w-8 transition-colors',
                              star <= formData.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-muted hover:text-yellow-400'
                            )}
                          />
                        </button>
                      ))}
                      {formData.rating > 0 && (
                        <Badge variant="secondary" className="ml-2">
                          {formData.rating === 5 ? 'Excellent' : 
                           formData.rating === 4 ? 'Very Good' :
                           formData.rating === 3 ? 'Good' :
                           formData.rating === 2 ? 'Fair' : 'Poor'}
                        </Badge>
                      )}
                    </div>
                    {errors.rating && (
                      <p className="text-sm text-destructive mt-1">{errors.rating}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="recommendationText">Your Recommendation *</Label>
                    <Textarea
                      id="recommendationText"
                      placeholder="Share your experience... What work did they do? How was the quality? Would you hire them again?"
                      rows={5}
                      value={formData.recommendationText}
                      onChange={(e) => handleChange('recommendationText', e.target.value)}
                      className={cn(errors.recommendationText && 'border-destructive')}
                    />
                    {errors.recommendationText && (
                      <p className="text-sm text-destructive mt-1">{errors.recommendationText}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      Minimum 50 characters. Be specific about what made this experience positive.
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4 border-t">
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Recommendation'
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By submitting, you confirm this is a genuine recommendation based on your real experience.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AddRecommendation
