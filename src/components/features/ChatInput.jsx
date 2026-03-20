import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button, Input } from '../ui'

export function ChatInput({ onSend }) {
  // State to store the current input value
  const [message, setMessage] = useState('')

  // Handle form submission when user clicks send or presses Enter
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page refresh
    
    // Only send if message has content (not just whitespace)
    if (message.trim()) {
      onSend(message.trim()) // Send message to parent component
      setMessage('') // Clear input field after sending
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      {/* Text input field */}
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1"
      />
      
      {/* Send button - disabled when input is empty */}
      <Button type="submit" size="icon" disabled={!message.trim()}>
        <Send className="w-4 h-4" />
      </Button>
    </form>
  )
}