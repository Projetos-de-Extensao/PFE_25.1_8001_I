import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>TicketMaster</h2>
                    <p>Seu portal para os melhores eventos e experiências.</p>
                </div>
                <div className="footer-section links">
                    <h3>Links Úteis</h3>
                    <ul>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li><a href="/eventos">Eventos</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Redes Sociais</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} TicketMaster. Todos os direitos reservados.
            </div>
        </footer>
        );
}