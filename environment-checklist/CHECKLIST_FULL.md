## ✅ Checklist de Verificação do Ambiente  

### 🔧 Pré-requisitos
- [ ] Docker instalado (`docker -v`)
- [ ] Docker Compose instalado (`docker compose version`)
- [ ] Node.js instalado (`node -v`)
- [ ] Editor de código (ex: VS Code)

---

### 📁 Estrutura de Diretórios
- [ ] Diretório `backend/src/` com arquivo `app.js`
- [ ] Diretório `frontend/` com aplicação front-end (ex: React, HTML/CSS/JS)
- [ ] Arquivo `package.json` com dependências do backend (`express`, `nodemon`, `prisma`, `etc...`)
- [ ] Arquivo `.dockerignore` e `.gitignore` configurados
- [ ] Dockerfile para backend e frontend criados

---

### 🐳 Docker e Docker Compose
- [ ] `Dockerfile` do backend
- [ ] `Dockerfile` do frontend
- [ ] `docker-compose.yml` com 3 serviços:
  - `backend`
  - `frontend`
  - `db` (PostgreSQL)
- [ ] Porta 3001 para backend, 5432 para PostgreSQL e 5173 para frontend
- [ ] Volumes mapeados corretamente
- [ ] Variáveis de ambiente do banco (usuário, senha, nome do banco) definidas

---

### 🛢 Banco de Dados - PostgreSQL
- [ ] Serviço `db` configurado com imagem oficial do PostgreSQL
- [ ] Volume para persistência de dados
- [ ] Criação automática de banco de dados e usuário via variáveis de ambiente
- [ ] Backend acessa o banco usando `prisma`

---

### 🌐 Front-end
- [ ] Diretório com código front-end separado (`react js`, `typescript`, `vite`, `tailwindcss`)
- [ ] Dockerfile que instala dependências e serve os arquivos
- [ ] Serviço `frontend` configurado no `docker-compose.yml`
- [ ] Comunicação com o backend (via API) funcionando
- [ ] Build do front gerado corretamente (se aplicável)

---

### 🚀 Execução e Testes
- [ ] Executar `docker-compose up --build` sem erros
- [ ] Backend acessível em `http://localhost:3001`
- [ ] Front-end acessível em `http://localhost:5173`
- [ ] Testar conexão com banco de dados (GET, POST, etc.)
- [ ] Alterações no backend com `nodemon` são refletidas automaticamente

---

### 🧪 Teste Final
- [ ] Aplicação completa funcional com backend, frontend e banco de dados integrados
- [ ] Pronta para desenvolvimento local com Docker
