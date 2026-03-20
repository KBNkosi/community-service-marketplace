import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout'
import { ChatBot } from './components/features/ChatBot'
import Home from './pages/Home'
import Search from './pages/Search'
import TradespersonDetail from './pages/TradespersonDetail'
import AddRecommendation from './pages/AddRecommendation'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />    
          <Route path="/tradesperson/:id" element={<TradespersonDetail />} />
          <Route path="/add-recommendation" element={<AddRecommendation />} />
          
        </Routes>
      </Layout>
      <ChatBot />
    </BrowserRouter>
  )
}

export default App
