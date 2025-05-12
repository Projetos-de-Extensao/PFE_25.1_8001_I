# Documentação de Funcionalidades e Tarefas

## Epic 1: Estrutura de Navegação e Descoberta de Partidas

### Feature 1.1: Página Inicial com Destaques
- **User Story 1.1.1**: Como usuário, quero ver os principais jogos em destaque ao entrar no site para saber o que está em alta.
  - **Task 1.1.1.1**: Criar layout da homepage com carrossel ou grid de jogos em destaque.
  - **Task 1.1.1.2**: Implementar cards de jogo com imagem, título, data e botão "Ver mais".

### Feature 1.2: Busca e Filtros de Jogos
- **User Story 1.2.1**: Como usuário, quero buscar jogos por time, data ou campeonato para encontrar rapidamente o que me interessa.
  - **Task 1.2.1.1**: Criar campo de busca.
  - **Task 1.2.1.2**: Implementar filtros visuais.
  - **Task 1.2.1.3**: Estilizar resultados em uma grid responsiva.

### Feature 1.3: Página de Detalhes da Partida
- **User Story 1.3.1**: Como usuário, quero ver os detalhes de uma partida para saber onde e quando ela acontecerá.
  - **Task 1.3.1.1**: Criar página com informações como times, local, data e horário.
  - **Task 1.3.1.2**: Adicionar botão "Selecionar ingresso" com navegação para o mapa de assentos.

---

## Epic 2: Interface de Seleção de Setores ou Assentos

### Feature 2.1: Mapa Interativo de Estádio
- **User Story 2.1.1**: Como usuário, quero visualizar o estádio e selecionar um setor para comprar meu ingresso.
  - **Task 2.1.1.1**: Criar componente visual representando setores.
  - **Task 2.1.1.2**: Adicionar interação visual ao clicar nos setores.
  - **Task 2.1.1.3**: Exibir preço e disponibilidade fictícios ao clicar.

### Feature 2.2: Resumo da Escolha
- **User Story 2.2.1**: Como usuário, quero ver um resumo do setor escolhido antes de prosseguir para compra.
  - **Task 2.2.1.1**: Criar componente de resumo com nome do setor, preço e quantidade de ingressos.
  - **Task 2.2.1.2**: Adicionar botão "Continuar para pagamento" com navegação.

---

## Epic 3: Simulação de Processo de Compra

### Feature 3.1: Formulário de Dados do Comprador
- **User Story 3.1.1**: Como usuário, quero preencher meus dados para seguir com a compra.
  - **Task 3.1.1.1**: Criar formulário com campos nome, e-mail, CPF.
  - **Task 3.1.1.2**: Estilizar formulário com mensagens de erro.

### Feature 3.2: Tela de Pagamento Simulado
- **User Story 3.2.1**: Como usuário, quero simular o pagamento com métodos como cartão e PIX.
  - **Task 3.2.1.1**: Criar componentes para escolher o método de pagamento.
  - **Task 3.2.1.2**: Mostrar mensagem de "pagamento confirmado" após clique.

---

## Epic 4: Tela de Ingresso e Histórico do Usuário

### Feature 4.1: Tela de Confirmação de Compra
- **User Story 4.1.1**: Como usuário, quero ver uma tela de confirmação após a compra para saber que deu certo.
  - **Task 4.1.1.1**: Criar página de sucesso com resumo da compra.
  - **Task 4.1.1.2**: Gerar QR Code fictício com biblioteca.

### Feature 4.2: Perfil do Usuário com Histórico
- **User Story 4.2.1**: Como usuário, quero acessar meus ingressos anteriores simulados.
  - **Task 4.2.1.1**: Criar página de perfil com lista estática de ingressos.
  - **Task 4.2.1.2**: Adicionar botão "visualizar ingresso" que abre o QR code.
