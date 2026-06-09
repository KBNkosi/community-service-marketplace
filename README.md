# NeighborTrust - Community Service Marketplace

A community-driven platform where homeowners discover and verify local tradespeople through real neighbor recommendations. Find plumbers, electricians, handymen, and other service providers backed by genuine community feedback.

## 🎯 Features

- **Provider Discovery**: Browse and search verified local service providers by category and location
- **Community Recommendations**: Read authentic reviews and recommendations from neighbors
- **AI Chat Assistant**: Interactive chatbot to help you find the right provider based on your needs
- **Provider Profiles**: View detailed profiles with ratings, specialties, and verified badges
- **Recommendation System**: Share your own experience with local tradespeople
- **Smart Filtering**: Filter providers by category, location, and rating

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📁 Project Structure

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


## 📖 Pages

- **Home** (`/`) - Featured providers and service categories
- **Search** (`/search`) - Search and filter providers by category and location
- **Provider Detail** (`/tradesperson/:id`) - Full profile view with recommendations
- **Add Recommendation** (`/add-recommendation`) - Submit a new recommendation

## 🎨 UI Components

Reusable UI components located in `src/components/ui/`:
- `button.jsx` - Action buttons
- `card.jsx` - Content containers
- `input.jsx` - Text input fields
- `select.jsx` - Dropdown selectors
- `textarea.jsx` - Multi-line text input
- `label.jsx` - Form labels
- `badge.jsx` - Status badges



## 🔧 Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build locally
pnpm lint      # Run ESLint
```




