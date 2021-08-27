FROM nginx:1.21.1-alpine
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./build /app
COPY ./docker/substitution-environment-vars.sh /docker-entrypoint.d
