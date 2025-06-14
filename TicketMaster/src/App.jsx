import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css'
import Header from './components/Header/Header'
import Contato from './components/Contato/Contato'
import MeusIngressos from './components/MeusIngressos/MeusIngressos'
import games from './data/games.json'
import EventCardList from './components/EventCardList/EventCardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/meusingressos" element={<MeusIngressos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App