FROM ubuntu:18.04
FROM node:12.16.3

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY . /app

USER root

RUN npm install 

EXPOSE 80

CMD ["npm","start"]
