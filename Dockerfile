FROM public.ecr.aws/sam/build-nodejs18.x:1.107.0-20240110201056 as builder
WORKDIR /app

COPY package*.json ./
RUN npm i
COPY . .