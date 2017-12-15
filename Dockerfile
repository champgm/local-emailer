FROM node:9-alpine
MAINTAINER github.com/champgm

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install
RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3200