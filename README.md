# App Fitness - Estrutura Inicial

Este repositório contém a estrutura base para um projeto fullstack com separação entre **frontend**, **backend** e **banco de dados**, com suporte a Docker.

---

## Estrutura

- **/frontend** - Aplicação web (React, Vite)
- **/backend** - API (Node.js, Express, etc.)
- **/database** - Scripts, configurações ou volumes relacionados ao banco
- **compose.yaml** - Para orquestração futura dos serviços


## Clonando e subindo o projeto localmente
Certifique-se de ter o node js, docker e docker-compose instalados em sua maquina

Clone o projeto

```bash
  git clone git@github.com:SpheraCode/app-fitness.git
```

Entre na pasta do projeto

```bash
  cd app-fitness
```

crie um arquivo .env na raiz do projeto com a seguinte estrutura

```bash
  POSTGRES_PASSWORD=sua-senha-postgres
```

Entre na pasta do back-end

```bash
  cd backend
```

crie um arquivo .env na pasta backend com a seguinte estrutura
```bash
  //user:password:endereco-do-servidor/nome-do-banco
  DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```
volte para a raiz do projeto
```bash
  cd ../
```

suba o projeto

```bash
  docker-compose up -d
```
ou

```bash
  docker-compose up
```
    