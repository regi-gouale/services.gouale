# Base image
FROM node:20-alpine AS base
WORKDIR /app

# Dependencies image
FROM base AS deps
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Builder image
FROM base AS builder
RUN npm install -g pnpm
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm dlx prisma generate
RUN pnpm run build

# Runner image
FROM base AS runner
RUN npm install -g pnpm

# Create non-root user
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# Set working directory
WORKDIR /app

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json
# Copy next.config.js only if it exists
COPY --from=builder /app/next.config.* ./

# Copy necessary node modules
COPY --from=builder /app/node_modules ./node_modules

# Copy docker entrypoint script
COPY docker-entrypoint.sh ./
RUN chmod +x ./docker-entrypoint.sh

# Switch to non-root user
# USER nextjs

# Expose port
EXPOSE 3000

# Environment variables
ENV PORT 3000
ENV NODE_ENV production

# Start command
ENTRYPOINT ["/app/docker-entrypoint.sh"]