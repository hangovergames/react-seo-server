# syntax=docker/dockerfile:1
FROM node:14
ENV LANG=en_US.utf8
ENV BACKEND_LOG_LEVEL=DEBUG
ENV BACKEND_URL='http://0.0.0.0:3000'

COPY ./dist /app
CMD node /app/main.js
