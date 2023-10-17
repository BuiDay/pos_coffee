# Base on offical NGINX Alpine image
FROM nginx:alpine

ADD ./certs/RootCA.pem /etc/nginx/ssl/server.pem
ADD ./certs/RootCA.key /etc/nginx/ssl/server.key
# # Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# # # Copy config files
# # # *.conf files in conf.d/ dir get included in main config
COPY ./default.conf /etc/nginx/conf.d/

# Expose the listening port
EXPOSE 80
EXPOSE 443

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]