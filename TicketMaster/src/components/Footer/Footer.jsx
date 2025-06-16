import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-main">
        {/* Sobre */}
        <div className="footer-about">
          <a href="/" className="footer-logo">
            TicketSeller
          </a>
          <div className="footer-description">
            A plataforma líder em venda de ingressos para jogos de futebol no Brasil. Conectamos torcedores aos seus times favoritos com segurança e facilidade.
          </div>
        </div>
        {/* Links Úteis */}
        <div className="footer-links">
          <div className="footer-title">Links Úteis</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/organizadores">Organizadores</a>
            </li>
          </ul>
        </div>
        {/* Suporte */}
        <div className="footer-links">
          <div className="footer-title">Suporte</div>
          <ul>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>
        {/* Redes Sociais */}
        <div className="footer-social">
          <div className="footer-title">Redes Sociais</div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 TicketSeller. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;