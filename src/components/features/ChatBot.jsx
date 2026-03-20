import { useState } from 'react'
import { MessageCircle, X, Bot } from 'lucide-react'
import { Button } from '../ui'
import { ChatInput } from './ChatInput'
import { MessageBubble } from './MessageBubble'
import { processMessage } from '../../lib/chat-service'

export function ChatBot() {
  // State to control if chat window is open or closed
  const [isOpen, setIsOpen] = useState(false)
  
  // State to store all chat messages
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'bot',
      content: 'Hi! I\'m here to help you find local service providers. What do you need help with today?',
      timestamp: new Date()
    }
  ])

  // Message handler using real chat service
  const handleSendMessage = (message) => {
    console.log('Processing message:', message) // Debug log
    
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    
    // Process message with chat service
    const botResponse = processMessage(message)
    console.log('Bot response:', botResponse) // Debug log
    
    // Add bot message
    const botMessage = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: botResponse.response,
      suggestions: botResponse.suggestions,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, botMessage])
  }
     
  // If chat is closed, show the floating chat button
  if(!isOpen){
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg z-50 hover:cursor-pointer"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    )
  }

  // If chat is open, show the chat interface
  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl border z-50 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Service Assistant</h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Chat Messages Area - Now using MessageBubble component */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      {/* Chat Input Area - Now using ChatInput component */}
      <div className="p-4 border-t">
        <ChatInput onSend={handleSendMessage} />
      </div>
      
    </div>
  )
}