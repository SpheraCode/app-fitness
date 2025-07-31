FROM node:slim

RUN apt-get update -y \
&& apt-get install -y openssl

# Mudar para o diretório de trabalho
WORKDIR /app-backend

# Copiar os package.json, package-lock.json e packages.npm para o container
COPY package*.json ./

COPY prisma ./prisma/
# Instalar as dependências Node
RUN npm install

# Roda o comando para gerar a pasta generated do prisma
RUN npx prisma generate

# Copiar o restante dos arquivos da aplicação para o container
COPY . .

# Sinalize que aplicação expõe a porta 3001
EXPOSE 3001

# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
ENTRYPOINT [ "npm", "run" ]

# Comando para iniciar o container
CMD [ "dev" ]
