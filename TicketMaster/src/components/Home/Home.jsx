import React, { useState } from 'react';
import './home.css';

export default function Home() {
    const [search, setSearch] = useState('');
    const [date, setDate] = useState('');
    const [team, setTeam] = useState('');
    const [category, setCategory] = useState('Todas');

    // Categorias ampliadas e em destaque
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

    // Jogos de futebol com imagens reais ilustrativas
    const events = [
        {
            id: 1,
            title: "Flamengo x Palmeiras",
            date: "2025-06-20",
            location: "Maracanã",
            team: "Flamengo",
            category: "Brasileirão",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            title: "Corinthians x São Paulo",
            date: "2025-07-05",
            location: "Neo Química Arena",
            team: "Corinthians",
            category: "Brasileirão",
            image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            title: "Grêmio x Internacional",
            date: "2025-08-12",
            location: "Arena do Grêmio",
            team: "Grêmio",
            category: "Libertadores",
            image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            title: "Cruzeiro x Atlético-MG",
            date: "2025-09-01",
            location: "Mineirão",
            team: "Cruzeiro",
            category: "Copa do Brasil",
            image: "https://images.unsplash.com/photo-1505843279827-4b522fae12b2?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            title: "Santos x Vasco",
            date: "2025-09-15",
            location: "Vila Belmiro",
            team: "Santos",
            category: "Amistoso",
            image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=600&q=80"
        }
    ];

    // Imagens para cada categoria (exemplo ilustrativo)
    const categoryImages = {
        'Brasileirão': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        'Libertadores': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        'Copa do Brasil': 'https://images.unsplash.com/photo-1505843279827-4b522fae12b2?auto=format&fit=crop&w=400&q=80',
        'Amistoso': 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=400&q=80',
        'Sul-Americana': 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
        'Recopa': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        'Supercopa': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        'Estaduais': 'https://images.unsplash.com/photo-1505843279827-4b522fae12b2?auto=format&fit=crop&w=400&q=80',
        'Internacional': 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=400&q=80',
        'Feminino': 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
        'Sub-20': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        'Sub-17': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        'Todas': 'https://images.unsplash.com/photo-1505843279827-4b522fae12b2?auto=format&fit=crop&w=400&q=80'
    };

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(search.toLowerCase()) &&
        (team === '' || event.team.toLowerCase().includes(team.toLowerCase())) &&
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
                        filteredEvents.map(event => (
                            <div key={event.id} className="event-card">
                                <img src={event.image} alt={event.title} />
                                <div className="event-info">
                                    <h3>{event.title}</h3>
                                    <p>{event.date} - {event.location}</p>
                                    <span className="event-category">{event.category}</span>
                                    <button className="btn-primary">Ver detalhes</button>
                                </div>
                            </div>
                        ))
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
                            <img
                                src={categoryImages[cat]}
                                alt={cat}
                                className="category-img"
                            />
                            <span>{cat}</span>
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}