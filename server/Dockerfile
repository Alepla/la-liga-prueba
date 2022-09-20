FROM node:16.4.2 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig*.json ./

COPY ./server.ts ./

COPY ./core ./core

RUN yarn install --frozen-lockfile && yarn build

FROM node:16.4.2-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY --from=builder /usr/src/app/dist ./dist

CMD ["node", "/app/dist/server.js"]