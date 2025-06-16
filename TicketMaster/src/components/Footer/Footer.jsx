import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      
      <div className="footer-main">
      
        <div className="footer-about">
          <a href="/" className="footer-logo">🎟️ TicketSeller</a>
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
    <li>
      <a href="/meus-ingressos">Meus Ingressos</a>
    </li>
    <li>
      <a href="/carrinho">Meu Carrinho</a>
    </li>
  </ul>
</div>


  
        <div className="footer-links">
          <div className="footer-title">Suporte</div>
          <ul>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>


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

          <div className="footer-cards-section">
  <div className="footer-title">Cartões Aceitos</div>
  <div className="footer-cards">
    <i className="fab fa-cc-visa"></i>
    <i className="fab fa-cc-mastercard"></i>
    <i className="fab fa-cc-amex"></i>
    <i className="fab fa-cc-paypal"></i>
  </div>
</div>
        </div>
      </div>

      <div className="footer-newsletter">
        <p>Receba novidades e promoções:</p>
        <form>
          <input type="email" placeholder="Seu e-mail" />
          <button type="submit">Inscrever-se</button>
        </form>
      </div>

      <div className="footer-bottom">
        © 2025 TicketSeller. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
