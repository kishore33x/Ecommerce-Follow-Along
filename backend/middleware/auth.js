const jwt = require("jsonwebtoken");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncError");

// Check if user is authenticated
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();
});
