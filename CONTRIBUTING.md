# 📘 Guia de Contribuição – App Fitness

Olá, e seja bem-vindo ao projeto **App Fitness**!  
Antes de começar a contribuir, leia atentamente as instruções abaixo para garantir um fluxo de trabalho organizado e produtivo para todos da equipe.

---

## 🚀 Fluxo de Trabalho (GitFlow Simplificado)

Trabalharemos com **3 branches principais**:

- **`main`**: representa a versão estável e pronta para produção.
- **`develop`**: branch de integração. Todo código aprovado é unificado aqui antes de ir para `main`.
- **`feature/[nome-da-feature]`**: branch para desenvolvimento de novas funcionalidades.

---

## 🧱 Como contribuir

### 1. Clone o repositório
```bash
git clone https://github.com/SpheraCode/app-fitness.git
cd app-fitness
```

### 2. Crie uma nova branch a partir da develop

Use sempre o prefixo `feature/`

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-sua-feature
```

### 3. Faça commits claros e objetivos

Utilize a convenção abaixo para manter o histórico de commits limpo:

    feat: nova funcionalidade

    fix: correção de bug

    docs: documentação

    refactor: refatoração de código

    test: adição ou ajuste de testes

    style: mudanças de formatação (indentação, espaços, ponto e vírgula)

    chore: mudanças de configuração ou build


### 4. Envie sua branch para o repositório remoto
```bash
git push origin feature/nome-da-sua-feature
```

### 5. Crie um Pull Request (PR)

- Vá até o GitHub e clique em "Compare & pull request"

- Compare sua branch com a develop

- Adicione uma descrição clara e objetiva do que foi feito

- Marque alguém para revisar (se necessário)

- Após aprovação, a feature será integrada à develop

## ✅ Regras de aceite

- O código deve estar funcional, testado e sem erros.

- Usar boas práticas de codificação, nomes claros e comentários úteis.

- Evite subir arquivos desnecessários (ex: logs, .env, pastas de build).

- Nunca faça commit diretamente nas branches develop ou main.

## 🔁 Atualizando sua branch com a develop

Antes de abrir o PR, sincronize sua branch com as atualizações da develop:

    git checkout develop
    git pull origin develop
    git checkout feature/nome-da-sua-feature
    git merge develop

Resolva eventuais conflitos, teste novamente e envie:

    git push origin feature/nome-da-sua-feature

## 📌 Dicas úteis

- Mantenha suas branches pequenas e focadas em uma tarefa específica.

- Prefira abrir várias PRs pequenas em vez de uma gigante.

- Utilize o Trello para acompanhar as tarefas e mover os cards conforme o progresso.

- A aba Issues do GitHub pode ser usada para rastrear bugs e ideias de melhoria.
