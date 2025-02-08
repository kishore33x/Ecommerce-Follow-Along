const app = require("./app");
const connectDatabase = require("./db/Database"); // Ensure database connection

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
    console.error(`\x1b[31m[${new Date().toISOString()}] Uncaught Exception: ${err.message}\x1b[0m`);
    console.log("Shutting down the server...");
});

// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "config/.env" });
}

// Connect to Database
connectDatabase();

// Set a default port if process.env.PORT is undefined
const PORT = process.env.PORT || 8000;

// Create server
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error(`\x1b[31m[${new Date().toISOString()}] Unhandled Rejection: ${err.message}\x1b[0m`);
    console.log("Shutting down the server gracefully...");
    
    server.close(() => {
        process.exit(1);
    });
});
