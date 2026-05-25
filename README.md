# Football Live Dashboard

Uma plataforma **full-stack de resultados de futebol em tempo real**, inspirada em aplicações como Sofascore, construída com foco em **arquitetura limpa**, **performance**, **escalabilidade** e **experiência moderna do utilizador**.

A aplicação consome dados em tempo real através da **RapidAPI Football API** e entrega uma experiência semelhante a um produto real de mercado.

---

# Demonstração

### Produção
- **Backend API:** `https://api-football-6t3o.onrender.com/api/docs/`
- **Frontend:** `https://seu-frontend.vercel.app`

---

### Funcionalidades visuais
 Dashboard de jogos ao vivo  
 Página de detalhes da partida  
 Slider de notícias  
 Sidebar de transferências  
 Interface responsiva  
 Atualização em tempo real  

---

# Objetivo do Projeto

Este projeto foi desenvolvido para simular uma aplicação real de dados desportivos com foco em:

- Consumo de dados em tempo real
- Integração com APIs externas
- Arquitetura escalável
- Separação de responsabilidades
- Performance e boas práticas
- Interface moderna e responsiva

---

# Stack Tecnológica

## Backend
- Node.js
- Express.js
- TypeScript
- Axios
- Swagger
- Dotenv
- CORS

---

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- React Query

---

# Arquitetura do Sistema

```text
Frontend (Next.js)
        ↓
Backend API (Node.js + Express)
        ↓
RapidAPI Football API

O backend atua como uma camada intermediária, abstraindo a complexidade da API externa e expondo endpoints limpos para o frontend.

Estrutura do Projeto

Backend:
src/
├── config/
│   └── rapidApi.ts
│
├── controllers/
│   └── football.controller.ts
│
├── services/
│   └── football.service.ts
│
├── routes/
│   └── football.routes.ts
│
├── utils/
│   └── appError.ts
│
├── app.ts
└── server.ts


Funcionalidades da API
    Jogos
    Listar jogos ao vivo
    Buscar jogos por data
    Detalhes da partida
    Estatísticas completas

Ligas:
    Listagem de ligas disponíveis

Notícias:
    Notícias e tendências do futebol

Transferências:
    Transferências recentes de jogadores

Equipas
    Obter logo/escudo do clube

Funcionalidades Principais
    Jogos de futebol em tempo real
    Estatísticas detalhadas
    Notícias em destaque
    Transferências de jogadores
    Jogos por data
    Interface responsiva
    Atualização automática dos dados (polling)

Destaques Técnicos
    Arquitetura modular
    Separação clara entre Controller e Service
    Tratamento centralizado de erros
    Integração limpa com API externa
    Código escalável e de fácil manutenção
    Documentação automática com Swagger
    Padrões profissionais de backend

Documentação da API

    Após iniciar o backend:
        http://localhost:3001/api/docs
            Interface gerada com Swagger.
Instalação Local

Clonar o repositório

git clone https://github.com/adolfoCabeia/api-football.git

Instalar o Backend
    cd backend
    npm install
    npm run dev

Variáveis de Ambiente
    Criar o ficheiro .env:
    PORT=3001
    RAPIDAPI_KEY=sua_api_key
    RAPIDAPI_HOST=free-api-live-football-data.p.rapidapi.com


Melhorias Futuras
    autenticação de utilizadores
    favoritos
    notificações em tempo real via WebSocket
    filtros avançados
    modo escuro
    suporte multilíngue


Autor
Adolfo Cabeia
Full Stack Developer | Node.js | React | TypeScript