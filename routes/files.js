const router = require("express").Router();
// import multe upload middleware for handling
const upload = require("../middlewares/upload");

// POST /upload - handle single image upload
router.post("/upload", upload.single("avatar"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ error: "No file uploaded or invalid file type." });
  }
  res.status(200).json({
    message: "File uploaded successfully.",
    file: {
      originalname: req.file.originalname,
      filename: req.file.filename,
      path: req.file.path,
    },
  });
});

module.exports = router;
