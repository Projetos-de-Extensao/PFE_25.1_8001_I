import React, { useState } from "react";
import "./Contato.css";

const faqs = [
  {
    categoria: "Compras",
    pergunta: "Como posso comprar ingressos?",
    resposta: "Basta acessar a página de eventos, escolher o evento desejado e seguir as instruções de compra."
  },
  {
    categoria: "Pagamentos",
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta: "Aceitamos cartões de crédito, débito e PIX."
  },
  {
    categoria: "Cancelamentos",
    pergunta: "Posso cancelar minha compra?",
    resposta: "Sim, você pode cancelar em até 48h após a compra, conforme nossas políticas."
  },
  {
    categoria: "Problemas",
    pergunta: "Não recebi meus ingressos por e-mail",
    resposta: "Verifique sua caixa de spam ou entre em contato conosco informando o número do pedido."
  }
];

const Contato = () => {
  const [form, setForm] = useState({ 
    nome: "", 
    email: "", 
    assunto: "duvida", 
    mensagem: "" 
  });
  const [enviado, setEnviado] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio para demonstração
    console.log("Formulário enviado:", form);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
    setForm({ nome: "", email: "", assunto: "duvida", mensagem: "" });
  };

  const filteredFaqs = activeCategory === "Todos" 
    ? faqs 
    : faqs.filter(faq => faq.categoria === activeCategory);

  const categories = ["Todos", ...new Set(faqs.map(faq => faq.categoria))];

  return (
    <section className="contato-section">
      <div className="contato-wrapper">
        <div className="contato-form-bloco">
          <h2>Fale Conosco</h2>
          <p className="contato-desc">
            Tem dúvidas sobre ingressos ou eventos? Preencha o formulário abaixo:
          </p>
          
          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Nome completo*
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  minLength="3"
                  placeholder="Seu nome completo"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                E-mail*
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Assunto*
                <select 
                  name="assunto" 
                  value={form.assunto} 
                  onChange={handleChange}
                  required
                >
                  <option value="duvida">Dúvida sobre compra</option>
                  <option value="problema">Problema com ingresso</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </label>
            </div>

            <label>
              Mensagem*
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                required
                minLength="10"
                placeholder="Descreva sua dúvida ou solicitação..."
                rows={5}
              />
            </label>

            <button type="submit" className="contato-btn">
              Enviar mensagem
            </button>
            
            {enviado && (
              <div className="contato-success">
                Mensagem enviada com sucesso! (Simulação)
              </div>
            )}
          </form>
        </div>

        <div className="contato-faq-bloco">
          <h3>Dúvidas Frequentes</h3>
          
          <div className="faq-categories">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <ul className="contato-faq-lista">
            {filteredFaqs.map((faq, idx) => (
              <li key={idx} className="contato-faq-item">
                <details>
                  <summary>{faq.pergunta}</summary>
                  <p>{faq.resposta}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contato;