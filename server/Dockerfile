FROM node:18.16

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci

COPY . .

CMD ["npm", "start"]