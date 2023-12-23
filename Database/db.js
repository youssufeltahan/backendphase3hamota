// Initialize script for creating a database and a collection
db = db.getSiblingDB('mydatabase'); // Replace 'mydatabase' with your database name

// Create a collection and insert a document (optional)
db.myCollection.insertOne({ 
    key: 'value',
    // Other fields...
});
