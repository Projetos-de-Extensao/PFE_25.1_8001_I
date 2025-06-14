import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">🎟️ TicketSeller</div>
      <nav className="nav-links">
        <a href="/organizadores">Organizadores</a>
        <a href="/meusingressos">Ingressos</a>
        <a href="/contato">Contato</a>
        <span className="cart-icon">🛒</span>
      </nav>
    </header>
  );
}
