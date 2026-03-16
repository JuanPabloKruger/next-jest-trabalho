# Next Jest Trabalho

Projeto desenvolvido para a disciplina de **Arquitetura e Modelagem de Sistemas** com o objetivo de aplicar **Test Driven Development (TDD)** em uma aplicação web utilizando **Next.js e Jest**.

A aplicação implementa um sistema simples de **gerenciamento de tarefas**, com autenticação de usuário, dashboard protegido e testes automatizados.

---

# Tecnologias utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Next.js**
- **React**
- **TypeScript**
- **Jest**
- **Testing Library**
- **GitHub Actions**
- **Vercel**

---

# Arquitetura do projeto

O projeto segue uma estrutura modular, separando responsabilidades entre **componentes, serviços, contexto e utilidades**.


src
├ tests
│ ├ components
│ │ ├ login-form.test.tsx
│ │ └ task-form.test.tsx
│ │
│ ├ api-login.test.ts
│ ├ auth-context.test.tsx
│ ├ auth-service.test.ts
│ ├ dashboard-page.test.tsx
│ ├ login-validation.test.ts
│ ├ sanity.test.ts
│ └ task-service.test.ts
│
├ app
│ ├ api
│ ├ dashboard
│ └ login
│
├ components
│ ├ dashboard
│ └ auth
│
├ context
│ └ AuthContext.tsx
│
├ services
│ ├ auth
│ └ tasks
│
└ utils


Cada camada possui uma responsabilidade específica:

| Camada | Responsabilidade |
|------|------|
components | Interface da aplicação |
services | Lógica de negócio |
context | Gerenciamento de estado global |
utils | Funções utilitárias |
tests | Testes automatizados |

---

# Estratégia de testes (TDD)

O projeto foi desenvolvido utilizando a metodologia **TDD (Test Driven Development)**.

Fluxo utilizado durante o desenvolvimento:

1. **RED**  
Criar um teste que falha.

2. **GREEN**  
Implementar a funcionalidade mínima para o teste passar.

3. **REFACTOR**  
Melhorar o código mantendo os testes funcionando.

---

# Tipos de testes implementados

Foram implementados diversos tipos de testes automatizados:

### Testes unitários
Testam funções e serviços isoladamente.

Exemplo:
- validação de login
- serviço de autenticação
- serviço de tarefas

---

### Testes de componentes
Testam a interface da aplicação.

Exemplo:

- LoginForm
- TaskForm

---

### Testes de contexto
Testam o funcionamento do **AuthContext** e gerenciamento de usuário.

---

### Testes de API
Testam as rotas da aplicação.

Exemplo:

- rota `/api/login`

---

### Testes de Server Components
Testam componentes executados no servidor, como:

- Dashboard
- ServerTaskSummary

---

# Cobertura de testes

O projeto possui cobertura de testes superior a **85%**, garantindo maior confiabilidade da aplicação.

Para executar os testes:

```bash
npm test

Para verificar a cobertura:

npm run test:coverage
CI/CD

O projeto utiliza GitHub Actions para executar os testes automaticamente a cada push no repositório.

Arquivo de configuração:

.github/workflows/ci.yml

Isso garante que nenhuma alteração seja enviada para o repositório sem que os testes passem.

Execução do projeto
Instalar dependências
npm install
Rodar o projeto localmente
npm run dev

A aplicação ficará disponível em:

http://localhost:3000
Deploy

O deploy da aplicação foi realizado utilizando Vercel.

A plataforma permite integração direta com o GitHub e atualização automática da aplicação.

Repositório

GitHub:

https://github.com/JuanPabloKruger/next-jest-trabalho
Autor

Juan Pablo Krüger


---

# Agora faça o commit

No terminal:

```bash
git add README.md
git commit -m "docs: adiciona README completo do projeto"
git push