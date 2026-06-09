# 🏡 NeighborTrust

A community-driven marketplace for finding and trusting local service providers through real neighbor recommendations.

**Live Demo**: [NeigbhborTrust](https://community-service-marketplace.vercel.app/)  
**Repo**: [GitHub](https://github.com/KBNkosi/NeighborTrust.git)

---

## The Problem

Finding reliable local service providers is still fragmented, untrusted, and dependent on word-of-mouth or unverified listings.

Users often face:
- Fake or low-quality listings on directories
- Lack of trust in online reviews
- Difficulty comparing providers in their area
- No simple way to get "trusted local recommendations

---

## The Solution

NeighborTrust simulates a trust-based discovery system where users can:

- Find service providers in their local area
- Rely on community recommendations instead of anonymous reviews
- Explore structured provider profiles with ratings and specialties
- Use an AI-assisted chat interface to quickly discover relevant providers

The goal is to validate a **community-first service discovery experience**.

---

## 🎯 Key Features

- **Search and discover** providers by category and location
- **Community-based recommendations** and reviews
- **AI-assisted chat interface** for provider discovery
- **Structured provider profiles** with ratings and verification badges
- **Simple recommendation submission** flow

---

## 🛠️ Tech Stack

React 19 • Vite • Tailwind CSS 4 • React Router 7 • Lucide React • pnpm

---

## How It Works

1. Users browse or search for a service category
2. Providers are displayed using structured mock data
3. Users can view full provider profiles and reviews
4. Users can submit recommendations to simulate community input
5. AI chat assistant helps users find relevant providers via intent-based queries

---

## 🏗️ Architecture Overview

The project follows a modular, feature-based frontend structure:

### Features Layer
ChatBot • SearchBar • CategoryGrid • RecommendationCard • MessageBubble

### Layout Layer
Header • Footer • Layout wrapper

### UI Layer
Reusable components for inputs, buttons, cards, and badges

### Data Layer
Mock datasets simulate providers, reviews, and categories. AI chat logic uses keyword-based matching to simulate intent understanding.

---

## � Pages

- **Home** (`/`) — Featured categories and discovery entry point
- **Search** (`/search`) — Filter and browse providers
- **Provider Profile** (`/tradesperson/:id`) — Detailed view with reviews
- **Add Recommendation** (`/add-recommendation`) — Submit community feedback

---

## �📁 Project Structure

```
src/
├── components/
│   ├── features/           # Feature components
│   │   ├── CategoryGrid.jsx
│   │   ├── ChatBot.jsx
│   │   ├── ChatInput.jsx
│   │   ├── MessageBubble.jsx
│   │   ├── RecommendationCard.jsx
│   │   └── SearchBar.jsx
│   ├── layout/             # Layout wrapper components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   └── ui/                 # Reusable UI components
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       ├── select.jsx
│       └── ...
├── pages/
│   ├── Home.jsx            # Homepage with featured providers
│   ├── Search.jsx          # Provider search & filtering
│   ├── TradespersonDetail.jsx  # Individual provider profile
│   └── AddRecommendation.jsx   # Add recommendation form
├── lib/
│   ├── chat-service.js     # Chat logic & AI functionality
│   ├── sample-data.js      # Mock data for providers & categories
│   └── utils.js            # Utility functions
├── App.jsx
├── main.jsx
└── globals.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd community-service-marketplace
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

### Development

Start the development server:
```bash
pnpm dev
# or
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

Build the project:
```bash
pnpm build
# or
npm run build
```

Preview production build:
```bash
pnpm preview
# or
npm run preview
```

## 📊 Data Model

The application uses a centralized data model in `src/lib/sample-data.js`:

```javascript
{
  id: '1',
  name: 'Service Provider Name',
  profession: 'Profession Type',
  category: 'Category',      // Used for filtering & chat
  location: 'Location',
  phone: '...',
  email: '...',
  recommendationCount: 47,
  avgRating: 4.9,
  isVerified: true,
  specialties: ['Skill 1', 'Skill 2'],
  bio: 'Provider description',
  recommendations: [         // Nested reviews
    {
      id: '1',
      author: 'Name',
      date: '2024-01-15',
      text: 'Review text',
      rating: 5
    }
  ]
}
```

## 🤖 AI Chat Assistant

The chatbot uses keyword-based matching to understand user needs and recommend appropriate service providers. It operates entirely on the frontend with no backend required.

### How It Works
1. User sends a message describing their service need
2. Chat service analyzes the message for keywords
3. Intent is matched to provider categories
4. Relevant providers are recommended
5. User receives provider suggestions and can view details


## 🎨 UI Components

Reusable UI components located in `src/components/ui/`:
- `button.jsx` - Action buttons
- `card.jsx` - Content containers
- `input.jsx` - Text input fields
- `select.jsx` - Dropdown selectors
- `textarea.jsx` - Multi-line text input
- `label.jsx` - Form labels
- `badge.jsx` - Status badges

---

## 🤖 AI-Assisted Development

This project was built using AI-assisted development workflows to accelerate:

- UI component generation and iteration
- Feature prototyping and debugging
- Rapid layout experimentation
- Chat logic simulation and refinement

AI was used as a development accelerator while maintaining full control over architecture, structure, and implementation decisions.

---

## ⚠️ Project Status

Backend services (authentication, database, persistence) are not yet implemented as the focus is on frontend experience and concept validation.


## 🔧 Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build locally
pnpm lint      # Run ESLint
```




