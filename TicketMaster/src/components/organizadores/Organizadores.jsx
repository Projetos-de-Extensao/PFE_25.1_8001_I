import React, { useState } from 'react';
import './Organizadores.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faBuilding, faEnvelope, faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Organizadores() {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    nomeEvento: '',
    emailContato: '',
    telefoneContato: '',
    nomeDoEventoDetalhado: '',
    dataEvento: '',
    publicoEsperado: '',
    localEvento: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário enviados:', formData);
    
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
      
      setFormData({
        nomeEmpresa: '',
        nomeEvento: '',
        emailContato: '',
        telefoneContato: '',
        nomeDoEventoDetalhado: '',
        dataEvento: '',
        publicoEsperado: '',
        localEvento: '',
      });
    }, 3000);
  };

  return (
    <div className="organizadores-page-container">
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <FontAwesomeIcon icon={faBuilding} className="header-icon" />
            <h2>Venda ingressos online</h2>
            <p>Se você está buscando parcerias ou soluções para o seu evento, preencha os dados abaixo.</p>
          </div>
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="input-group">
              <label htmlFor="nomeEmpresa">Nome da empresa</label>
              <input
                type="text"
                id="nomeEmpresa"
                name="nomeEmpresa"
                value={formData.nomeEmpresa}
                onChange={handleChange}
                required
                placeholder="Ticket Seller LTDA"
              />
            </div>
            <div className="input-group">
              <label htmlFor="nomeEvento">Nome do evento</label>
              <input
                type="text"
                id="nomeEvento"
                name="nomeEvento"
                value={formData.nomeEvento}
                onChange={handleChange}
                required
                placeholder="Festival de Música 2025"
              />
            </div>
            <div className="input-group">
              <label htmlFor="emailContato">E-mail para contato</label>
              <input
                type="email"
                id="emailContato"
                name="emailContato"
                value={formData.emailContato}
                onChange={handleChange}
                required
                placeholder="contato@empresa.com"
              />
            </div>
            <div className="input-group">
              <label htmlFor="telefoneContato">Telefone para contato</label>
              <input
                type="tel"
                id="telefoneContato"
                name="telefoneContato"
                value={formData.telefoneContato}
                onChange={handleChange}
                required
                placeholder="(11) 91234-5678"
              />
            </div>
            <div className="input-group">
              <label htmlFor="dataEvento">Data</label>
              <div className="date-input-wrapper">
                <input
                  type="text"
                  id="dataEvento"
                  name="dataEvento"
                  placeholder="dd/mm/aaaa"
                  value={formData.dataEvento}
                  onChange={handleChange}
                  required
                />
                <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="publicoEsperado">Quantidade de Público Esperado</label>
              <input
                type="number"
                id="publicoEsperado"
                name="publicoEsperado"
                value={formData.publicoEsperado}
                onChange={handleChange}
                required
                placeholder="500"
              />
            </div>
            <div className="input-group">
              <label htmlFor="localEvento">Local</label>
              <input
                type="text"
                id="localEvento"
                name="localEvento"
                value={formData.localEvento}
                onChange={handleChange}
                required
                placeholder="Centro de Convenções"
              />
            </div>
            <button type="submit" className="submit-button">Enviar</button>
          </form>
          <div className="modal-footer">
            <h3>Informações de contato</h3>
            <p><FontAwesomeIcon icon={faEnvelope} /> contato@ticketseller.com.br</p>
          </div>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="success-popup">
          <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
          <p>Solicitação enviada com sucesso! Entraremos em contato em breve.</p>
        </div>
      )}
    </div>
  );
}

export default Organizadores;