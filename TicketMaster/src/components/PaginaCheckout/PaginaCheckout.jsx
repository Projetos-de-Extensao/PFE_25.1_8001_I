import React, { useState } from "react";
import "./Paginacheckout.css";

function Paginacheckout() {
  const [pedido] = useState({
    preco: 89.90,
  });

  const formatPrice = (price) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="checkout-container">
      <form className="checkout-form">
        {/* Dados Pessoais */}
        <div className="form-section" style={{ marginBottom: 16 }}>
          <h2>
            <span role="img" aria-label="user" style={{ marginRight: 8 }}>
              <i className="fa-regular fa-user"></i>
            </span>
            Dados Pessoais
          </h2>
          <div className="form-row">
            <div className="form-group">
              <label>Nome Completo *</label>
              <input type="text" placeholder="Nome Completo" required />
            </div>
            <div className="form-group">
              <label>E-mail *</label>
              <input type="email" placeholder="E-mail" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Telefone *</label>
              <input type="text" placeholder="(11) 99999-9999" required />
            </div>
            <div className="form-group">
              <label>CPF *</label>
              <input type="text" placeholder="000.000.000-00" required />
            </div>
          </div>
        </div>

        {/* Endereço de Cobrança */}
        <div className="form-section" style={{ marginBottom: 16 }}>
          <h2>
            <span role="img" aria-label="map" style={{ marginRight: 8 }}>
              <i className="fa-regular fa-map"></i>
            </span>
            Endereço de Cobrança
          </h2>
          <div className="form-row">
            <div className="form-group">
              <label>CEP</label>
              <input type="text" placeholder="00000-000" />
            </div>
            <div className="form-group">
              <label>Rua</label>
              <input type="text" placeholder="Rua" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Número</label>
              <input type="text" placeholder="Número" />
            </div>
            <div className="form-group">
              <label>Complemento</label>
              <input type="text" placeholder="Complemento" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Bairro</label>
              <input type="text" placeholder="Bairro" />
            </div>
            <div className="form-group">
              <label>Cidade</label>
              <input type="text" placeholder="Cidade" />
            </div>
          </div>
        </div>

        {/* Dados do Cartão */}
        <div className="form-section">
          <h2>
            <span role="img" aria-label="cartão" style={{ marginRight: 8 }}>
              <i className="fa-regular fa-credit-card"></i>
            </span>
            Dados do Cartão
          </h2>
          <div className="form-group">
            <label>Número do Cartão *</label>
            <input type="text" placeholder="0000 0000 0000 0000" required />
          </div>
          <div className="form-group">
            <label>Nome no Cartão *</label>
            <input type="text" placeholder="Nome como impresso no cartão" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Validade *</label>
              <input type="text" placeholder="MM/AA" required />
            </div>
            <div className="form-group">
              <label>CVV *</label>
              <input type="text" placeholder="000" required />
            </div>
          </div>
        </div>

        {/* Botão Finalizar */}
        <div style={{ marginTop: 24 }}>
          <button
            type="submit"
            className="submit-button"
            style={{ width: "100%" }}
          >
            Finalizar Compra - {formatPrice(pedido.preco)}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Paginacheckout;