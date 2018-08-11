FROM nginx:1.11.3
RUN rm /etc/nginx/nginx.conf
COPY nginx/nginx.conf /etc/nginx/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/conf.d /etc/nginx/conf.d/

COPY ./build /usr/static