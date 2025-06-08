import Button from '../Button/button';
import './index.css';

const links = [
    {
        name: 'Home',
        href: '#home'
    },
    {
        name: 'Sobre',
        href: '#sobre'
    },
    {
        name: 'Contato',
        href: '#contato'
    }
]

export default function Header() {
    return (
        <header className='header-default'>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src={'vite.svg'} />
            <h3>TicketSeller</h3>
            </div>
            <div className='header--wrapper' style={{display: 'flex', gap: '10px'}}>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href='#entrar'>Entrar</a>
            </div>
        </header>
    )
}