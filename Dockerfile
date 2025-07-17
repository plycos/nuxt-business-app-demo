FROM node:22-alpine AS base
RUN npm install -g pnpm

FROM base AS build
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install
COPY ./app /app/app
COPY ./public /app/public
COPY ./server /app/server
COPY nuxt.config.ts /app/nuxt.config.ts
RUN pnpm run build

FROM node:22-alpine AS runtime
WORKDIR /app
COPY --from=build /app/.output /app/.output
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE ${PORT}/tcp
CMD [ "node", ".output/server/index.mjs" ]