import React, { createContext, useContext, useState, useEffect } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState(() => {
    // Carrega do localStorage ao iniciar
    const salvo = localStorage.getItem("carrinho");
    return salvo ? JSON.parse(salvo) : [];
  });
    //Função para não deixar o carrinho vazio ao recarregar a página
  useEffect(() => {
    // Salva no localStorage sempre que mudar
    localStorage.setItem("carrinho", JSON.stringify(itens));
  }, [itens]);

  function adicionarItem(item) {
    setItens(prev => [...prev, item]);
  }

  function removerItem(idx) {
    setItens(prev => prev.filter((_, i) => i !== idx));
  }

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}