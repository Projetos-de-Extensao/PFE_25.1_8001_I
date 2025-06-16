import React, { useState } from "react";
import { useParams } from "react-router-dom";
import games from "../../data/games.json";
import "./paginacompra.css";
import { useCarrinho } from "../../context/CarrinhoContext";

const setores = [
  { nome: "Camarote Norte", preco: 360, cor: "#ffbe3b" },
  { nome: "Arquibancada Norte", preco: 120, cor: "#4a90e2" },
  { nome: "Leste", preco: 180, cor: "#4a90e2", vertical: true },
  { nome: "Oeste", preco: 180, cor: "#4a90e2", vertical: true },
  { nome: "Arquibancada Sul", preco: 120, cor: "#4a90e2" },
  { nome: "Camarote Sul", preco: 360, cor: "#ffbe3b" },
];

const fileiras = ["A", "B", "C", "D", "E"];
const assentos = Array.from({ length: 10 }, (_, i) => i + 1);

export default function PaginaCompra() {
  const { id } = useParams();
  const evento = games.find(e => String(e.id) === String(id));
  const { adicionarItem } = useCarrinho();

  const [setorSelecionado, setSetorSelecionado] = useState(null);
  const [fileira, setFileira] = useState("");
  const [assento, setAssento] = useState("");

  function handleSetorClick(setor) {
    setSetorSelecionado(setor);
  }

  function handleAdicionarCarrinho() {
    if (!setorSelecionado || !fileira || !assento) {
      alert("Selecione setor, fileira e assento.");
      return;
    }
    adicionarItem({
      id: evento.id,
      titulo: evento.title,
      data: evento.date,
      categoria: evento.categoria,
      setor: setorSelecionado.nome,      
      fileira,
      assento,
      preco: setorSelecionado.preco,     
      estadio: evento.estadio            
    });
    alert("Ingresso adicionado ao carrinho!");
  }

  if (!evento) {
    return <div style={{ padding: 40, textAlign: "center" }}>Evento não encontrado.</div>;
  }

  return (
    <div className="compra-wrapper">
      <div className="compra-card">
        <div className="compra-info">
          <h2>{evento.title}</h2>
          <p className="compra-data">
            {evento.date} - {evento.local}
          </p>
          <h3>Mapa do Estádio</h3>
          <div className="mapa-estadio">
            <div className="setor-cima">
              <div
                className={`setor-mapa ${setorSelecionado?.nome === "Camarote Norte" ? "ativo" : ""}`}
                style={{ background: "#ffbe3b" }}
                onClick={() => handleSetorClick(setores[0])}
              >
                Camarote Norte - R$ 360.00
              </div>
              <div
                className={`setor-mapa ${setorSelecionado?.nome === "Arquibancada Norte" ? "ativo" : ""}`}
                style={{ background: "#4a90e2", color: "#fff" }}
                onClick={() => handleSetorClick(setores[1])}
              >
                Arquibancada Norte - R$ 120.00
              </div>
            </div>
            <div className="setor-meio">
              <div
                className={`setor-mapa vertical ${setorSelecionado?.nome === "Leste" ? "ativo" : ""}`}
                style={{ background: "#4a90e2", color: "#fff" }}
                onClick={() => handleSetorClick(setores[2])}
              >
                Leste - R$ 180.00
              </div>
              <div className="campo">CAMPO</div>
              <div
                className={`setor-mapa vertical ${setorSelecionado?.nome === "Oeste" ? "ativo" : ""}`}
                style={{ background: "#4a90e2", color: "#fff" }}
                onClick={() => handleSetorClick(setores[3])}
              >
                Oeste - R$ 180.00
              </div>
            </div>
            <div className="setor-baixo">
              <div
                className={`setor-mapa ${setorSelecionado?.nome === "Arquibancada Sul" ? "ativo" : ""}`}
                style={{ background: "#4a90e2", color: "#fff" }}
                onClick={() => handleSetorClick(setores[4])}
              >
                Arquibancada Sul - R$ 120.00
              </div>
              <div
                className={`setor-mapa ${setorSelecionado?.nome === "Camarote Sul" ? "ativo" : ""}`}
                style={{ background: "#ffbe3b" }}
                onClick={() => handleSetorClick(setores[5])}
              >
                Camarote Sul - R$ 360.00
              </div>
            </div>
            <div className="mapa-instrucao">
              Clique em um setor no mapa para selecioná-lo
            </div>
          </div>
        </div>
        <div className="compra-detalhes">
          <h3>Detalhes da Seleção</h3>
          <label>
            Fileira
            <select
              value={fileira}
              onChange={(e) => setFileira(e.target.value)}
              disabled={!setorSelecionado}
            >
              <option value="">Selecione a fileira</option>
              {fileiras.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </label>
          <label>
            Assento
            <select
              value={assento}
              onChange={(e) => setAssento(e.target.value)}
              disabled={!setorSelecionado}
            >
              <option value="">Selecione o assento</option>
              {assentos.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </label>
          <button
            className="btn-adicionar"
            onClick={handleAdicionarCarrinho}
            disabled={!setorSelecionado || !fileira || !assento}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}