import { useState } from 'react'
import Home from './projeto/Home/home'
import './App.css'
import Footer from './projeto/Footer/footer'
import Header from './projeto/Header/header'
import Button from './projeto/Button/button'
import EventCardList from './projeto/EventCardList'
import {games} from './data/games.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Home />
      <EventCardList events={games} />
      <Footer />
    </main>
   
  )
}

export default App
