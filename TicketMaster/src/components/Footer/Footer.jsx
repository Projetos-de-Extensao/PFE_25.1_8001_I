// Importa o React para criar componentes
import React from "react";
// Importa o arquivo de estilos CSS específico do Footer
import "./Footer.css";

// Componente funcional Footer
const Footer = () => (
    // Elemento <footer> semântico para o rodapé da página
    <footer className="footer">
        {/* Container principal do rodapé */}
        <div className="footer__container">
            {/* Seção do logo e descrição */}
            <div className="footer__logo-section">
                {/* Logo da empresa */}
                <img
                    src="/assets/logo-footer.svg"
                    alt="TicketMaster Logo"
                    className="footer__logo"
                />
                {/* Descrição curta da plataforma */}
                <p className="footer__description">
                    Sua plataforma para eventos, ingressos e experiências inesquecíveis.
                </p>
            </div>
            {/* Navegação do rodapé */}
            <nav className="footer__nav">
                <ul>
                    {/* Links de navegação para páginas principais */}
                    <li><a href="/eventos">Eventos</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </nav>
            {/* Seção de redes sociais */}
            <div className="footer__social">
                {/* Link para Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/facebook.svg" alt="Facebook" />
                </a>
                {/* Link para Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/instagram.svg" alt="Instagram" />
                </a>
                {/* Link para Twitter */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/twitter.svg" alt="Twitter" />
                </a>
            </div>
        </div>
        {/* Linha inferior do rodapé com direitos autorais dinâmicos */}
        <div className="footer__bottom">
            <span>© {new Date().getFullYear()} TicketMaster. Todos os direitos reservados.</span>
        </div>
    </footer>
);

// Exporta o componente para uso em outros arquivos
export default Footer;
