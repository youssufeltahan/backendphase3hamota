FROM mongo:latest

# Create a directory for MongoDB data
RUN mkdir -p /custom/data/db /custom/data/configdb

# Set permissions for the directories
RUN chown -R mongodb:mongodb /custom/data/db /custom/data/configdb

# Copy initialization script to the entrypoint directory
COPY db.js /docker-entrypoint-initdb.d/

# Set the custom dbpath for MongoDB
CMD ["mongod", "--dbpath", "/custom/data/db"]
