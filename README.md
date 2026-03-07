# Gerenciador de Tarefas com Autenticação

Projeto desenvolvido para a disciplina de **Qualidade de Software**.

A aplicação consiste em um sistema simples de gerenciamento de tarefas com autenticação de usuário, dashboard protegido e integração com Firebase.

---

## Repositório

GitHub:  
https://github.com/JuanPabloKruger/next-jest-trabalho

Deploy (Vercel):  
https://next-jest-trabalho.vercel.app

---

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Jest
- React Testing Library
- Firebase Firestore
- GitHub Actions
- Vercel

---

## Arquitetura

A aplicação foi organizada separando responsabilidades para facilitar manutenção e testes.

Principais diretórios:

- **app/** → páginas e rotas da aplicação
- **components/** → componentes React
- **context/** → gerenciamento de autenticação
- **services/** → lógica de negócio e acesso a dados
- **utils/** → funções auxiliares
- **__tests__/** → testes automatizados

---

## Estratégia de testes

Os testes foram implementados utilizando **Jest e React Testing Library**, seguindo as etapas propostas no guia do trabalho.

Foram implementados testes para:

- validação de login
- serviço de autenticação
- componentes React
- Context API
- Server Components
- rotas da API
- mocks de dependências

Também foi configurada **cobertura mínima de testes** e **execução automática via GitHub Actions**.

---

## Executar o projeto

Instalar dependências:
