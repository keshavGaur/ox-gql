FROM node:10.14-alpine as installer

RUN apk add python make

COPY ./.npmrc /home/app/.npmrc
COPY ./package.json /home/app/package.json
WORKDIR /home/app
RUN npm install

FROM installer as tester
COPY . /home/app
WORKDIR /home/app
# Uncomment the below line to add unit test when tests are available
#RUN npm run-script test
RUN npm run-script lint

FROM tester as dev
WORKDIR /home/app
# below command can be start or start-watch
ENTRYPOINT ["/usr/local/bin/npm", "run", "start-watch"]

FROM tester as prod
WORKDIR /home/app
RUN rm -rf node_modules \
  && npm install --production
# below command can be start or start-watch
ENTRYPOINT ["/usr/local/bin/npm", "run", "start-watch"] 
