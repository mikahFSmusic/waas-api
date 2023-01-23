# Use the official Node.js image as the base dimage
FROM node:14.17.0

# Create a directory for the application
RUN mkdir -p /usr/src/app

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy the package.json and lockfiles to the container
COPY package.json ./

# Install the application's dependencies
RUN yarn install

# Copy the rest of the application's files to the container
COPY src ./src
COPY tsconfig.json ./tsconfig.json

# Copy node_modules from the base image
COPY node_modules ./node_modules

COPY .env ./.env

# Build the application
RUN yarn build

# Expose the container's port 3000 to the host
EXPOSE 3000

# Start the application
CMD [ "yarn", "start" ]