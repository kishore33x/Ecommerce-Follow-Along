const express = require("express");
const { registerUser } = require("../controller/user");
const upload = require("../middleware/multer");

const router = express.Router();

// Register user with file upload
router.post("/register", upload.single("profilePicture"), registerUser);

module.exports = router;
