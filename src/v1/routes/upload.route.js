const express = require('express');
const router = express.Router();
const multer = require('multer');
const appRoot = require('app-root-path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, appRoot + '/uploads');
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' +file.originalname.split('.')[1];
    // cb(null, file.fieldname + '-' + uniqueSuffix);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/image', upload.single('image'), (req, res) => {
  try {
    if(!req.file) {
      res.status(400).json({
        message: 'No file uploaded!',
      });
    } else {
      res.status(200).json({
        message: 'File uploaded successfully!',
        data: '/api/v1/uploaded/' + req.file.filename,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error occurred while uploading the file.',
    });
  }
});

module.exports = router;