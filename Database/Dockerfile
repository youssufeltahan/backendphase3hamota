FROM mongo:latest

EXPOSE 27017
COPY db.js /docker-entrypoint-initdb.d/
CMD ["mongod"]
