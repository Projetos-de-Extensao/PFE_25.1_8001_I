import { useState } from 'react'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css'
import Header from './components/Header/Header'
import games from './data/games.json';
import EventCardList from './components/EventCardList/EventCardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Home />
      <Footer />
    </main>
   
  )
}

export default App
