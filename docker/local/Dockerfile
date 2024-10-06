FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 3000

# -d "node_modules" - If true, it will start run dev, otherwise install packages and run dev
CMD [ -d "node_modules" ] && npm run dev || npm install && npm run dev
