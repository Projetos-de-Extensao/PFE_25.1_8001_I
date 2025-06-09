import { useState } from 'react'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Home />
      {/*<EventCardList events={games} />*/}
      <Footer />
    </main>
   
  )
}

export default App
