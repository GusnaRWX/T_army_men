# Install dependencies only when needed

FROM node:16.3.0-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
# Copy package.json package-lock.json ./ 
COPY package.json package-lock.json ./
# Run NPM
RUN npm ci 

# Rebuild the source code only when needed
FROM node:16.3.0-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY .env.local .env.local
# Run NPM Build 
RUN npm run build 

# Production image, copy all the files and run next 
FROM node:16.3.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/client/public ./client/public/
COPY --from=builder /app/client/.next ./client/.next

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "start"]