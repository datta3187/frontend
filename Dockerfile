FROM node:10.15.2

WORKDIR /home/node
COPY --chown=node:node . .

USER node
RUN yarn install

EXPOSE 3000

CMD ["npm", "start"]
