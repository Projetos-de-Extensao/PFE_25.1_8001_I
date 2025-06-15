import React, { useState } from 'react';
import './home.css';
import EventCardList from '../EventCardList/EventCardList';
import games from '../../data/games.json';
import { Link } from "react-router-dom";

export default function Home() {
    const [search, setSearch] = useState('');
    const [date, setDate] = useState('');
    const [team, setTeam] = useState('');
    const [category, setCategory] = useState('Todas');

    const categories = [
        'Brasileirão',
        'Copa do Brasil',
        'Libertadores',
        'Flamengo',
        'Palmeiras',
        'Vasco',
        'Corinthians',
        'Estaduais',
        'Feminino',
        'Sub-20',
    ];

    const filteredEvents = games.filter(event =>
        event.title.toLowerCase().includes(search.toLowerCase()) &&
        (team === '' || event.title.toLowerCase().includes(team.toLowerCase())) &&
        (date === '' || event.date === date) &&
        (category === 'Todas' || event.category === category)
    );

    const uniqueEvents = Array.from(new Map(filteredEvents.map(e => [e.id, e])).values());

    return (
        <>
            <div className="hero-section">
                <div className="hero-banner">
                    <div className="hero-text">
                        <h1>Bem-vindo ao TicketSeller</h1>
                        <p>Encontre os melhores eventos esportivos do Brasil</p>
                    </div>
                </div>
            </div>

            <div className="home-container">
                <form className="filter-bar">
                    <input
                        type="text"
                        placeholder="Buscar por título..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Time..."
                        value={team}
                        onChange={e => setTeam(e.target.value)}
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="Todas">Todas</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </form>

                <EventCardList events={uniqueEvents} />
            </div>

           <section className="organizer-promo">
  <h2 className="promo-title">Seja um Organizador</h2>
  <p className="promo-text">
    Você é um clube ou organizador de eventos? Venda seus ingressos na maior plataforma de tickets do Brasil.
  </p>
  <Link to="/organizadores" className="promo-button">
    Saiba mais
  </Link>
</section>
        </>


    );
}
