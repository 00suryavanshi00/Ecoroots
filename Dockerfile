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
