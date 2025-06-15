import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">🎟️ TicketSeller</div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/organizadores" className="nav-link">Organizadores</Link>
        <Link to="/meusingressos" className="nav-link">Ingressos</Link>
        <Link to="/contato" className="nav-link">Contato</Link>
        <Link to="/login" className="nav-link">Login</Link> {/* <-- Adicione esta linha */}
        <span className="cart-icon">🛒</span>
      </nav>
    </header>
  );
}
