import React, { useState } from 'react';
import './Cadastro.css';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    cpf: '',
    telefone: '',
    dataNascimento: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log('Dados do cadastro:', formData);
    navigate('/login'); // Redireciona para o login após cadastro
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Criar Conta</h2>
        <p className="cadastro-subtitle">Junte-se ao TicketSeller</p>
        
        <form onSubmit={handleSubmit} className="cadastro-form">
          <div className="form-group">
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome completo"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="CPF"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Telefone"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="Senha"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              placeholder="Confirmar senha"
              required
            />
          </div>
          
          <button type="submit" className="cadastro-button">
            Criar conta
          </button>
        </form>
        
        <div className="cadastro-footer">
          <p>Já tem uma conta? <a href="/login" className="login-link">Fazer login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;