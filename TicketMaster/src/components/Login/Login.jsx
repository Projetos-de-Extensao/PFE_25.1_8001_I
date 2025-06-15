import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Senha:', senha);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Bem-vindo ao TicketSeller</h2>
        <p className="login-subtitle">Acesse sua conta para gerenciar seus ingressos</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Sua senha"
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        
        <div className="login-footer">
          <a href="#" className="forgot-password">Esqueceu a senha?</a>
          <p>Ainda não tem uma conta? <Link to="/cadastro" className="register-link">Cadastre-se</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;