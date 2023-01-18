FROM node:18.13.0-alpine AS build-env
ENV NODE_ENV=production
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
ENV PORT=80
EXPOSE 80
CMD [ "npm", "start" ]