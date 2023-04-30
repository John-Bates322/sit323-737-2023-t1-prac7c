FROM node:16

#create app directory
WORKDIR /usr/src/app

#install app dependecies
#A wildcard is used to ensure both package.json and package-lock.json are copied
#where avalible
COPY package*.json ./

RUN npm install

#bundle app source
COPY server.js .

EXPOSE 3000
CMD [ "node", "server.js" ]