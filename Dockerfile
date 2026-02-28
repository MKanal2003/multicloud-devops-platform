FROM node:18-alpine

WORKDIR /app

COPY . .

ARG VERSION=1
ENV VERSION=$VERSION

EXPOSE 3000

CMD ["node", "app.js"]