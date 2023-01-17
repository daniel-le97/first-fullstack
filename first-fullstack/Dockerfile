FROM node:19.4.0-alpine AS build-env
ENV NODE_ENV=production
WORKDIR /app
COPY ./package*.json ./
RUN npm install --omit="dev"
RUN ls
COPY ./ ./
ENV PORT=80
EXPOSE 80
CMD [ "npm", "start" ]