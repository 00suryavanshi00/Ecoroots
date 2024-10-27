# FROM node:22.5.1-alpine3.20 AS base

# # 1. Install dependencies only when needed
# FROM base AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat

# WORKDIR /app

# # Install dependencies based on the preferred package manager
# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# RUN npm install


# # 2. Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# # This will do the trick, use the corresponding env file for each environment.
# # COPY .env.production.sample .env.production
# RUN npm run build

# # 3. Production image, copy all the files and run next
# FROM base AS runner
# WORKDIR /app

# ENV NODE_ENV=production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# COPY --from=builder /app/public ./public

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


# USER nextjs

# EXPOSE 3000

# ENV PORT=3000

# CMD HOSTNAME="0.0.0.0" node server.js


# Stage 1: Build the application
# Use the official Node.js image as the base image
FROM node:22.5.1-alpine3.20 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Production image
# Use a smaller image for the final build to reduce size
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Set the environment variable to run Next.js in production mode
ENV NODE_ENV=production

# Expose the port Next.js will run on
EXPOSE 3000

ENV PORT 3000

# Start the application
CMD ["npm", "start"]
