FROM node:18-alpine

RUN apk update && apk add --update --no-cache \
    git \
    bash \
    curl \
    openssh \
    python3 \
    py3-pip \
    py-cryptography \
    wget \
    curl

RUN apk --no-cache add --virtual builds-deps build-base python3

RUN pip install --upgrade pip && \
    pip install --upgrade awscli

RUN npm install -g serverless
RUN npm install -g @nestjs/cli

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY ../.. .
RUN npm run build
