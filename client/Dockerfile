FROM node:lts-alpine3.15 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/build .

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
