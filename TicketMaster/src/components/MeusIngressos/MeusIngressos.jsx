import React from 'react';
import './MeusIngressos.css';

const MeusIngressos = () => {
  return (
    <div className="ingressos-container">
      <div className="header">
        <h1>Meus Ingressos</h1>
      </div>
      <div className="ingresso-info">
        <div className="partida">
          <h2>Cruzeiro X Atlético Mineiro</h2>
          <p>Campeonato Mineiro Feminino</p>
          <p>19/11/2022 às 11h00</p>
        </div>
        <div className="estadio">
          <h3>Estádio Mineirão</h3>
          <p>Portão F</p>
          <p>Setor Laranja Inferior</p>
          <p>Substituto: 141</p>
          <p>Fila: Q</p>
          <p>Assento: 14</p>
        </div>
        <div className="dados-pessoais">
          <h4>Paulo Victor Moraes</h4>
          <p>Documento: 504.403.914</p>
          <p>Tipo ingresso: Entrada Inteira</p>
          <p>Pedido nº: 8695811-4</p>
        </div>
        <div className="codigo-qr">
          <img src="qr-code.png" alt="Código QR" />
        </div>
      </div>
    </div>
  );
};

export default MeusIngressos;
