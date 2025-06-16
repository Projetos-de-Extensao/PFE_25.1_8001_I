import React, { useState } from 'react';
import './home.css';
import EventCardList from '../EventCardList/EventCardList';
import games from '../../data/games.json';
import SejaOrganizador from '../SejaOrganizador/SejaOrganizador';

export default function Home() {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [team, setTeam] = useState('');
  const [category, setCategory] = useState('Todas');

  const filteredEvents = games.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase()) &&
    (team === '' || event.title.toLowerCase().includes(team.toLowerCase())) &&
    (date === '' || event.date === date) &&
    (category === 'Todas' || event.category === category)
  );

  const uniqueEvents = Array.from(new Map(filteredEvents.map(e => [e.id, e])).values());

  return (
    <>
      <div className="banner-container">
        <div className="banner-content">
          <h1>Bem-vindo ao TicketSeller</h1>
          <p>Encontre os melhores eventos esportivos do Brasil</p>
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
            <option value="Brasileirão">Brasileirão</option>
            <option value="Copa do Brasil">Copa do Brasil</option>
            <option value="Libertadores">Libertadores</option>
            <option value="Feminino">Feminino</option>
            <option value="Sub-20">Sub-20</option>
            <option value="Estaduais">Estaduais</option>
          </select>
        </form>

        <EventCardList events={uniqueEvents} />
      </div>

      <div className="home-organizer">
        <SejaOrganizador />
      </div>
    </>
  );
}
