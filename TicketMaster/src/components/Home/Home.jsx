import React, { useState } from 'react';
import './home.css';
import EventCardList from '../EventCardList/EventCardList';
import games from '../../data/games.json';

export default function Home() {
    const [search, setSearch] = useState('');
    const [date, setDate] = useState('');
    const [team, setTeam] = useState('');
    const [category, setCategory] = useState('Todas');

    const categories = [
        'Todas',
        'Brasileirão',
        'Libertadores',
        'Copa do Brasil',
        'Amistoso',
        'Sul-Americana',
        'Recopa',
        'Supercopa',
        'Estaduais',
        'Internacional',
        'Feminino',
        'Sub-20',
        'Sub-17'
    ];

    // Filtro centralizado usando apenas games.json
    const filteredEvents = games.filter(event =>
        event.title.toLowerCase().includes(search.toLowerCase()) &&
        (team === '' || event.title.toLowerCase().includes(team.toLowerCase())) &&
        (date === '' || event.date === date) &&
        (category === 'Todas' || event.category === category)
    );

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Bem-vindo ao TicketMaster Futebol</h1>
                <p>Compre ingressos para os melhores jogos de futebol do Brasil!</p>
            </header>

            <section className="highlight-section">
                <img src="https://images.unsplash.com/photo-1505843279827-4b522fae12b2?auto=format&fit=crop&w=800&q=80" alt="Jogo em destaque" />
                <div className="highlight-info">
                    <h2>Jogo em Destaque</h2>
                    <p>Garanta seu ingresso para o clássico da rodada e viva a emoção do estádio!</p>
                </div>
            </section>

            <section className="filter-section">
                <input
                    type="text"
                    placeholder="Buscar por jogo..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="filter-input"
                />
                <input
                    type="text"
                    placeholder="Buscar por time..."
                    value={team}
                    onChange={e => setTeam(e.target.value)}
                    className="filter-input"
                />
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="filter-input"
                />
            </section>

            <section className="events-section">
                <h2>Próximos Jogos</h2>
                <div className="events-list">
                    {filteredEvents.length > 0 ? (
                        <EventCardList events={filteredEvents.map(event => ({
                            ...event,
                            competition: event.category,
                            teams: event.title.split(' x ')
                        }))} />
                    ) : (
                        <p>Nenhum jogo encontrado.</p>
                    )}
                </div>
            </section>

            <section className="organizer-section">
                <div className="organizer-card">
                    <img
                        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80"
                        alt="Organizador"
                        className="organizer-img"
                    />
                    <h2>Área do Organizador</h2>
                    <p>Gerencie seus jogos, acompanhe vendas e crie novas experiências para os torcedores.</p>
                    <button className="btn-primary">Acessar Painel do Organizador</button>
                </div>
            </section>

            <section className="categories-section categories-bottom">
                <h3>Categorias</h3>
                <div className="categories-list">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`category-btn${category === cat ? ' active' : ''}`}
                            onClick={() => setCategory(cat)}
                        >
                            <span>{cat}</span>
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}