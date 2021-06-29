FROM node:14.17.0-alpine3.13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY dist/ .

EXPOSE 3000

CMD ["node", "main.js"]
