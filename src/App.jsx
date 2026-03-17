// Main App component - handles routing for the entire application
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import Home from './pages/Home'
import Search from './pages/Search'
import TradespersonDetail from './pages/TradespersonDetail'
import AddRecommendation from './pages/AddRecommendation'

function App() {
  return (
    // BrowserRouter enables client-side routing
    <BrowserRouter>
      <Layout>
        {/* Routes define which component to show for each URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tradesperson/:id" element={<TradespersonDetail />} />
          <Route path="/add-recommendation" element={<AddRecommendation />} />
        </Routes>
      </Layout>
      
    </BrowserRouter>
  )
}

export default App
