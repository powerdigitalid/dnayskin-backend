const uploadConfig = require('../config/upload.config');
const multer = require('multer');

exports.upload = multer({ storage: uploadConfig.storage });