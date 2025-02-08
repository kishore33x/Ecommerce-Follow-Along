require('dotenv').config(); // Load .env variables
const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        if (!process.env.DB_URL) {
            throw new Error("MONGO_URI is undefined. Check your .env file.");
        }

        const conn = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Stop the server if connection fails
    }
};

module.exports = connectDatabase;
