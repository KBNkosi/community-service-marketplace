import { sampleTradespeople } from './sample-data'
 
//Keyword mappings for intent classification
const keywordMappings = {
  plumber: ['leak', 'faucet', 'drain', 'pipe', 'water', 'toilet', 'sink', 'shower'],
  electrician: ['outlet', 'breaker', 'wiring', 'light', 'switch', 'electric', 'power'],
  handyman: ['repair', 'fix', 'assembly', 'install', 'minor', 'general', 'maintenance'],
  hvac: ['ac', 'heating', 'furnace', 'thermostat', 'air', 'conditioning', 'ventilation', 'boiler', 'ductwork', 'insulation'],
  painter: ['paint', 'color', 'wall', 'room', 'exterior', 'interior', 'finish', 'stain', 'varnish'],
  landscaper: ['lawn', 'garden', 'tree', 'yard', 'landscape', 'grass', 'outdoor', 'patio', 'deck']
}
 
// Response templates for each category
const responseTemplates = {
  plumber: "I can help you find a plumber! It sounds like you have a plumbing issue that needs professional attention.",
  electrician: "Electrical work should always be handled by a licensed professional. Let me find you some electricians.",
  handyman: "A handyman would be perfect for that! I can find you reliable handymen in your area.",
  hvac: "HVAC issues require specialized technicians. Let me connect you with qualified HVAC professionals.",
  painter: "I can help you find painters who can transform your space with quality work.",
  landscaper: "Landscaping can really enhance your property. Let me find you skilled landscapers.",
  general: "I'm here to help! Could you tell me more about what kind of service you need? For example: plumbing, electrical, painting, etc."
}
 
 
// Main function to process user messages
export function processMessage(message) {
  try {
    
    const category = classifyIntent(message)
 
   
    let response = responseTemplates[category]
 
  
    let suggestions = null
    if (category !== 'general') {
      suggestions = getProviderSuggestions(category)
      if (suggestions.length > 0) {
        response += ` I found ${suggestions.length} highly-rated ${category}s in your area. Would you like to see their profiles?`
      } else {
        response = `Sorry, I don't have any ${category}s available in your area right now. Would you like me to help you find a different type of service provider?`
      }
    }
 
    
    return {
      response: response,
      suggestions: suggestions,
      category: category === 'general' ? null : category
    }
  } catch (error) {
    console.error('Chat processing error:', error)
    return {
      response: "Sorry, I'm having trouble understanding. Could you try describing what you need help with?",
      suggestions: null,
      category: null
    }
  }
}
 
 
// Function to classify user intent based on keywords
function classifyIntent(message) {
  const messageLower = message.toLowerCase()
  const scores = {}
 
  
  for (const [category, keywords] of Object.entries(keywordMappings)) {
    scores[category] = keywords.filter(keyword => 
      messageLower.includes(keyword)
    ).length
  }
 
  
  const bestCategory = Object.keys(scores).reduce((a, b) => 
    scores[a] > scores[b] ? a : b
  )
 
  
  return scores[bestCategory] > 0 ? bestCategory : 'general'
}
 
// Function to get provider suggestions from existing data
function getProviderSuggestions(category, limit = 2) {
  
  const filteredProviders = sampleTradespeople.filter(person => 
    person.category === category
  )
 
  
  return filteredProviders.slice(0, limit).map(person => ({
    id: person.id,
    name: person.name,
    category: person.category,
    specialty: person.specialties.slice(0, 2).join(', ') 
  }))
}