import React from 'react';
import './MeusIngressos.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTicketAlt } from 'react-icons/fa';

const MeusIngressos = () => {
  return (
    <div className="ingressos-container">
      <div className="header-ingressos">
        <h1>Meus Ingressos</h1>
        <p>Gerencie seus ingressos para os próximos eventos</p>
      </div>

      <div className="ingresso-card">
        <div className="ingresso-header">
          <div className="status-tag">Válido</div>
          <div className="evento-data">
            <FaCalendarAlt /> 19 NOV
            <FaClock /> 11:00
          </div>
        </div>

        <div className="ingresso-content">
          <div className="evento-info">
            <h2>Cruzeiro X Atlético Mineiro</h2>
            <p className="evento-tipo">Campeonato Mineiro Feminino</p>
            <div className="evento-local">
              <FaMapMarkerAlt />
              <span>Estádio Mineirão</span>
            </div>
          </div>

          <div className="ingresso-details">
            <div className="details-column">
              <div className="detail-item">
                <span className="detail-label">Portão</span>
                <span className="detail-value">F</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Setor</span>
                <span className="detail-value">Laranja Inferior</span>
              </div>
            </div>
            
            <div className="details-column">
              <div className="detail-item">
                <span className="detail-label">Fileira</span>
                <span className="detail-value">Q</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Assento</span>
                <span className="detail-value">14</span>
              </div>
            </div>
          </div>

          <div className="ingresso-footer">
            <div className="titular-info">
              <h4>Paulo Victor Moraes</h4>
              <p>CPF: 504.403.914-XX</p>
            </div>
            <div className="pedido-info">
              <span className="ticket-icon"><FaTicketAlt /></span>
              <span className="pedido-numero">Pedido nº: 8695811-4</span>
            </div>
          </div>
        </div>

        <div className="ingresso-actions">
          <button className="action-button download">Baixar Ingresso</button>
          <button className="action-button share">Compartilhar</button>
        </div>
      </div>
    </div>
  );
};

export default MeusIngressos;