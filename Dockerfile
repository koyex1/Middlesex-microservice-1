FROM node:13-alphine

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node", "index.js"]