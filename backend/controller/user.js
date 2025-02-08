const User = require("../model/user");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");

// Register a new user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("User already exists", 400));
    }

    // Save profile picture path if uploaded
    const profilePicture = req.file ? req.file.path : "";

    // Create new user
    user = await User.create({ name, email, password, profilePicture });

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user,
    });
});
