import React from "react";
import { Link } from "react-router-dom";
import "./carrinho.css";
import { useCarrinho } from "../../context/CarrinhoContext";

const Carrinho = () => {
  const { itens, removerItem } = useCarrinho();

  return (
    <div className="carrinho-pagina">
      <h1>Meu Carrinho</h1>
      <div className={`carrinho-box${itens.length >= 4 ? ' carrinho-box--grande' : ''}`}>
        {itens.length === 0 ? (
          <div className="carrinho-vazio">
            <p>Seu carrinho está vazio</p>
            <Link to="/" className="btn-continuar">
              Continuar Comprando
            </Link>
          </div>
        ) : (
          <div>
            <ul className="carrinho-lista">
              {itens.map((item, idx) => (
                <li className="carrinho-item" key={item.id + '-' + idx}>
                  <div>
                    <strong>{item.titulo}</strong>
                    <p>Estádio: {item.estadio}</p>
                    <p>{item.data} - {item.local}</p>
                    <p>Setor: {item.setor} | Fileira: {item.fileira} | Assento: {item.assento}</p>
                    <p>Preço: R$ {item.preco}</p>
                  </div>
                  <button className="btn-remover" onClick={() => removerItem(idx)}>
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <Link to="/" className="btn-continuar" style={{ display: 'block', margin: '18px auto 0 auto' }}>
              Continuar Comprando
            </Link>
            <Link to="/checkout" className="btn-continuar" style={{ display: 'block', margin: '14px auto 0 auto' }}>
              Finalizar Compra
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrinho;