FROM node:16.15.1-alpine as build

ARG REACT_APP_MAIN_URL
WORKDIR /react-console
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN REACT_APP_MAIN_URL=${REACT_APP_MAIN_URL} \
    npm run build

FROM nginx:1.17-alpine
COPY --from=build /react-console/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]