import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">🎟️ TicketSeller</div>
      <nav className="nav-links">
        <a href="/organizadores">Organizadores</a>
        <a href="/contato">Contato</a>
        <a href="/meus-ingressos">Ingressos</a>
        <span className="cart-icon">🛒</span>
      </nav>
    </header>
  );
}
