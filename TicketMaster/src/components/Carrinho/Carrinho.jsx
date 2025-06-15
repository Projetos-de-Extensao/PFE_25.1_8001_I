import React from "react";
import { Link } from "react-router-dom";
import "./carrinho.css";
import { useCarrinho } from "../../context/CarrinhoContext";

const Carrinho = () => {
  const { itens, removerItem } = useCarrinho();

  return (
    <div className="carrinho-pagina">
      <h1>Meu Carrinho</h1>
      <div className="carrinho-box">
        {itens.length === 0 ? (
          <div className="carrinho-vazio">
            <p>Seu carrinho está vazio</p>
            <Link to="/" className="btn-continuar">
              Continuar Comprando
            </Link>
          </div>
        ) : (
          <div className="carrinho-lista">
            {itens.map((item, idx) => (
              <div className="carrinho-item" key={idx}>
                <div>
                  <strong>{item.titulo}</strong>
                  <p>{item.data} - {item.local}</p>
                  <p>Setor: {item.setor} | Fileira: {item.fileira} | Assento: {item.assento}</p>
                  <p>Preço: R$ {item.preco}</p>
                </div>
                <button className="btn-remover" onClick={() => removerItem(idx)}>
                  Remover
                </button>
              </div>
            ))}
            <Link to="/" className="btn-continuar">
              Continuar Comprando
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrinho;