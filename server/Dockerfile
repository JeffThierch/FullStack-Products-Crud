FROM node:lts-alpine3.15

WORKDIR /usr/server

COPY package.json .

RUN npm install

COPY . .

CMD npm start