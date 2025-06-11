// import multer for handling multipart/form-data
const multer = require("multer");
// Import path module to handle file paths
const path = require("path");

// Storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Set your upload directory
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using the current timestamp and a random number
    // This helps to avoid file name collisions
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// File filter middleware
const fileFilter = (req, file, cb) => {
  // Accept images only
  const allowed = [".jpg", ".jpeg", ".png", ".gif"];
  // get extension of the file in lowercase
  const ext = path.extname(file.originalname).toLowerCase();
  // Check if the file extension is allowed
  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Create the multer upload instance with the specified storage and file filter
const upload = multer({
  storage: storage, // specify the storage configuration
  fileFilter: fileFilter, // specify the file filter
});

module.exports = upload;
