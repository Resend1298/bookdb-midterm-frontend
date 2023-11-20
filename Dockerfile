FROM node:21.2-alpine3.17 as build
WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install
COPY src ./src
COPY public ./public
RUN npm run build

FROM nginx:mainline
COPY --from=build /frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
LABEL org.opencontainers.image.source=https://github.com/Resend1298/bookdb-midterm-frontend
