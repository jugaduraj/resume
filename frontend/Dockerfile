FROM node:18

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY public ./public
COPY src ./src

RUN npm install

ENV PORT=5173
EXPOSE 5173

CMD ["npm", "start"]
