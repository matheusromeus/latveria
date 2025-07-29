FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    linux-headers \
    eudev-dev \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev \
    pixman-dev \
    pkgconfig \
    libjpeg-turbo-dev \
    freetype-dev \
    fontconfig-dev \
    librsvg-dev

COPY package.json package-lock.json ./

RUN npm cache clean --force && \
    npm install --legacy-peer-deps --python=/usr/bin/python3 @langchain/core ai ws

COPY . .

RUN npm run build

FROM node:20-alpine AS final
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/server ./server

ENV HOSTNAME="0.0.0.0"
EXPOSE 3000
CMD ["node", "server.js"]
