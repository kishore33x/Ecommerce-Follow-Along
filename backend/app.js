const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const ErrorHandler = require("./utils/ErrorHandler");
const errorMiddleware = require("./middleware/error");
const connectDatabase = require("./db/Database");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Import Routes
const userRoutes = require("./routes/user");
app.use("/api/v1/user", userRoutes);  

// ✅ Default Route to Fix "Cannot GET /"
app.get("/", (req, res) => {
    res.send("Welcome to the E-Commerce API!");
});

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
