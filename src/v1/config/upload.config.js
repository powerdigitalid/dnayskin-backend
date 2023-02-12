const multer = require('multer');
const appRoot = require('app-root-path');

exports.storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, appRoot + '/uploads');
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' +file.originalname.split('.')[1];
    // cb(null, file.fieldname + '-' + uniqueSuffix);
    cb(null, file.originalname);
  },
});