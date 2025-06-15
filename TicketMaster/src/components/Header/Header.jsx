import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useCarrinho } from "../../context/CarrinhoContext";

export default function Header() {
  const { itens } = useCarrinho();
  console.log("Itens no carrinho (Header):", itens);
  const quantidade = itens.length;

  return (
    <header className="main-header">
      <div className="logo">🎟️ TicketSeller</div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/organizadores" className="nav-link">Organizadores</Link>
        <Link to="/meusingressos" className="nav-link">Ingressos</Link>
        <Link to="/contato" className="nav-link">Contato</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/carrinho" className="cart-icon" title="Ver carrinho">
          🛒
          {quantidade > 0 && (
            <span className="cart-badge">{quantidade}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}