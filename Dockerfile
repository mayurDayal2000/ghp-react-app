# Use official node.js image as base
FROM node:current-alpine3.20

# Set the working directory
WORKDIR /testing-app

# Copy the package.json and lock files
COPY package.json yarn.lock ./

# Install dep
RUN yarn install

# Copy rest of the code
COPY . .

# Build the react app
RUN yarn build

# Expose the port 
EXPOSE 3000

# Start the dev
CMD ["yarn", "dev", "--host", "0.0.0.0", "--port", "3000"]