FROM node:alpine as builder

WORKDIR /opencoding

COPY package*.json .

RUN npm install && npm install -g typescript

COPY . . 

RUN tsc

FROM node:lts-slim

WORKDIR /opencoding

COPY package*.json .

RUN npm install --omit=dev

COPY --from=builder /opencoding/build ./build

COPY . .

EXPOSE 3333

RUN chown -R node:node /opencoding  

USER node

# Change entrypoint to nodejs bin path 

CMD ["node", "build/src/index.js"]