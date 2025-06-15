import React from 'react';
import { Link } from 'react-router-dom';
// AQUI ESTAMOS IMPORTANDO OS ÍCONES DA BIBLIOTECA QUE VOCÊ INSTALOU
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Coluna 1: Sobre (com logo em texto) */}
          <div className="footer-column footer-about">
            <Link to="/" className="footer-logo">
              <span>TicketSeller</span>
            </Link>
            <p className="footer-description">
              A plataforma líder em venda de ingressos para jogos de futebol no Brasil. Conectamos torcedores aos seus times favoritos com segurança e facilidade.
            </p>
          </div>

          {/* Coluna 2: Links Úteis */}
          <div className="footer-column footer-links">
            <h4 className="footer-title">Links Úteis</h4>
            <ul>
              <li><Link to="/faq">Perguntas Frequentes</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Suporte */}
          <div className="footer-column footer-links">
            <h4 className="footer-title">Suporte</h4>
            <ul>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
          
          {/* Coluna 4: Redes Sociais (COM OS ÍCONES) */}
          <div className="footer-column footer-social">
            <h4 className="footer-title">Redes Sociais</h4>
            <div className="social-icons">
              {/* CADA ÍCONE É UM COMPONENTE CHAMADO AQUI */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TicketSeller. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;