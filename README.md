# 🤝 NeighborTrust

A community-driven platform that helps people discover trusted local service providers through recommendations from people in their community.

NeighborTrust reimagines local service discovery by prioritizing trust, referrals, and community recommendations over anonymous reviews and directory listings.

**Live Demo**: [NeigbhborTrust](https://community-service-marketplace.vercel.app/)  
**Repo**: [GitHub](https://github.com/KBNkosi/NeighborTrust.git)
---

## ❓ The Problem

Finding reliable local service providers remains a challenge.

People often rely on:
* Informal word-of-mouth recommendations
* Social media groups
* Generic business directories
* Online reviews from unknown sources

These approaches can make it difficult to determine which providers are genuinely trusted within a local community.

---

## 💡 The Solution

NeighborTrust creates a community-first approach to service discovery.

Instead of relying solely on anonymous ratings, users can explore providers that have been recommended by people in their local area.

The platform combines provider profiles, community recommendations, and conversational search experiences to make it easier to find trustworthy professionals.

Examples include:
* 🪠 Plumbers
* ⚡ Electricians
* 👨‍🏭 Welders
* 🛠️ Handymen
* 🏡 Garden Services
* 🧹 Home Maintenance Professionals

---

## 🌟 Key Features

### 🔍 Provider Discovery
Browse and discover local service providers by category and location.

### 💬 Community Recommendations
View recommendations submitted by community members to help establish trust and credibility.

### 📋 Provider Profiles
Explore structured provider profiles including:
* Specialties
* Ratings
* Contact Information
* Verification Status

### 🤖 AI-Assisted Discovery
Use a conversational assistant to describe a service need and receive relevant provider recommendations.

### 📥 Recommendation Submission
Allow community members to contribute new recommendations and strengthen the local trust network.

---

## 🔄 How It Works

```text
User Needs A Service
        │
        ▼
Search or Chat Assistant
        │
        ▼
Provider Matching
        │
        ▼
Provider Profiles
        │
        ▼
Community Recommendations
        │
        ▼
Contact Service Provider
```

The platform focuses on reducing the friction involved in finding trustworthy local professionals.

---

## 🛠️ Technology Stack

### 🎨 Frontend
* React
* Vite
* Tailwind CSS

### 🛣️ Routing
* React Router

### 📐 UI Components
* Lucide React

### 📦 Package Management
* pnpm

---

## 🏗️ Product Architecture

The application follows a modular architecture focused on maintainability and feature isolation.

### 🧩 Feature Layer
Contains business-facing functionality such as:
* Search
* Recommendations
* Provider Discovery
* Chat Assistant

### 🖼️ Layout Layer
Responsible for page structure and navigation.

### 🎨 UI Layer
Reusable interface components used throughout the application.

### 🗄️ Data Layer
Manages provider, recommendation, and category datasets used by the platform.

---

## 🗺️ Core User Journeys

### 🔍 Finding a Provider
1. Select a category or search for a service.
2. Browse recommended providers.
3. Review provider information and recommendations.
4. Contact the provider.

### 🤖 AI-Assisted Search
1. Describe a service need.
2. The assistant identifies relevant categories.
3. Matching providers are recommended.
4. Users explore detailed provider profiles.

### ✍️ Community Contribution
1. Submit a recommendation.
2. Associate it with a provider.
3. Strengthen community trust signals.

---

## 📂 Project Structure

```text
src/
├── components/
├── pages/
├── lib/
├── App.jsx
├── main.jsx
└── globals.css
```

The codebase is organized around reusable features, layouts, and UI components to support future expansion.

---

## 📈 Current Status

### 📊 Current Scope
The project currently focuses on validating the user experience and trust-based service discovery workflow.

#### ✅ Implemented:
* Provider discovery
* Search and filtering
* Community recommendations
* AI-assisted provider matching
* Provider profiles

#### 🔮 Planned Future Enhancements:
* User authentication
* Persistent database storage
* Provider onboarding
* Recommendation moderation
* Verification workflows
* Messaging functionality
* Backend APIs

---

## 🏁 Getting Started

### 📋 Prerequisites
* Node.js 16+
* pnpm (recommended) or npm

### 💻 Installation

Clone the repository:
```bash
git clone <repository-url>
cd neighbortrust
```

Install dependencies:
```bash
pnpm install
```
*or if using npm:*
```bash
npm install
```

Start the development server:
```bash
pnpm dev
```
*or if using npm:*
```bash
npm run dev
```

The application will be available at:
```text
http://localhost:5173
```

---

## 🚀 Build for Production

```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

---

## 🎯 Future Direction

NeighborTrust is being explored as a trust-based local marketplace where communities can discover, recommend, and connect with service providers through verified social proof and local reputation signals.

The long-term vision is to create a stronger alternative to anonymous review platforms by emphasizing community trust and recommendation-driven discovery.

---

## 📄 License

MIT License
