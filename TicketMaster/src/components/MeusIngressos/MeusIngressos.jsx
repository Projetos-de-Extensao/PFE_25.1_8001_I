import React from 'react';
import './MeusIngressos.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';

const MeusIngressos = () => {
  return (
    <div className="ingressos-container">
      <div className="ingresso-card">
        <div className="status-valido">
          <span>Válido</span>
        </div>
        
        <div className="ingresso-header">
          <h2>Cruzeiro X Atlético Mineiro</h2>
          <p>Campeonato Mineiro Feminino</p>
        </div>

        <div className="ingresso-info">
          <div className="data-hora">
            <FaCalendarAlt /> 19 NOV
            <FaClock /> 11:00
          </div>
          <div className="local">
            <FaMapMarkerAlt /> Estádio Mineirão
          </div>
        </div>

        <div className="ingresso-details">
          <div className="details-left">
            <div className="detail-item">
              <span>Portão</span>
              <strong>F</strong>
            </div>
            <div className="detail-item">
              <span>Setor</span>
              <strong>Laranja Inferior</strong>
            </div>
          </div>
          
          <div className="details-right">
            <div className="detail-item">
              <span>Fileira</span>
              <strong>Q</strong>
            </div>
            <div className="detail-item">
              <span>Assento</span>
              <strong>14</strong>
            </div>
          </div>

          <div className="qr-code-section">
            <QRCodeSVG 
              value="Cruzeiro X Atlético Mineiro - Portão F - Setor Laranja Inferior - Fileira Q - Assento 14" 
              size={150}
            />
          </div>
        </div>

        <div className="ingresso-footer">
          <div className="titular">
            <p>Paulo Victor Moraes</p>
            <p>CPF: 504.403.914-XX</p>
          </div>
          <div className="pedido">
            <p>Pedido nº: 8695811-4</p>
          </div>
        </div>

        <div className="ingresso-actions">
          <button className="btn-baixar">Baixar Ingresso</button>
          <button className="btn-compartilhar">Compartilhar</button>
        </div>
      </div>
    </div>
  );
};

export default MeusIngressos;