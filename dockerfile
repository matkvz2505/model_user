FROM node:latest

WORKDIR src/server

COPY package*.json ./

RUN npm install

COPY . .

CMD ["yarn", "start"]