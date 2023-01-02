FROM node:16 AS build-env

WORKDIR /app
# replace with your projects name
COPY ./first-fullstack/package*.json ./
RUN npm install
RUN ls
COPY ./first-fullstack ./


ENV PORT=80
EXPOSE 80
