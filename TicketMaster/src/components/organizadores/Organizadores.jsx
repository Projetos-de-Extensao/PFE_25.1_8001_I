import React from 'react';
import './Organizadores.css';

const Organizadores = () => {
  return (
    <div className="pagina-organizadores">
      <section className="cabecalho-organizador">
        <h1>Seja um Organizador</h1>
        <p>Venda seus ingressos na maior plataforma de tickets do Brasil.</p>
        <button className="botao-destaque">Saiba mais</button>
      </section>

      <section className="secao-formulario">
        <h2>Cadastro de Organizador</h2>
        <form className="formulario-organizador">
          <label>
            Nome do Organizador/Clube*
            <input type="text" placeholder="Clube de Regatas do Flamengo" required />
          </label>

          <label>
            Tipo de Organizador*
            <select required>
              <option value="">Selecione</option>
              <option value="clube">Clube de Futebol</option>
              <option value="federacao">Federação Estadual</option>
              <option value="liga">Liga/Associação</option>
              <option value="empresa">Empresa de Eventos</option>
              <option value="outros">Outros</option>
            </select>
          </label>

          <label>
            CNPJ*
            <input type="text" placeholder="00.000.000/0000-00" required />
          </label>

          <label>
            Email do Organizador*
            <input type="email" placeholder="contato@seuclube.com.br" required />
          </label>

          <label>
            Telefone*
            <input type="tel" placeholder="(11) 99999-9999" required />
          </label>

          <label>
            Nome do Estádio/Local*
            <input type="text" placeholder="Maracanã" required />
          </label>

          <label>
            Capacidade do Estádio*
            <input type="number" placeholder="78000" required />
          </label>

          <label>
            Estado*
            <input type="text" placeholder="Rio de Janeiro" required />
          </label>

          <label>
            Descrição do Evento
            <textarea placeholder="Descreva detalhes adicionais sobre o seu evento, informações especiais, etc." />
          </label>

          <button type="submit" className="botao-enviar">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default Organizadores;