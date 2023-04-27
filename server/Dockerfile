FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .. .


ENV DB_NAME=A
ENV DB_URI=A
ENV HASH_SECRET=A
ENV JWT_SECRET=A
ENV PORT=A
EXPOSE $PORT

CMD ["npm", "start"]
