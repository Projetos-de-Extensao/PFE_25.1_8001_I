import React from 'react';
import './SejaOrganizador.css';
import { Link } from 'react-router-dom';

export default function SejaOrganizador() {
  return (
    <section className="organizer-section">
      <div className="organizer-overlay">
        <h2>Seja um organizador</h2>
        <p>
          Quer divulgar seus eventos esportivos para milhares de fãs?
          Junte-se à nossa plataforma e tenha visibilidade nacional!
        </p>
        <Link to="/organizadores" className="organizer-button">
          Cadastrar evento
        </Link>
      </div>
    </section>
  );
}
