FROM node:16.15.1-alpine
WORKDIR /react-console
# ENV PATH="./node_modules/.bin:$PATH"
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]