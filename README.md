# ⚽ Football Live Dashboard

Uma plataforma full-stack de resultados de futebol em tempo real inspirada em aplicações como o Sofascore.

Desenvolvida com Node.js, Express, TypeScript e Next.js, consumindo dados em tempo real através da API da RapidAPI.

O projeto foca-se em arquitetura limpa, performance e experiência de utilizador moderna, simulando uma aplicação real de produto.

---

## Demonstração

> Adicionar link do deploy aqui (Render / Vercel)

- Backend API: https://seu-backend.onrender.com
- Frontend: https://seu-frontend.vercel.app

---

## Pré-visualização

> Adicionar screenshots ou GIFs aqui

- Dashboard de jogos ao vivo
- Página de detalhes da partida
- Slider de notícias
- Sidebar de transferências

---

## Objetivo do Projeto

Este projeto simula uma plataforma real de dados desportivos com foco em:

- Consumo de dados em tempo real
- Arquitetura escalável no backend
- Separação de responsabilidades
- Interface responsiva e moderna
- Boas práticas de integração com APIs externas

---

## Stack Tecnológica

### Backend
- Node.js
- Express.js
- TypeScript
- Axios
- Dotenv
- Swagger (documentação da API)
- CORS

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- React Query

---

## Arquitetura

O sistema segue uma arquitetura simples, mas profissional:

Frontend (Next.js)
↓
Backend API (Node.js + Express)
↓
API de Futebol (RapidAPI)


O backend funciona como uma camada intermédia, abstraindo a complexidade da API externa e fornecendo endpoints organizados para o frontend.

---

## Funcionalidades da API

### Jogos
- Jogos ao vivo
- Jogos por data
- Detalhes da partida
- Estatísticas do jogo

### Ligas
- Lista de ligas disponíveis

### Notícias
- Notícias e tendências do futebol

### Transferências
- Transferências recentes de jogadores

---

## Estrutura do Backend

O backend funciona como uma camada intermédia, abstraindo a complexidade da API externa e fornecendo endpoints organizados para o frontend.

---

src/
├── config/
│ └── rapidapi.ts
├── controllers/
│ └── football.controller.ts
├── services/
│ └── football.service.ts
├── routes/
│ └── football.routes.ts
├── app.ts
└── server.ts


Funcionalidades Principais

Jogos de futebol ao vivo
Estatísticas de partidas
Notícias em destaque
Transferências de jogadores
Jogos por dataInterface totalmente responsiva
Atualização de dados em tempo real (polling)
Destaques Técnicos
Separação clara entre controller e service
Camada de abstração para consumo da API externa
Arquitetura modular e escalável
Componentização no frontend
Integração limpa com API externa
Documentação com Swagger
Documentação da API (Swagger)

Após iniciar o backend:

http://localhost:3001/api/docs
Instalação
1. Clonar o repositório
git clone https://github.com/seu-usuario/football-dashboard.git
2. Backend
cd backend
npm install
npm run dev
3. Frontend
cd frontend
npm install
npm run dev
Variáveis de Ambiente

Criar ficheiro .env no backend:

PORT=3001
RAPIDAPI_KEY=sua_api_key
RAPIDAPI_HOST=free-api-live-football-data.p.rapidapi.com
Deploy
Backend (Render)
Serviço Node.js
Start command: npm start
Frontend (Vercel)
Deploy Next.js
Conectado à API backend