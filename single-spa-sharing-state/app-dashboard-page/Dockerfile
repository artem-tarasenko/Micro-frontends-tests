FROM node:16.13.2-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./

CMD ["npm", "start"]