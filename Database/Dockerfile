FROM mongo:latest

# Create a directory for MongoDB data
RUN mkdir -p /data/db /data/configdb

# Set permissions for the directories
RUN chown -R mongodb:mongodb /data/db /data/configdb

# Copy initialization script to the entrypoint directory
COPY db.js /docker-entrypoint-initdb.d/

# Let the entrypoint script handle MongoDB initialization
CMD ["mongod"]
