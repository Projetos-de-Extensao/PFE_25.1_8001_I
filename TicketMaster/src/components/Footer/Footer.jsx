import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__logo-section">
                <img
                    src="/assets/logo-footer.svg"
                    alt="Logo da TicketSeller"
                    className="footer__logo"
                />
                <p className="footer__description">
                    TicketSeller é a sua plataforma de venda de ingressos para eventos esportivos. Conectamos torcedores e organizadores para uma experiência inesquecível.
                </p>
                <address className="footer__contact">
                    <img
                        src="/assets/email.svg"
                        alt="Ícone de e-mail"
                        className="footer__contact-icon"
                    />
                    <a href="mailto:contato@ticketseller.com">
                        contato@ticketseller.com
                    </a>
                </address>
            </div>
            <nav className="footer__nav" aria-label="Navegação do rodapé">
                <ul>
                    <li><a href="/eventos">Eventos</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </nav>
            <div className="footer__social" aria-label="Redes sociais">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook TicketSeller">
                    <img src="/assets/facebook.svg" alt="Acesse nosso Facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram TicketSeller">
                    <img src="/assets/instagram.svg" alt="Acesse nosso Instagram" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter TicketSeller">
                    <img src="/assets/twitter.svg" alt="Acesse nosso Twitter" />
                </a>
            </div>
        </div>
        <div className="footer__bottom">
            <span>© {new Date().getFullYear()} TicketSeller. Todos os direitos reservados.</span>
        </div>
    </footer>
);

export default Footer;