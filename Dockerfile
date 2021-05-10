## Build step 1
FROM node:12.18.2 AS builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN npm install
RUN rm -rf /root/.npmrc

COPY . .
RUN npm run build

## Build step 2
FROM node:12.18.2-alpine
WORKDIR /app

# Only add what we need to run the app
COPY --from=builder /app/yarn.lock /app/
COPY --from=builder /app/dist/ /app/dist/
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/*.json/ /app/
COPY --from=builder /app/ormconfig.ts/ /app/

ENTRYPOINT ["node", "/app/dist/main.js"]