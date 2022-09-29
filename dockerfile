FROM node:latest

WORKDIR src/server

COPY . .

RUN yarn

CMD ["yarn", "start"]