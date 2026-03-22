import { User, Bot } from 'lucide-react'
import { Card, CardContent, Badge } from '../ui'
import { Link } from 'react-router-dom'


export function MessageBubble({ message }) {
  
  const isUser = message.type === 'user'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start gap-2 max-w-[80%] ${isUser ? 'flex-row-reverse' : ''}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
        }`}>
          {isUser ? (
            <User className="w-4 h-4" />
          ) : (
            <Bot className="w-4 h-4" />
          )}
        </div>
        
        {/* Message Content */}
        <Card className={isUser ? 'bg-primary text-primary-foreground' : ''}>
          <CardContent className="p-3">
            <p className="text-sm">{message.content}</p>
            
            {/* Show suggestions if they exist (for bot messages) */}
            {message.suggestions && message.suggestions.length > 0 && (
              <div className="mt-3 space-y-2">
                {message.suggestions.map((suggestion) => (
                  <div key={suggestion.id} className="p-2 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{suggestion.name}</p>
                        <p className="text-xs text-muted-foreground">{suggestion.specialty}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {suggestion.category}
                      </Badge>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <Link 
                        to={`/tradesperson/${suggestion.id}`}
                        className="text-xs text-primary hover:underline"
                      >
                        View Profile
                      </Link>
                      <Link 
                        to={`/search?category=${suggestion.category}`}
                        className="text-xs text-primary hover:underline"
                      >
                        View all {suggestion.category}s
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}