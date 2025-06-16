import React, { useState } from "react";
import "./Paginacheckout.css";
import { useCarrinho } from "../../context/CarrinhoContext";

function Paginacheckout() {
  const { itens } = useCarrinho();
  const [formErrors, setFormErrors] = useState({});

  // Calcula o total dos itens do carrinho
  const total = itens.reduce((sum, item) => sum + Number(item.preco), 0);

  const formatPrice = (price) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Compra finalizada com sucesso!");
  };

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Dados Pessoais */}
        <div className="form-section" style={{ marginBottom: 16 }}>
          <h2>Dados Pessoais</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Nome Completo *</label>
              <input
                type="text"
                placeholder="Nome Completo"
                pattern="[A-Za-zÀ-ÿ\s]+" /* Aceita apenas letras e espaços */
                title="Por favor, insira apenas letras." /* Mensagem de erro personalizada */
                required
              />
            </div>
            <div className="form-group">
              <label>E-mail *</label>
              <input type="email" name="email" placeholder="E-mail" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Telefone *</label>
              <input type="text" placeholder="(11) 99999-9999" required />
            </div>
            <div className="form-group">
              <label>CPF *</label>
              <input
                type="text"
                name="cpf"
                placeholder="000.000.000-00"
                maxLength="14"
                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" /* Aceita apenas números */
                required
              />
            </div>
          </div>
        </div>

        {/* Endereço de Cobrança */}
        <div className="form-section" style={{ marginBottom: 16 }}>
          <h2>Endereço de Cobrança</h2>
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
          <h2>Dados do Cartão</h2>
          <div className="form-group">
            <label>Número do Cartão *</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              maxLength="16"
              pattern="\d{4} \d{4} \d{4} \d{4}" /* Aceita apenas números */
              required
            />
          </div>
          <div className="form-group">
            <label>Nome no Cartão *</label>
            <input
              type="text"
              placeholder="Nome como impresso no cartão"
              pattern="[A-Za-zÀ-ÿ\s]+" /* Aceita apenas letras e espaços */
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Validade *</label>
              <input
                type="date"
                name="expiryDate" /* Aceita apenas uma data */
                required
              />
            </div>
            <div className="form-group">
              <label>CVV *</label>
              <input
                type="text"
                name="cvv"
                placeholder="000"
                maxLength="4"
                pattern="\d{4}" /* Aceita apenas números */
                required
              />
            </div>
          </div>
        </div>

        {/* Resumo dos ingressos */}
        <div className="resumo-pedido">
          <h2>Resumo do Pedido</h2>
          <ul>
            {itens.map((item, idx) => (
              <li key={idx}>
                {item.titulo} - Setor: {item.setor} - Fileira: {item.fileira} - Assento: {item.assento} -{" "}
                <strong>{formatPrice(item.preco)}</strong>
              </li>
            ))}
          </ul>
          <div className="total">Total: {formatPrice(total)}</div>
        </div>

        {/* Botão Finalizar */}
        <div style={{ marginTop: 24 }}>
          <button
            type="submit"
            className="submit-button"
            style={{ width: "100%" }}
          >
            Finalizar Compra - {formatPrice(total)}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Paginacheckout;