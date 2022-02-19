FROM node as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
COPY ./ ./

RUN yarn
RUN yarn build

FROM nginx
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

# docker build -f docker/dockerfile -t loganlee/front-nia .
# docker run -it -d -p 3400:80 --name front-nia loganlee/front-nia