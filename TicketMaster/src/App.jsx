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
import TelaLogin from './components/Login/Login'
import Cadastro from './components/Cadastro/Cadastro'
import Organizadores from './components/Organizadores/Organizadores';
import Carrinho from './components/Carrinho/Carrinho';
import PaginaCompra from './components/PaginaCompra/PaginaCompra';
import { CarrinhoProvider } from "./context/CarrinhoContext";
import Paginacheckout from './components/PaginaCheckout/PaginaCheckout';



function App() {


  return (

    <CarrinhoProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/meusingressos" element={<MeusIngressos />} />
            <Route path="/login" element={<TelaLogin />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/organizadores" element={<Organizadores />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/paginacompra" element={<PaginaCompra />} />
            <Route path="/compra/:id" element={<PaginaCompra />} />
            <Route path="/checkout" element={<Paginacheckout />} />
          </Routes>

        </main>
        <Footer />
      </BrowserRouter>
    </CarrinhoProvider>

  )


}

export default App