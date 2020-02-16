FROM node:12-alpine

WORKDIR /opt/client
COPY . .
RUN yarn install --no-optional --production

ENTRYPOINT ["node", "/opt/client/src/index.js"]