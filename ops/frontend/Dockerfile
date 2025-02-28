# Use a lightweight Nginx image
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set correct ownership & permissions
WORKDIR /usr/share/nginx/html

# Copy static frontend files
COPY ./dist/browser/ .

# Fix ownership (nginx user should own the files)
RUN chmod -R 755 /usr/share/nginx/html && \
    find /usr/share/nginx/html -type f -exec chmod 644 {} \;

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

