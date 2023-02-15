# Base image
FROM node:latest

# Create and set working directory
WORKDIR /portfolio_fe

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable for serving the application
ENV NODE_ENV production

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
